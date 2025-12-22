"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Review = {
  title: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const reviews: Review[] = [
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
      "Using Healix has transformed my daily routine—I’m more aware of my health metrics and motivated to improve them!",
    name: "Arlene McCoy",
    role: "Product Designer",
    avatar: "https://framerusercontent.com/images/YH1lZSJiulK7eXqigTJIHSLp7p0.png",
  },
  {
    title: "Using Healix has completely transformed my health.",
    quote:
      "Thanks to Healix, I can monitor my sleep quality and heart rate effortlessly, helping me stay on top of my wellness goals.",
    name: "Daniel Caldwell",
    role: "User Experience Designer",
    avatar: "https://framerusercontent.com/images/snKsH7qqRyWkaaumhEJ8k8mdQpE.png",
  },
  {
    title: "I can’t imagine managing my wellness without Healix now.",
    quote:
      "Healix has made tracking my activity levels so easy, and I’m already seeing the positive impact on my energy and focus!",
    name: "Michael Bennett",
    role: "Visual Designer",
    avatar: "https://framerusercontent.com/images/X5NAl5PZYt5o8NWwKwJM9SuMipU.png",
  },
  {
    title: "Healix has taken my health tracking to the next level.",
    quote:
      "I love how Healix keeps me informed about my vitals; it’s encouraged me to make healthier choices every day.",
    name: "James Lawson",
    role: "Interaction Designer",
    avatar: "https://framerusercontent.com/images/OKRsRfIVrVEVZr9Ift1tSeZSrpA.png",
  },
  {
    title: "With Healix, staying on top of my goals feels effortless.",
    quote:
      "With Healix, I’m finally taking control of my fitness and sleep habits—it’s been an incredible addition to my wellness routine.",
    name: "Ethan Cole",
    role: "Service Designer",
    avatar: "https://framerusercontent.com/images/b6KJTsLCTUWKOD3rzFUmvl57fWo.png",
  },
  {
    title: "Switching to Healix was the best choice for my wellness.",
    quote:
      "Healix has been amazing for staying mindful of my health—it’s helped me set and achieve meaningful wellness goals.",
    name: "Benjamin Tate",
    role: "UX Researcher",
    avatar: "https://framerusercontent.com/images/OKRsRfIVrVEVZr9Ift1tSeZSrpA.png",
  },
  {
    title: "Healix makes managing my health simple and effective.",
    quote:
      "Tracking my daily habits with Healix has made a big difference in my overall well-being—I feel more balanced and energized.",
    name: "Mason Reed",
    role: "UI/UX Developer",
    avatar: "https://framerusercontent.com/images/b6KJTsLCTUWKOD3rzFUmvl57fWo.png",
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
          className="h-6 w-6"
        >
          <path
            d="M 15.879 1.209 C 16.293 0.235 17.707 0.235 18.121 1.209 L 21.854 9.967 C 22.028 10.379 22.424 10.66 22.878 10.695 L 32.568 11.454 C 33.644 11.537 34.08 12.849 33.261 13.535 L 25.878 19.706 C 25.532 19.995 25.381 20.449 25.487 20.882 L 27.743 30.11 C 27.993 31.136 26.85 31.947 25.929 31.397 L 17.633 26.451 C 17.244 26.22 16.756 26.22 16.367 26.451 L 8.071 31.397 C 7.15 31.945 6.007 31.136 6.257 30.11 L 8.513 20.882 C 8.619 20.449 8.468 19.995 8.122 19.706 L 0.74 13.535 C -0.08 12.849 0.356 11.537 1.432 11.452 L 11.122 10.694 C 11.575 10.658 11.97 10.378 12.145 9.969 Z"
            fill="rgb(255, 186, 51)"
          />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsGrid() {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-14 sm:pt-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        {reviews.map((r, idx) => (
          <motion.article
            key={r.title + r.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: idx * 0.03 }}
          >
            <Stars />

            <div className="mt-6 border-t border-zinc-950/10 pt-6">
              <h4 className="text-lg font-semibold text-zinc-950">{r.title}</h4>
              <p className="mt-3 text-base leading-7 text-zinc-600">{r.quote}</p>

              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-[6px] border-white shadow-sm ring-1 ring-black/5">
                  <Image src={r.avatar} alt="" fill className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-950">{r.name}</div>
                  <div className="text-sm text-zinc-600">{r.role}</div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
