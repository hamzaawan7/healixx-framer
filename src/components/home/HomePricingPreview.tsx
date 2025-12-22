"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Plan = {
  name: string;
  badge?: string;
  description: string;
  price: string;
  href: string;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Wellness Starter Plan",
    description: "Designed to enhance sleep quality with tailored insights.",
    price: "$59",
    href: "/contact",
    features: [
      "articles and tips",
      "activity reminders",
      "Basic health tracking",
      "articles and tips",
      "Weekly wellness check-in",
    ],
  },
  {
    name: "Sleep Wellness Plan",
    badge: "Popular",
    description: "Ideal for general wellness tracking and building healthy habits.",
    price: "$79",
    href: "/contact",
    features: [
      "articles and tips",
      "activity reminders",
      "Basic health tracking",
      "articles and tips",
      "Weekly wellness check-in",
    ],
  },
  {
    name: "Weight Management Plan",
    description: "Focus on achieving and maintaining a healthy weight.",
    price: "$99",
    href: "/contact",
    features: [
      "articles and tips",
      "activity reminders",
      "Basic health tracking",
      "articles and tips",
      "Weekly wellness check-in",
    ],
  },
];

export default function HomePricingPreview() {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-16 sm:pt-20">
      <div className="flex flex-col gap-3">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950"
        >
          Choose the right plan for your health journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
          className="text-base text-zinc-600"
        >
          Flexible options to suit your health monitoring needs.
        </motion.p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: idx * 0.05 }}
            className="rounded-[40px] bg-[#f0f5f6] overflow-hidden"
          >
            <div className="p-8 sm:p-10">
              <div className="flex items-start justify-between gap-4 border-b border-zinc-950/10 pb-6">
                <div>
                  <h4 className="text-lg font-semibold text-zinc-950">{p.name}</h4>
                </div>
                {p.badge ? (
                  <div className="rounded-full bg-[#ffce8a] px-4 py-2 text-xs font-semibold text-zinc-950">
                    {p.badge}
                  </div>
                ) : null}
              </div>

              <p className="mt-5 text-sm leading-7 text-zinc-600">{p.description}</p>

              <div className="mt-8 flex items-end gap-2">
                <div className="text-5xl font-semibold tracking-tight text-zinc-950">
                  {p.price}
                </div>
                <div className="pb-2 text-sm font-medium text-zinc-950/50">
                  /month
                </div>
              </div>

              <div className="mt-6">
                <div className="text-sm font-semibold text-zinc-950">Features:</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.features.map((f, i) => (
                    <span
                      key={f + i}
                      className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-700"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={p.href}
                className="mt-8 inline-flex w-full h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white hover:bg-zinc-900 transition-colors"
              >
                Get Started For Free
              </Link>
            </div>

            <div className="h-20 bg-gradient-to-b from-transparent to-[#cbefff]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
