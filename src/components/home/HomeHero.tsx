"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type HeroProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function HomeHero({
  title,
  description,
  ctaLabel,
  ctaHref,
}: HeroProps) {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-10 sm:pt-12">
      <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px]">
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/2XZmsnogWjbjRqOaz7J1lVwGg.png"
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/55" />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-2 px-6 sm:px-10 lg:px-12 py-10 sm:py-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="min-w-0"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
              <span className="relative h-4 w-4">
                <Image
                  src="https://framerusercontent.com/images/xz12CPefXal63ARL4ocQKaHQTs.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </span>
              Reliable Solutions for Everyday Care
            </div>

            <h1 className="mt-6 text-white text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1]">
              {title}
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-white font-medium max-w-xl opacity-90">
              {description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href={ctaHref}
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-zinc-950 shadow-lg shadow-black/20 hover:bg-zinc-100 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {ctaLabel}
              </Link>
              <Link
                href="/features"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 text-sm font-bold text-white hover:bg-white/20 transition-all backdrop-blur hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore
              </Link>
            </div>

            <div className="mt-10 w-full max-w-sm rounded-[28px] bg-white/12 ring-1 ring-white/20 backdrop-blur px-6 py-6">
              <div className="flex items-end gap-1">
                <div className="text-white text-5xl font-semibold tracking-tight leading-none">
                  190
                </div>
                <div className="pb-1 text-white text-3xl font-semibold leading-none">
                  K+
                </div>
              </div>
              <p className="mt-3 text-sm text-white/80">
                Cured satisfied patients around the globe
              </p>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex -space-x-3">
                  {[
                    "https://framerusercontent.com/images/mtXy0D5AuYvsW5kJo6XDAi11FEs.png",
                    "https://framerusercontent.com/images/TcQigYXQSNo3CKb19FRu0igvPtk.png",
                    "https://framerusercontent.com/images/buPUhtj1Ptg9TzyLz4UxnvTE.png",
                  ].map((src) => (
                    <div
                      key={src}
                      className="relative h-12 w-12 rounded-full ring-2 ring-white/30 overflow-hidden"
                    >
                      <Image src={src} alt="Client" fill className="object-cover" />
                    </div>
                  ))}
                </div>

                <div className="relative h-5 w-11 opacity-90">
                  <Image
                    src="https://framerusercontent.com/images/rQoypmdcRYr3cYhJsOOHbuPHk.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
            className="min-w-0"
          >
            <div className="lg:justify-self-end flex flex-col items-end gap-4">
              <div className="flex flex-wrap justify-end gap-2 max-w-sm">
                {[
                  "Rehabilitation",
                  "Healthcare",
                  "Monitoring",
                  "Technology",
                  "Personalized",
                ].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center justify-center rounded-2xl bg-[#8898ab]/50 px-4 py-2 text-xs font-semibold text-white backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
                <div className="rounded-[28px] bg-white shadow-lg shadow-black/10 p-5">
                  <div className="flex items-center justify-between">
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
                      className="inline-flex h-9 items-center justify-center rounded-full border border-zinc-200 bg-white px-4 text-xs font-semibold text-zinc-950 hover:bg-zinc-50 transition-colors"
                    >
                      Explore
                    </Link>
                  </div>
            <h4 className="mt-5 text-lg font-bold text-zinc-950">
                    Personalized care
                    <br />
                    and demand
                  </h4>
                  <p className="mt-2 text-sm text-zinc-800 font-medium">
                    From daily wellness to advanced health insights we support.
                  </p>

                  <div className="mt-5 flex items-end justify-between">
                    <div className="flex items-end gap-1">
                      <div className="text-3xl font-semibold text-zinc-950">
                        78
                      </div>
                      <div className="pb-1 text-2xl font-semibold text-zinc-950">
                        %
                      </div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-zinc-950/5 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-zinc-950/40" />
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[28px] bg-white shadow-lg shadow-black/10 p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-lg font-semibold text-zinc-950">
                        150+
                      </div>
                      <div className="text-sm text-zinc-600">Doctors</div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className={
                            "h-2 w-2 rounded-full " +
                            (i === 0 ? "bg-[#f0f5f6]" : "bg-[#f0f5f6]")
                          }
                        />
                      ))}
                    </div>
                  </div>

                  <div className="absolute -bottom-10 -right-10 h-48 w-48 opacity-80">
                    <Image
                      src="https://framerusercontent.com/images/ckho9mWEqsCaT995AdMBnUdF0Q.svg"
                      alt=""
                      fill
                      className="object-contain object-bottom"
                    />
                  </div>

                  <div className="relative mt-6 h-44 w-full overflow-hidden rounded-2xl">
                    <Image
                      src="https://framerusercontent.com/images/UOMUepVQXzu9Z4Iu7nm30ARGDI.png"
                      alt="Hero image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
