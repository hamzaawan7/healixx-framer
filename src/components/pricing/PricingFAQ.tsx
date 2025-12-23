"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type FAQ = {
  q: string;
  a: string;
};

const faqs: FAQ[] = [
  {
    q: "How secure is my data with Healix?",
    a: "Your privacy is our top priority. Healix uses advanced encryption to protect your data, and you have full control over.",
  },
  {
    q: "Can I use Healix without any wearable devices?",
    a: "Yes. You can still track and manage key wellness habits and metrics even without a wearable device.",
  },
  {
    q: "What’s included in the doctor chat support?",
    a: "You can ask health questions, receive guidance, and get support from professionals directly within the platform.",
  },
  {
    q: "Can I upgrade or downgrade my plan later?",
    a: "Absolutely. You can change plans anytime from your account settings.",
  },
  {
    q: "Does Healix offer a free trial?",
    a: "Yes, you can get started with a free plan and explore key features before upgrading.",
  },
];

function Icon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-zinc-950"
    >
      {open ? <line x1="5" y1="12" x2="19" y2="12" /> : null}
      {!open ? <line x1="12" y1="5" x2="12" y2="19" /> : null}
      {!open ? <line x1="5" y1="12" x2="19" y2="12" /> : null}
    </svg>
  );
}

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-16 sm:pt-20 pb-24">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-base leading-7 text-zinc-700 max-w-2xl mx-auto">
          For any unanswered questions, reach out to our support team via email. We&apos;ll respond
          as soon as possible to assist you.
        </p>
      </div>

      <div className="mt-10 max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => {
          const open = idx === openIndex;
          return (
            <div
              key={faq.q}
              className="rounded-2xl border border-zinc-950/10 bg-white"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : idx)}
                className="w-full px-5 py-5 text-left flex items-center justify-between gap-6"
              >
                <span className="text-sm sm:text-base font-semibold text-zinc-950">
                  {faq.q}
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-950/5">
                  <Icon open={open} />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-7 text-zinc-700">{faq.a}</p>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
