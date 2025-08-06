"use client";
/**
 * Accordion accesible + animado:
 * - Un único abierto a la vez (mode="single") o múltiples (mode="multiple")
 * - Teclado: Enter/Espacio para abrir/cerrar
 * - ARIA: aria-expanded, aria-controls, role="region"
 * - Animación de altura+opacidad con framer-motion
 */
import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

type Item = { id: string; question: string; answer: string };
type Mode = "single" | "multiple";

export function Accordion({
  items,
  mode = "single",
  className,
}: {
  items: Item[];
  mode?: Mode;
  className?: string;
}) {
  const [openIds, setOpenIds] = useState<string[]>(
    mode === "single" ? [items[0]?.id].filter(Boolean) : []
  );

  function toggle(id: string) {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (mode === "single") {
        return isOpen ? [] : [id];
      }
      // multiple
      return isOpen ? prev.filter((x) => x !== id) : [...prev, id];
    });
  }

  return (
    <ul
      className={clsx("mx-auto max-w-3xl divide-y divide-gray-200", className)}
    >
      {items.map((it) => (
        <AccordionItem
          key={it.id}
          item={it}
          open={openIds.includes(it.id)}
          onToggle={() => toggle(it.id)}
        />
      ))}
    </ul>
  );
}

function AccordionItem({
  item,
  open,
  onToggle,
}: {
  item: { id: string; question: string; answer: string };
  open: boolean;
  onToggle: () => void;
}) {
  const contentId = useId(); // id único para aria-controls

  return (
    <li className="py-3">
      <button
        type="button"
        className={clsx(
          "flex w-full items-center justify-between gap-4 py-3 text-left",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
        )}
        aria-expanded={open}
        aria-controls={contentId}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        <span className="text-base font-medium">{item.question}</span>
        <span
          aria-hidden
          className={clsx(
            "inline-flex h-6 w-6 items-center justify-center rounded border",
            open ? "rotate-45" : "rotate-0",
            "transition-transform"
          )}
          title={open ? "Contraer" : "Expandir"}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={contentId}
            role="region"
            aria-label={item.question}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 24,
              mass: 0.9,
            }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-sm text-muted-foreground">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
