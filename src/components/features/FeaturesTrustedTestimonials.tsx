"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Testimonial = {
  title: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    title: "Healix has been a game-changer for me.",
    quote:
      "I can now track my vitals and sleep patterns daily, and Healix has been a game-changer for me it’s helped me build healthier habits!",
    name: "Brooklyn Simmons",
    role: "Product Manager",
    avatar: "https://framerusercontent.com/images/TB8ARRgbrwfOQt4BIe12CNL6LA.png",
  },
  {
    title: "I love the doctor chat feature!",
    quote:
      "Getting expert advice on my health questions without leaving home has been incredibly convenient and I loved it so much!",
    name: "Arlene McCoy",
    role: "Product Designer",
    avatar: "https://framerusercontent.com/images/YH1lZSJiulK7eXqigTJIHSLp7p0.png",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34 32"
          className="h-5 w-5"
        >
          <path
            d="M 15.879 1.209 C 16.293 0.235 17.707 0.235 18.121 1.209 L 21.854 9.967 C 22.028 10.379 22.424 10.66 22.878 10.695 L 32.568 11.454 C 33.644 11.537 34.08 12.849 33.261 13.535 L 25.878 19.706 C 25.532 19.995 25.381 20.449 25.487 20.882 L 27.743 30.11 C 27.993 31.136 26.85 31.947 25.929 31.397 L 17.633 26.451 C 17.244 26.22 16.756 26.22 16.367 26.451 L 8.071 31.397 C 7.15 31.945 6.007 31.136 6.257 30.11 L 8.513 20.882 C 8.619 20.449 8.468 19.995 8.122 19.706 L 0.739 13.535 C -0.08 12.849 0.356 11.537 1.432 11.452 L 11.122 10.694 C 11.575 10.658 11.97 10.378 12.145 9.969 Z"
            fill="rgb(255, 186, 51)"
          />
        </svg>
      ))}
    </div>
  );
}

export default function FeaturesTrustedTestimonials() {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-16 sm:pt-20">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 text-center"
      >
        Trusted by thousands worldwide
      </motion.h2>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: idx * 0.05 }}
            className="rounded-[40px] bg-white"
          >
            <div className="p-8 sm:p-10">
              <Stars />
              <div className="mt-6 border-t border-zinc-950/10 pt-6">
                <h4 className="text-lg font-semibold text-zinc-950">{t.title}</h4>
                <p className="mt-3 text-base leading-7 text-zinc-600">{t.quote}</p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border-[6px] border-white shadow-sm ring-1 ring-black/5">
                    <Image src={t.avatar} alt="" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-950">{t.name}</div>
                    <div className="text-sm text-zinc-600">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
