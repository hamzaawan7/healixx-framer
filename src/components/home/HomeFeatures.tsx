"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type FeatureCard = {
  title: string;
  description: string;
  imageSrc: string;
  imageSrcDesktop?: string;
};

type Props = {
  heading: string;
  description: string;
};

const cards: FeatureCard[] = [
  {
    title: "Get answers to your health questions",
    description: "Healthaide encourages users to stay active.",
    imageSrc:
      "https://framerusercontent.com/images/cl4taqzWhoQRsRfcVDdFNYQ6E.png",
  },
  {
    title: "Get answers to your health questions",
    description: "Healthaide encourages users to stay active.",
    imageSrc:
      "https://framerusercontent.com/images/4t9GS4DAR9pDQAoyOtsuWlMBE.png",
  },
  {
    title: "Get answers to your health questions",
    description: "Healthaide encourages users to stay active.",
    imageSrc: "https://framerusercontent.com/images/sNbRCrZ7IW5IzvwfYbsTvPk.png",
    imageSrcDesktop:
      "https://framerusercontent.com/images/tKSEDdNp2Q3Olv5NKqa6X8f0k.png",
  },
  {
    title: "Get answers to your health questions",
    description: "Healthaide encourages users to stay active.",
    imageSrc:
      "https://framerusercontent.com/images/3NIJipihll5Gq0XC8umIY2uao0.png",
  },
];

export default function HomeFeatures({ heading, description }: Props) {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-16 sm:pt-20">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 max-w-xl"
        >
          {heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
          className="text-base leading-7 text-zinc-600 max-w-md"
        >
          {description}
        </motion.p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {cards.map((c, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: idx * 0.04 }}
            className="rounded-[40px] bg-[#f0f5f6] p-6 sm:p-8 lg:p-10"
          >
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-bold tracking-tight text-zinc-950 leading-snug">
                {c.title}
              </h4>
              <p className="text-sm font-medium leading-6 text-zinc-800">
                {c.description}
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[32px] bg-white">
              <div className="relative aspect-[16/10] w-full">
                {c.imageSrcDesktop ? (
                  <>
                    <Image
                      src={c.imageSrc}
                      alt="Feature"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover lg:hidden"
                    />
                    <Image
                      src={c.imageSrcDesktop}
                      alt="Feature"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="hidden object-cover lg:block"
                    />
                  </>
                ) : (
                  <Image
                    src={c.imageSrc}
                    alt="Feature"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
