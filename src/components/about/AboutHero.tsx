"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
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
          Our journey to
          <br />
          health
          <br />
          innovation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
          className="text-base leading-7 text-zinc-600 lg:pt-4 max-w-md lg:justify-self-end"
        >
          Discover powerful features that help you monitor and manage your health effortlessly
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="mt-10 overflow-hidden rounded-[40px]"
      >
        <div className="relative h-[240px] sm:h-[360px] lg:h-[520px]">
          <Image
            src="https://framerusercontent.com/images/7gnlc03XoyHyqj0OEHZP5aunt6Y.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
