"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type Billing = "monthly" | "yearly";

type Plan = {
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  href: string;
  features: string[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Wellness Starter Plan",
    description: "Designed to enhance sleep quality with tailored insights.",
    monthlyPrice: "$59",
    yearlyPrice: "$590",
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
    monthlyPrice: "$79",
    yearlyPrice: "$790",
    href: "/contact",
    features: [
      "articles and tips",
      "activity reminders",
      "Basic health tracking",
      "articles and tips",
      "Weekly wellness check-in",
    ],
    highlighted: true,
  },
  {
    name: "Weight Management Plan",
    description: "Focus on achieving and maintaining a healthy weight.",
    monthlyPrice: "$99",
    yearlyPrice: "$990",
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

function Switcher({ billing, onChange }: { billing: Billing; onChange: (b: Billing) => void }) {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-8">
      <button
        type="button"
        onClick={() => onChange("monthly")}
        className="inline-flex items-center gap-3 text-sm text-zinc-600"
      >
        <span
          className={
            "h-5 w-5 rounded-full border flex items-center justify-center " +
            (billing === "monthly" ? "border-zinc-950" : "border-zinc-950/30")
          }
        >
          {billing === "monthly" ? <span className="h-2.5 w-2.5 rounded-full bg-zinc-950" /> : null}
        </span>
        Billed monthly
      </button>

      <button
        type="button"
        onClick={() => onChange("yearly")}
        className="inline-flex items-center gap-3 text-sm text-zinc-600"
      >
        <span
          className={
            "h-5 w-5 rounded-full border flex items-center justify-center " +
            (billing === "yearly" ? "border-zinc-950" : "border-zinc-950/30")
          }
        >
          {billing === "yearly" ? <span className="h-2.5 w-2.5 rounded-full bg-zinc-950" /> : null}
        </span>
        Billed yearly
      </button>
    </div>
  );
}

export default function PricingHero() {
  const [billing, setBilling] = useState<Billing>("monthly");

  const resolvedPlans = useMemo(() => {
    return plans.map((p) => {
      const price = billing === "monthly" ? p.monthlyPrice : p.yearlyPrice;
      const unit = billing === "monthly" ? "/month" : "/year";
      return { ...p, price, unit };
    });
  }, [billing]);

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
          Flexible plans for
          <br />
          every health journey
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

      <Switcher billing={billing} onChange={setBilling} />

      <div className="mt-10 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        {resolvedPlans.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: idx * 0.05 }}
            className={
              "rounded-[40px] overflow-hidden bg-[#f0f5f5] " +
              (p.highlighted ? "bg-[#cbefff]/40" : "")
            }
          >
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-start justify-between gap-4 border-b border-zinc-950/10 pb-6">
                <div className="flex items-center gap-3">
                  <h4 className="text-lg font-bold text-zinc-950">{p.name}</h4>
                  {p.badge ? (
                    <div className="rounded-full bg-[#ffce8a] px-4 py-2 text-xs font-semibold text-zinc-950">
                      {p.badge}
                    </div>
                  ) : null}
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-zinc-600 opacity-80">{p.description}</p>

              <div className="mt-10 flex items-end gap-2">
                <div className="text-5xl font-semibold tracking-tight text-zinc-950">{p.price}</div>
                <div className="pb-2 text-sm font-medium text-zinc-950/50">{p.unit}</div>
              </div>

              <div className="mt-10">
                <div className="text-sm font-semibold text-zinc-950">Features:</div>
                <div className="mt-4 flex flex-wrap gap-2">
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
                className={
                  "mt-10 inline-flex w-full h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors " +
                  (p.highlighted
                    ? "bg-zinc-950 text-white hover:bg-zinc-900"
                    : "bg-white text-zinc-950 border border-zinc-950/20 hover:bg-zinc-50")
                }
              >
                Get Started For Free
              </Link>
            </div>

            {p.highlighted ? (
              <div className="h-20 bg-gradient-to-b from-transparent to-[#cbefff]" />
            ) : null}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
