// src/components/ContactForm.tsx
"use client";
/**
 * RHF + zodResolver
 * - A11y: aria-invalid, aria-describedby
 * - Estados: pending, success, error
 * - Anti-spam: honeypot + timestamp
 */
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactSchema,
  type ContactInput,
  submitContact,
} from "@/app/contact/actions";

export default function ContactForm() {
  const [pending, startTransition] = useTransition();
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [ts, setTs] = useState<number>(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { name: "", email: "", message: "", website: "" },
    mode: "onBlur",
  });

  // Timestamp anti-spam
  useEffect(() => {
    setTs(Math.floor(Date.now() / 1000));
  }, []);

  const onSubmit = (values: ContactInput) => {
    setServerMessage(null);
    setFormError(null);
    const fd = new FormData();
    fd.set("name", values.name);
    fd.set("email", values.email);
    fd.set("message", values.message);
    fd.set("website", values.website ?? "");
    fd.set("ts", String(ts));

    startTransition(async () => {
      const res = await submitContact(fd);
      if (!res.ok) {
        if (res.fieldErrors) {
          Object.entries(res.fieldErrors).forEach(([key, msgs]) => {
            if (msgs && msgs.length) {
              // @ts-expect-error indexado seguro
              setError(key, { type: "server", message: msgs[0] });
            }
          });
        }
        if (res.formError) setFormError(res.formError);
        return;
      }
      setServerMessage(res.message ?? "Enviado correctamente.");
      reset();
      setTs(Math.floor(Date.now() / 1000));
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-xl space-y-4"
      noValidate
    >
      {/* Mensajes globales */}
      {serverMessage ? (
        <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
          {serverMessage}
        </div>
      ) : null}
      {formError ? (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {formError}
        </div>
      ) : null}

      {/* Nombre */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-invalid={!!errors.name || undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="mt-1 block w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
          placeholder="Tu nombre"
          {...register("name")}
        />
        {errors.name?.message && (
          <p id="name-error" className="mt-1 text-xs text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email || undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="mt-1 block w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
          placeholder="tu@email.com"
          {...register("email")}
        />
        {errors.email?.message && (
          <p id="email-error" className="mt-1 text-xs text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={5}
          aria-invalid={!!errors.message || undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-1 block w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
          placeholder="Cuéntanos tu caso…"
          {...register("message")}
        />
        {errors.message?.message && (
          <p id="message-error" className="mt-1 text-xs text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot */}
      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {/* Timestamp */}
      <input type="hidden" value={ts} {...register("ts")} />

      {/* Botón */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={pending}
          className="btn-primary w-full sm:w-auto"
        >
          {pending ? "Enviando…" : "Enviar"}
        </button>
      </div>

      <p className="text-xs text-muted-foreground">
        Al enviar aceptas nuestra{" "}
        <a className="underline" href="/privacy">
          política de privacidad
        </a>
        .
      </p>
    </form>
  );
}
