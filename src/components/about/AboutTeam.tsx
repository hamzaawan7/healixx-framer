"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Member = {
  name: string;
  role: string;
  image: string;
};

const members: Member[] = [
  {
    name: "Cameron Williamson",
    role: "Head of design",
    image: "https://framerusercontent.com/images/k4PHswzFOGRSnpZ7MPWrKwrZsFM.png",
  },
  {
    name: "Michael Brown",
    role: "VP of Marketing",
    image: "https://framerusercontent.com/images/oNRpBM9Zwe0Bh3dmEaxZXG4vLs.png",
  },
  {
    name: "David Lee",
    role: "CTO and Co-Founder",
    image: "https://framerusercontent.com/images/c2H0PiVWjr5nqtR2losltOw6w.png",
  },
  {
    name: "Sarah Johnson",
    role: "VP of Engineering",
    image: "https://framerusercontent.com/images/VV7X156wLaNhVEraD3x3YFOFuTE.png",
  },
  {
    name: "David Patel",
    role: "Head of design",
    image: "https://framerusercontent.com/images/TlKNkGph24dTdXM8Mds4keWK1Xw.png",
  },
  {
    name: "Ethan Chen",
    role: "Head of Customer Success",
    image: "https://framerusercontent.com/images/YV7GSaLde0wAl6PNQMOxecXFI5A.png",
  },
];

export default function AboutTeam() {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-16 sm:pt-20 pb-24">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 text-center"
      >
        Meet the team
      </motion.h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {members.map((m, idx) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: idx * 0.05 }}
          >
            <div className="rounded-[40px] bg-[#f0f5f6] overflow-hidden">
              <div className="relative h-[300px] sm:h-[360px]">
                <Image src={m.image} alt="" fill className="object-cover object-top" />
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="text-base font-bold text-zinc-950">{m.name}</div>
              <div className="mt-1 text-sm text-zinc-600">{m.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
