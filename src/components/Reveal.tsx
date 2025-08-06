"use client";
/**
 * Reveal: anima su contenido cuando entra en viewport (fade + up)
 * - Debe ser CLIENT component (usa framer-motion)
 * - Exportación DEFAULT (import sin llaves)
 */
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function Reveal({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 160, damping: 20, mass: 0.9 }}
    >
      {children}
    </motion.div>
  );
}
