"use client";

import { motion } from "framer-motion";

type Item = {
  title: string;
  headline: string;
  description: string;
};

const items: Item[] = [
  {
    title: "Innovation",
    headline:
      "We use the latest technology to bring you reliable, actionable health insights",
    description: "Our platform empowers you to take charge of your fitness and wellness.",
  },
  {
    title: "Empowerment",
    headline: "Our tools are designed to give you control over your health journey.",
    description: "Define your wellness targets for a personalized experience.",
  },
  {
    title: "Transparency",
    headline:
      "We prioritize your privacy and ensure you know exactly how your data is used.",
    description: "Start monitoring, receive insights, and adjust your habits based on data.",
  },
];

export default function FeaturesWhyChoose() {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-16 sm:pt-20">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950"
      >
        Why Choose Healthaide?
      </motion.h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: idx * 0.05 }}
            className="rounded-[40px] bg-[#f0f5f6] p-6 sm:p-8 lg:p-10"
          >
            <div className="text-2xl font-bold tracking-tight text-zinc-950 uppercase sm:text-3xl">
              {item.title}
            </div>

            <h4 className="mt-20 text-lg sm:text-xl font-bold text-zinc-950 max-w-xs leading-snug">
              {item.headline}
            </h4>

            <div className="mt-6 border-t border-zinc-950/10 pt-6">
              <p className="text-sm leading-7 text-zinc-800 font-medium">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
