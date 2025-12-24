"use client";

import { motion } from "framer-motion";

export default function AboutMissionStory() {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-16 sm:pt-20">
      <div className="grid gap-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-20"
        >
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 max-w-xl">
            At Healthaide, we’re dedicated
            <br />
            to empower individuals
            <br />
            their health journeys
          </h2>

          <div className="grid gap-10">
            <div>
              <div className="text-sm font-semibold text-zinc-950">Our Mission</div>
              <p className="mt-4 text-sm leading-7 text-zinc-600 max-w-md">
                We believe in a future where everyone can take control of their wellness with tools
                that guide, support, and inspire daily healthy habits.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold text-zinc-950">Our Vision</div>
              <p className="mt-4 text-sm leading-7 text-zinc-600 max-w-md">
                Our vision is to transform health monitoring into an experience that’s not only
                insightful but also motivating. Through a combination of real-time insights.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-20"
        >
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 max-w-xl">
            Healthaide began with a simple idea
          </h2>

          <div>
            <div className="text-sm font-semibold text-zinc-950">Our Story</div>
            <div className="mt-4 space-y-6 max-w-md">
              <p className="text-sm leading-7 text-zinc-600">
                Healthaide was born to fill that gap, helping people turn their health data into
                meaningful actions that improve their quality of life.
              </p>
              <p className="text-sm leading-7 text-zinc-600">
                Our founders, a team of health professionals and tech innovators, saw the need for a
                health monitoring tool that combines accuracy with ease of use.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
