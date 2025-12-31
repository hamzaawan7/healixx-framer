"use client";

import { motion } from "framer-motion";

type Props = {
  heading?: string;
  description?: string;
};

export default function FeaturesCounterStrip({
  heading = "Healthaide has everything you need to monitor, track, and improve health.",
  description =
    "We believe in a future where everyone can take control of their wellness with tools that guide, support, and inspire daily healthy habits.",
}: Props) {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-16 sm:pt-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950 max-w-lg leading-[1.1]">
            {heading}
          </h3>
          <p className="mt-6 max-w-lg text-base sm:text-lg leading-7 text-zinc-800">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
          className="grid gap-10 sm:grid-cols-2"
        >
          <div>
            <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
              10000+
            </div>
            <div className="mt-4 border-t border-zinc-950/10 pt-4 text-sm leading-7 text-zinc-800 font-medium">
              Thousands of active users worldwide
            </div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
              80%
            </div>
            <div className="mt-4 border-t border-zinc-950/10 pt-4 text-sm leading-7 text-zinc-800 font-medium">
              User Satisfaction rate increased
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
