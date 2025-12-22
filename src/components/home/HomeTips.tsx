"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  text?: string;
  highlighted?: string;
};

export default function HomeTips({
  text =
    "Receive tailored health tips and alerts based on your individual data trends,",
  highlighted = "helping you make proactive adjustments",
}: Props) {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-16 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[40px]"
      >
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/TXIbSKRPFAwuK68w77ilsUwHjqE.png"
            alt="Tips Image"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 1200px, 100vw"
          />
        </div>

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative px-8 py-12 sm:px-12 sm:py-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white max-w-4xl">
            {text} <span className="text-white/50">{highlighted}</span>
          </h2>
        </div>
      </motion.div>
    </section>
  );
}
