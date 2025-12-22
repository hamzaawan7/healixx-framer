"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Row = {
  label: string;
  p1: string;
  p2: string;
  p3: string;
};

const rows: Row[] = [
  {
    label: "Personalized Health Reports",
    p1: "Basic summaries",
    p2: "Detailed reports",
    p3: "Comprehensive insights",
  },
  {
    label: "Goal Setting & Tracking",
    p1: "Basic access",
    p2: "Priority access",
    p3: "Priority access",
  },
  {
    label: "Device Sync",
    p1: "Limited devices",
    p2: "Multiple devices",
    p3: "All compatible devices",
  },
  {
    label: "Custom Reminders",
    p1: "No",
    p2: "No",
    p3: "Yes",
  },
  {
    label: "Health Reports Download",
    p1: "No",
    p2: "PDF format",
    p3: "PDF & CSV formats",
  },
  {
    label: "24/7 Customer Support",
    p1: "Email support",
    p2: "Email & Priority Chat Support",
    p3: "24/7 Priority Support",
  },
];

export default function PricingComparison() {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-16 sm:pt-20">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 text-center"
      >
        Compare between plans
      </motion.h2>

      <div className="mt-12 overflow-x-auto">
        <div className="min-w-[980px]">
          <div className="grid grid-cols-4 gap-6 items-start">
            <div />

            {[
              "Wellness Starter Plan",
              "Sleep Wellness Plan",
              "Weight Management Plan",
            ].map((name) => (
              <div key={name} className="text-center">
                <div className="text-sm font-semibold text-zinc-950">{name}</div>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-full border border-zinc-950/20 bg-white px-6 text-sm font-semibold text-zinc-950 hover:bg-zinc-50 transition-colors"
                >
                  Start plan
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-zinc-950/10" />

          <div className="mt-10 space-y-8">
            {rows.map((r) => (
              <div key={r.label} className="grid grid-cols-4 gap-6">
                <div className="text-sm font-semibold text-zinc-950">{r.label}</div>
                <div className="text-sm text-zinc-600">{r.p1}</div>
                <div className="text-sm text-zinc-600">{r.p2}</div>
                <div className="text-sm text-zinc-600">{r.p3}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
