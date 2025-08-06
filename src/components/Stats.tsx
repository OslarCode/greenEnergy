"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Reveal from "@/components/Reveal";
import { stats } from "@/content/home";

export default function Stats() {
  return (
    <section className="bg-gray-50 py-2 md:py-8">
      <div className="container">
        <Reveal>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <StatItem key={s.label} value={s.value} label={s.label} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

// Componente para animar cada número
function StatItem({ value, label }: { value: number; label: string }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({
        val: value,
        transition: { duration: 2, ease: "easeOut" },
      });
    }
  }, [inView, value, controls]);

  return (
    <motion.li
      ref={ref}
      className="card p-6 text-center"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <motion.div
        className="text-3xl font-bold"
        animate={controls}
        initial={{ val: 0 }}
        onUpdate={(latest) => {
          setCount(Math.floor((latest as any).val || 0));
        }}
      >
        {count}
      </motion.div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </motion.li>
  );
}
