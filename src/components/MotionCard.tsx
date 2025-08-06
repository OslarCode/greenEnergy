"use client";
/**
 * MotionCard: envuelve contenido de una "card" y aplica:
 * - Elevación sutil en hover
 * - Click/tap feedback
 */
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function MotionCard({ className, children }: Props) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: "spring", stiffness: 320, damping: 22, mass: 0.7 }}
      className={clsx("card", className)} // "card" viene de tu globals.css
    >
      {children}
    </motion.div>
  );
}
