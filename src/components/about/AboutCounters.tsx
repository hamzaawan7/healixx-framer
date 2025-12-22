"use client";

import { motion } from "framer-motion";

type Item = {
  value: string;
  suffix?: string;
  label: string;
};

const items: Item[] = [
  { value: "50", suffix: "%", label: "Reduction in\nEmergency Visits" },
  { value: "10000", suffix: "+", label: "Thousands of active\nusers worldwide" },
  { value: "24", suffix: "/7", label: "Monitoring with 99%\nAccuracy" },
  { value: "80", suffix: "%", label: "User Satisfaction\nrate increased" },
];

export default function AboutCounters() {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-16 sm:pt-20">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, idx) => (
          <motion.div
            key={item.value + item.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: idx * 0.05 }}
          >
            <div className="flex items-end gap-0.5">
              <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
                {item.value}
              </div>
              {item.suffix ? (
                <div className="pb-1 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
                  {item.suffix}
                </div>
              ) : null}
            </div>

            <div className="mt-6 border-t border-zinc-950/10 pt-6">
              <div className="whitespace-pre-line text-sm leading-7 text-zinc-600 opacity-70">
                {item.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
