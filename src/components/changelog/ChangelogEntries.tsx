"use client";

import { motion } from "framer-motion";

type ChangelogEntry = {
  versionTitle: string;
  versionDate: string;
  publishedDate: string;
  items: Array<{ label?: string; text: string }>;
};

const entries: ChangelogEntry[] = [
  {
    versionTitle: "Version 1.0.1 - October 21, 2024",
    versionDate: "October 30, 2024",
    publishedDate: "October 30, 2024",
    items: [
      { label: "New Feature:", text: "Calling with patient." },
      { label: "Fix:", text: "Report export issue has been fixed." },
    ],
  },
  {
    versionTitle: "Version 1.0.0 - October 15, 2024",
    versionDate: "October 20, 2024",
    publishedDate: "October 20, 2024",
    items: [
      {
        text: "Book consultations with healthcare professionals directly through the app.",
      },
      { text: "Generate detailed reports of your health metrics over time." },
    ],
  },
];

export default function ChangelogEntries() {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-10 sm:pt-12 pb-24">
      <div className="divide-y divide-zinc-950/10">
        {entries.map((entry, idx) => (
          <motion.div
            key={entry.versionTitle}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: idx * 0.04 }}
            className="py-12"
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-zinc-950">
                  {entry.versionTitle}
                </h4>
                <p className="mt-3 text-sm text-zinc-600">{entry.versionDate}</p>
              </div>

              <div>
                <ul className="space-y-3 text-sm leading-7 text-zinc-600">
                  {entry.items.map((it, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-zinc-950/40" />
                      <p>
                        {it.label ? (
                          <strong className="font-semibold text-zinc-950">{it.label} </strong>
                        ) : null}
                        {it.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
