"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Step = {
  step: string;
  title: string;
  description: string;
  href: string;
};

const steps: Step[] = [
  {
    step: "01",
    title: "Download the app and connect your devices",
    description: "For access sync Healthaide with your health wearables for updates.",
    href: "/features",
  },
  {
    step: "02",
    title: "Set your health goals and start monitoring your journey",
    description: "Define your wellness targets for a personalized experience.",
    href: "/features",
  },
  {
    step: "03",
    title: "Track & achieve your desired goal and stay healthy",
    description: "Start monitoring, receive insights, and adjust your habits based on data.",
    href: "/features",
  },
];

export default function HomeSteps() {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-16 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
          Simple steps get to start your health journey
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {steps.map((s, idx) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: idx * 0.05 }}
            className="rounded-[40px] bg-[#f0f5f6] overflow-hidden"
          >
            <div className="p-8 sm:p-10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-baseline gap-2">
                  <div className="text-lg font-semibold text-zinc-950">Step</div>
                  <div className="text-lg font-semibold text-zinc-950/50">
                    {s.step}
                  </div>
                </div>
                <Link
                  href={s.href}
                  className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-950/15 bg-transparent px-5 text-sm font-semibold text-zinc-700 hover:bg-white/40 transition-colors"
                >
                  Explore
                </Link>
              </div>

              <h4 className="mt-6 text-lg font-semibold text-zinc-950">
                {s.title}
              </h4>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
