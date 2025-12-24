"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactHero() {
  const [form, setForm] = useState<FormState>(initialState);

  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-14 sm:pt-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-4xl sm:text-6xl font-semibold tracking-tight text-zinc-950"
          >
            We&apos;re here to help
            <br />
            you on your journey.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
            className="mt-6 text-base leading-7 text-zinc-600 max-w-md"
          >
            Want to learn more about Healthaide, our support team is ready to help.
          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
          onSubmit={(e) => {
            e.preventDefault();
            setForm(initialState);
          }}
          className="grid gap-5"
        >
          <label className="grid gap-2 rounded-2xl border border-zinc-200 bg-[#f7fafb] px-5 py-4">
            <span className="text-xs font-semibold text-zinc-950">Full name *</span>
            <input
              required
              type="text"
              name="Name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              className="bg-transparent text-sm text-zinc-950 placeholder:text-zinc-500 outline-none"
            />
          </label>

          <label className="grid gap-2 rounded-2xl border border-zinc-200 bg-[#f7fafb] px-5 py-4">
            <span className="text-xs font-semibold text-zinc-950">Email address *</span>
            <input
              required
              type="email"
              name="Email"
              placeholder="Enter your full address"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              className="bg-transparent text-sm text-zinc-950 placeholder:text-zinc-500 outline-none"
            />
          </label>

          <label className="grid gap-2 rounded-2xl border border-zinc-200 bg-[#f7fafb] px-5 py-4">
            <span className="text-xs font-semibold text-zinc-950">Phone number *</span>
            <input
              required
              type="tel"
              name="Phone number"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
              className="bg-transparent text-sm text-zinc-950 placeholder:text-zinc-500 outline-none"
            />
          </label>

          <label className="grid gap-2 rounded-2xl border border-zinc-200 bg-[#f7fafb] px-5 py-4">
            <span className="text-xs font-semibold text-zinc-950">Message *</span>
            <textarea
              required
              name="Message"
              placeholder="Write your message here"
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              className="min-h-[140px] resize-none bg-transparent text-sm text-zinc-950 placeholder:text-zinc-500 outline-none"
            />
          </label>

          <div>
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-7 text-sm font-semibold text-white shadow-sm hover:bg-zinc-900 transition-colors"
            >
              Submit your message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
