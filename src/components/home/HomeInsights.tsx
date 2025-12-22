"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  heading: string;
  highlighted: string;
  cardTitle: string;
  cardDescription: string;
};

export default function HomeInsights({
  heading,
  highlighted,
  cardTitle,
  cardDescription,
}: Props) {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-16 sm:pt-20 pb-20">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 text-center max-w-4xl mx-auto"
      >
        {heading} <span className="text-zinc-950/50">{highlighted}</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="mt-12 relative overflow-hidden rounded-[40px]"
      >
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/1xEfO2m1guE7P606QPKDfjV58JI.png"
            alt="Insight background"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/20" />

        <div className="relative h-[560px] sm:h-[480px]">
          <div className="absolute left-6 right-6 top-6 sm:left-auto sm:right-8 sm:top-8 flex flex-wrap justify-start sm:justify-end gap-2 sm:max-w-xs">
            {[
              "Rehabilitation",
              "Healthcare",
              "Monitoring",
              "Technology",
              "Personalized",
            ].map((t) => (
              <span
                key={t}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-2 text-xs font-semibold text-zinc-700 backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="absolute left-6 right-6 bottom-6 sm:left-10 sm:right-auto sm:bottom-10 w-auto sm:w-[92%] max-w-sm rounded-[32px] bg-white p-6 shadow-2xl ring-1 ring-black/5">
            <div className="flex items-start justify-between gap-4">
              <div className="relative h-7 w-24">
                <Image
                  src="https://framerusercontent.com/images/CzT5Uj890xo8WuZWLcMHca8t5z0.svg"
                  alt=""
                  fill
                  className="object-contain object-left"
                />
              </div>

              <Link
                href="/features"
                className="inline-flex h-9 items-center justify-center rounded-full border border-zinc-950/15 bg-white px-4 text-xs font-semibold text-zinc-950 hover:bg-zinc-50 transition-colors"
              >
                Explore
              </Link>
            </div>

            <h4 className="mt-5 text-lg font-semibold text-zinc-950">
              {cardTitle}
            </h4>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              {cardDescription}
            </p>

            <div className="mt-6 flex items-end justify-between">
              <div className="flex items-end gap-1">
                <div className="text-4xl font-semibold text-zinc-950">78</div>
                <div className="pb-1 text-3xl font-semibold text-zinc-950">
                  %
                </div>
              </div>

              <div className="relative h-6 w-6 opacity-70">
                <Image
                  src="https://framerusercontent.com/images/IWcFftdYXjZ7HhraKhzRcr8A0.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
