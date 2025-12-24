"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";

type Props = {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
};

type VideoBadge = {
  line1: string;
  line2: string;
};

type VideoTile = {
  id: string;
  src: string;
  poster: string;
  className: string;
  user?: {
    name: string;
    avatar: string;
  };
  badges?: VideoBadge;
};

function PlayOverlay() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50px] shadow-[0_4px_64px_rgba(0,0,0,0.15)]">
      <div className="rounded-2xl bg-zinc-500/50 p-4 shadow-[0_4px_28px_rgba(0,0,0,0.16)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </div>
    </div>
  );
}

function VideoCard({ tile }: { tile: VideoTile }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const tryPlay = useCallback(async () => {
    const el = videoRef.current;
    if (!el) return;
    try {
      await el.play();
    } catch {
      // Autoplay may be blocked depending on browser policy.
    }
  }, []);

  const pause = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
  }, []);

  const togglePlay = useCallback(async () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      await tryPlay();
    } else {
      el.pause();
    }
  }, [tryPlay]);

  return (
    <div
      className={"relative overflow-hidden rounded-2xl cursor-pointer " + tile.className}
      onMouseEnter={tryPlay}
      onMouseLeave={pause}
      onClick={togglePlay}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") togglePlay();
      }}
    >
      <video
        ref={videoRef}
        src={tile.src}
        muted
        autoPlay
        loop
        preload="metadata"
        poster={tile.poster}
        playsInline
        className="h-full w-full object-cover"
      />

      <PlayOverlay />

      {tile.user ? (
        <div className="absolute left-4 bottom-4 flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full border-[3px] border-white">
            <Image src={tile.user.avatar} alt="" fill className="object-cover" />
          </div>
          <div className="text-sm font-semibold text-white">{tile.user.name}</div>
        </div>
      ) : null}

      {tile.badges ? (
        <div className="absolute left-4 bottom-4 flex flex-col gap-2">
          <div className="inline-flex w-fit rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-950 shadow-sm ring-1 ring-black/5">
            {tile.badges.line1}
          </div>
          <div className="inline-flex w-fit rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-950 shadow-sm ring-1 ring-black/5">
            {tile.badges.line2}
          </div>
        </div>
      ) : null}
    </div>
  );
}

const videoTiles: VideoTile[] = [
  {
    id: "v1",
    src: "https://framerusercontent.com/assets/HOnMzj8H2LMePn9tL7SEZ5CJM.mp4",
    poster:
      "https://framerusercontent.com/images/Vy3iIL0b5Q30sGe4TIe5HGdQ6Kc.png",
    className: "col-span-12 lg:col-span-5 row-span-3 h-[260px] sm:h-[320px] lg:h-[360px]",
    user: {
      name: "Guy Hawkins",
      avatar: "https://framerusercontent.com/images/cibCRHqEqxElNy9CkHWLK0dFQQ.png",
    },
    badges: { line1: "Boost in physical", line2: "activity levels" },
  },
  {
    id: "v2",
    src: "https://framerusercontent.com/assets/ceBwLS8Y0d3YKNTki2Vgw9Uxg.mp4",
    poster:
      "https://framerusercontent.com/images/VKzZchLGEJ54kuET9e5SxEJq8A.png",
    className:
      "col-span-12 sm:col-span-6 lg:col-span-3 row-span-1 h-[180px] sm:h-[200px] lg:h-[180px]",
  },
  {
    id: "v3",
    src: "https://framerusercontent.com/assets/NPDBLH0K44CZK0y6wc6fONzs0I.mp4",
    poster:
      "https://framerusercontent.com/images/xU5Cjlhsljdk8RBZB6VxfAN5Vxk.png",
    className:
      "col-span-12 sm:col-span-6 lg:col-span-4 row-span-1 h-[180px] sm:h-[200px] lg:h-[180px]",
  },
  {
    id: "v4",
    src: "https://framerusercontent.com/assets/NGADfoMC2ZqRBIJJDX9BosIObk.mp4",
    poster:
      "https://framerusercontent.com/images/Bd4ThKU5ovceqt4aPPHWntuc9Ps.png",
    className:
      "col-span-12 lg:col-span-4 row-span-2 h-[240px] sm:h-[280px] lg:h-[260px]",
  },
  {
    id: "v5",
    src: "https://framerusercontent.com/assets/Y8el95CFSrTxK9nSC3K79FKQR0U.mp4",
    poster:
      "https://framerusercontent.com/images/KUaE5DvWqpKGDiXOEyZwQuvbmaE.png",
    className:
      "col-span-12 lg:col-span-4 row-span-2 h-[240px] sm:h-[280px] lg:h-[260px]",
    user: {
      name: "Jane Austen",
      avatar: "https://framerusercontent.com/images/oy1oIxYYjvCVDSOhWFTihzyWk.png",
    },
    badges: { line1: "Physical boost", line2: "Energy surge" },
  },
  {
    id: "v6",
    src: "https://framerusercontent.com/assets/rt2EEfeLLxsiUd3ZOQVKIG7ZE.mp4",
    poster:
      "https://framerusercontent.com/images/XDnvzAtSe2astCZRIpzx939jhU.png",
    className:
      "col-span-12 lg:col-span-5 row-span-3 h-[260px] sm:h-[320px] lg:h-[360px]",
    user: {
      name: "Toni Morrison",
      avatar: "https://framerusercontent.com/images/YqGlzLAg7ISK1euV3jRnPkOv62s.png",
    },
    badges: { line1: "Stamina rise", line2: "Strength gain" },
  },
  {
    id: "v7",
    src: "https://framerusercontent.com/assets/Y8el95CFSrTxK9nSC3K79FKQR0U.mp4",
    poster:
      "https://framerusercontent.com/images/jCBk7FLjMAPTXwAgCXjYxlVPro.png",
    className:
      "hidden lg:block lg:col-span-3 row-span-1 h-[140px]",
  },
];

export default function HomeTestimonials({
  heading,
  ctaLabel,
  ctaHref,
}: Props) {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-16 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
          {heading}
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-12 gap-4 lg:gap-6">
        {videoTiles.map((tile, idx) => (
          <motion.div
            key={tile.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: idx * 0.03 }}
            className={tile.className}
          >
            <VideoCard tile={tile} />
          </motion.div>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center text-center">
        <h3 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 max-w-5xl">
          Have a success story with Healthaide? We’d love to{" "}
          <span className="text-zinc-950/50">hear from you!</span>
        </h3>

        <div className="mt-8">
          <Link
            href={ctaHref}
            className="inline-flex h-14 items-center justify-center rounded-full border border-zinc-950/20 bg-white px-10 text-base font-semibold text-zinc-950 hover:bg-zinc-50 transition-colors"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
