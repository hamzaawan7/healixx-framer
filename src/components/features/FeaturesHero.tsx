"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function FeaturesHero({
  title = "Explore our health monitoring features",
  description =
    "Discover powerful features that help you monitor and manage your health effortlessly",
  ctaLabel = "Book Your Appoinment",
  ctaHref = "/appointment",
}: Props) {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-14 sm:pt-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-zinc-950">
            {title}
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-zinc-600">
            {description}
          </p>
          <div className="mt-8">
            <Link
              href={ctaHref}
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-950/20 bg-white px-6 text-sm font-semibold text-zinc-950 hover:bg-zinc-50 transition-colors"
            >
              {ctaLabel}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
          className="relative overflow-hidden rounded-[32px] sm:rounded-[40px]"
        >
          <div className="relative aspect-[16/12] w-full">
            <Image
              src="https://framerusercontent.com/images/RLZ7HG0B2VXzPuhBCIrX8aAAII.png"
              alt="Hero Image"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0">
            <div className="absolute left-6 bottom-6 sm:left-10 sm:bottom-10 w-[92%] max-w-sm rounded-[28px] bg-white/85 backdrop-blur p-6 shadow-2xl ring-1 ring-black/5">
              <div className="flex items-center justify-between gap-4">
                <div className="relative h-7 w-24">
                  <Image
                    src="https://framerusercontent.com/images/CzT5Uj890xo8WuZWLcMHca8t5z0.svg"
                    alt=""
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <Link
                  href="/about"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-950/15 bg-transparent px-5 text-sm font-semibold text-zinc-700 hover:bg-white/60 transition-colors"
                >
                  Explore
                </Link>
              </div>

              <h4 className="mt-4 text-lg font-semibold text-zinc-950">
                Health Monitoring Matters
              </h4>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Studies show that proactive health tracking can reduce chronic health risks by
                up to
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
