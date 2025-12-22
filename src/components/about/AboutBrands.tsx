"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  {
    src: "https://framerusercontent.com/images/m4tV45lRjvUIf0z18FxwA50BM.svg",
    w: 125,
    h: 19,
    alt: "innovio",
  },
  {
    src: "https://framerusercontent.com/images/oppPaL7oWYXznQ5DZvl80Mr0U.svg",
    w: 97,
    h: 27,
    alt: "sparkle",
  },
  {
    src: "https://framerusercontent.com/images/d0d4onY0iEbo6B0IhsyEH3q6M.svg",
    w: 131,
    h: 27,
    alt: "Lum Labs",
  },
  {
    src: "https://framerusercontent.com/images/jfsby3cSVAlAkLyUBexf98vDKvU.svg",
    w: 123,
    h: 25,
    alt: "Craftgram",
  },
  {
    src: "https://framerusercontent.com/images/XQ8wwxBjV22q7TXs6WsE7MFcUGc.svg",
    w: 99,
    h: 31,
    alt: "ZenZap",
  },
];

export default function AboutBrands() {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-16 sm:pt-20">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 text-center max-w-4xl mx-auto"
      >
        Healix is redefining how people connect with their health data—
        <span className="text-zinc-950/50">empowering them to make informed decisions every day.</span>
      </motion.h2>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
        {logos.map((l) => (
          <div key={l.src} className="relative" style={{ width: l.w, height: l.h }}>
            <Image src={l.src} alt={l.alt} fill className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
