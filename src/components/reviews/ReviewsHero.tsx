"use client";

import { motion } from "framer-motion";

type Props = {
  title?: string;
  description?: string;
};

export default function ReviewsHero({
  title = "What our users are saying",
  description =
    "Discover powerful features that help you monitor and manage your health effortlessly",
}: Props) {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-14 sm:pt-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-4xl sm:text-6xl font-semibold tracking-tight text-zinc-950"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
          className="text-base leading-7 text-zinc-600 lg:pt-4 max-w-md lg:justify-self-end"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
