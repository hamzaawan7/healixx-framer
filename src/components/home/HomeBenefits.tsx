"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Benefit = {
  title: string;
  description: string;
  iconSrc: string;
  href: string;
};

type Props = {
  heading: string;
  items?: Benefit[];
};

const defaultItems: Benefit[] = [
  {
    title: "Enhanced health awareness",
    description: "Healthaide encourages users to stay active through custom goals.",
    iconSrc:
      "https://framerusercontent.com/images/Ob2seBZcyIMDMk2KWTvjhy7tRMQ.svg",
    href: "/features",
  },
  {
    title: "Boost in physical activity levels",
    description: "Healthaide is designed to help track and understand lifestyle.",
    iconSrc:
      "https://framerusercontent.com/images/eSQyPlznMkAqrWQHrH7TXHokZQ.svg",
    href: "/features",
  },
  {
    title: "Faster response to health changes",
    description: "Healthaide is designed to help track and understand lifestyle.",
    iconSrc:
      "https://framerusercontent.com/images/eSQyPlznMkAqrWQHrH7TXHokZQ.svg",
    href: "/features",
  },
];

const middleCardBg =
  "https://framerusercontent.com/images/andCpPt4jBacvOjQq85iVP07Lk.png";

export default function HomeBenefits({ heading, items = defaultItems }: Props) {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-16 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
          {heading}
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-5 sm:grid-cols-1 md:grid-cols-3">
        {items.map((b, idx) => (
          <motion.div
            key={b.title + idx}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: idx * 0.05 }}
            className={
              idx === 1
                ? "relative overflow-hidden rounded-[40px]"
                : "rounded-[40px] bg-[#f0f5f6] p-6 sm:p-8 lg:p-10"
            }
          >
            {idx === 1 ? (
              <>
                <div className="absolute inset-0">
                  <Image
                    src={middleCardBg}
                    alt="Feature Image"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>

                <div className="absolute inset-0 bg-black/0" />

                <div className="relative h-full min-h-[420px] p-6 sm:p-8 lg:p-10">
                  <div className="absolute right-8 top-8">
                    <Link
                      href={b.href}
                      className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-950/15 bg-transparent px-5 text-sm font-semibold text-zinc-700 hover:bg-white/40 transition-colors"
                    >
                      Explore
                    </Link>
                  </div>

                  <div className="flex flex-wrap gap-2 pr-28">
                    <span className="inline-flex items-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 shadow-sm ring-1 ring-black/5">
                      Boost in physical
                    </span>
                    <span className="inline-flex items-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 shadow-sm ring-1 ring-black/5">
                      activity levels
                    </span>
                  </div>

                  <div className="mt-auto" />

                  <div className="absolute left-6 right-6 bottom-6 flex flex-wrap gap-2">
                    {[
                      { label: "Step count", variant: "secondary" as const },
                      { label: "Physical activity", variant: "primary" as const },
                      { label: "Custom goals", variant: "primary" as const },
                      { label: "Cardiovascular", variant: "secondary" as const },
                      { label: "Fitness", variant: "primary" as const },
                    ].map((t) => (
                      <span
                        key={t.label}
                        className={
                          t.variant === "secondary"
                            ? "inline-flex items-center justify-center rounded-2xl bg-white/90 px-4 py-2 text-xs font-semibold text-zinc-700 backdrop-blur"
                            : "inline-flex items-center justify-center rounded-2xl bg-slate-400/50 px-4 py-2 text-xs font-semibold text-white backdrop-blur"
                        }
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-xl font-bold text-zinc-950">
                    {b.title}
                  </h4>
                  <Link
                    href={b.href}
                    className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-950/15 bg-transparent px-5 text-sm font-semibold text-zinc-700 hover:bg-white/40 transition-colors"
                  >
                    Explore
                  </Link>
                </div>

                <div className="mt-5 border-t border-zinc-950/10 pt-6">
                  <p className="text-sm leading-7 text-zinc-800 font-medium">
                    {b.description}
                  </p>

                  <div className="mt-10 flex items-end justify-between">
                    <div className="relative h-14 w-14 rounded-full bg-zinc-950 p-3">
                      <Image
                        src={b.iconSrc}
                        alt=""
                        fill
                        className="object-contain p-3"
                      />
                    </div>

                    <div className="flex items-end gap-1">
                      <div className="text-4xl font-semibold text-zinc-950">
                        {idx === 2 ? "78.00" : "250"}
                      </div>
                      <div className="pb-1 text-3xl font-semibold text-zinc-950">
                        {idx === 2 ? "%" : "k+"}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
