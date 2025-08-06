// src/app/contact/actions.ts
"use server";
/**
 * Server Action con:
 * - Validación Zod (cliente y servidor)
 * - Anti-spam: honeypot + tiempo min. entre render y submit
 * - Rate limit con Upstash (sliding window)
 * - Entrega con Resend (email)
 * - (Opcional) Persistencia en DB (Prisma) — comentado
 */

import { z } from "zod";
import { headers } from "next/headers";

// ---------- Zod schema ----------
export const ContactSchema = z.object({
  name: z.string().min(2, "El nombre es demasiado corto").max(80),
  email: z.string().email("Email inválido").max(120),
  message: z.string().min(10, "Cuéntanos un poco más").max(2000),
  // Anti-spam (ocultos)
  website: z.string().optional(), // honeypot: debe ir vacío
  ts: z.string().optional(), // timestamp de render en cliente (segundos)
});

export type ContactInput = z.infer<typeof ContactSchema>;

export type ActionResult = {
  ok: boolean;
  message?: string;
  fieldErrors?: Partial<Record<keyof ContactInput, string[]>>;
  formError?: string;
};

// ---------- Utils ----------
const nowSec = () => Math.floor(Date.now() / 1000);

// ---------- Rate limit (Upstash) ----------
/**
 * 5 solicitudes / 10 min por IP
 * Requiere .env: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN
 */
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL!,
        token: process.env.UPSTASH_REDIS_REST_TOKEN!,
      })
    : null;

const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "10 m"),
      analytics: true,
    })
  : null;

// ---------- Envío de email (Resend) ----------
/**
 * Requiere .env:
 * - RESEND_API_KEY
 * - RESEND_FROM (e.g., "Green Energy <contact@tu-dominio.com>")
 * - RESEND_TO   (destino interno; p.ej. "ventas@tu-dominio.com")
 */
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;
const FROM = process.env.RESEND_FROM;
const TO = process.env.RESEND_TO;

// (Opcional) Prisma
// import { prisma } from "@/lib/prisma"; // si configuras Prisma

export async function submitContact(formData: FormData): Promise<ActionResult> {
  // 1) Parse
  const raw = Object.fromEntries(formData.entries()) as Record<string, string>;
  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      fieldErrors: parsed.error.flatten()
        .fieldErrors as ActionResult["fieldErrors"],
      formError: "Revisa los campos marcados.",
    };
  }
  const data = parsed.data;

  // 2) Anti-spam: honeypot
  if (data.website && data.website.trim().length > 0) {
    // No damos pistas: respondemos éxito "silencioso"
    return { ok: true, message: "Gracias" };
  }

  // 3) Anti-spam: tiempo mínimo (≥ 3s desde render)
  const minSeconds = 3;
  const tsClient = Number(data.ts || 0);
  if (!Number.isNaN(tsClient) && tsClient > 0) {
    const elapsed = nowSec() - tsClient;
    if (elapsed < minSeconds) {
      return { ok: false, formError: "Demasiado rápido. Inténtalo de nuevo." };
    }
  }

  // 4) Rate limit por IP (si Upstash está configurado)
  if (ratelimit && redis) {
    const ip = (headers().get("x-forwarded-for") ?? "unknown")
      .split(",")[0]
      .trim();
    const { success } = await ratelimit.limit(`contact:${ip}`);
    if (!success) {
      return {
        ok: false,
        formError: "Has alcanzado el límite de envíos. Prueba más tarde.",
      };
    }
  }

  // 5) Entrega: enviar email con Resend (si está configurado)
  if (resend && FROM && TO) {
    try {
      await resend.emails.send({
        from: FROM,
        to: TO,
        reply_to: data.email,
        subject: `Nuevo contacto de ${data.name}`,
        text: `Nombre: ${data.name}\nEmail: ${data.email}\n\nMensaje:\n${data.message}`,
      });
    } catch (err) {
      // Log server-side si quieres
      return {
        ok: false,
        formError: "No se pudo enviar el correo. Intenta más tarde.",
      };
    }
  }

  // 6) (Opcional) Guardar en DB con Prisma
  // try {
  //   await prisma.message.create({
  //     data: { name: data.name, email: data.email, message: data.message },
  //   });
  // } catch {
  //   return { ok: false, formError: "No se pudo registrar el mensaje. Intenta más tarde." };
  // }

  // 7) OK
  return { ok: true, message: "¡Gracias! Te contactaremos muy pronto." };
}
