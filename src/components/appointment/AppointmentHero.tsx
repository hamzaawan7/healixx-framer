"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

export default function AppointmentHero() {
  const [form, setForm] = useState<FormState>(initialState);

  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-14 sm:pt-16">
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="text-4xl sm:text-6xl font-semibold tracking-tight text-zinc-950"
      >
        Book an appointment
      </motion.h1>

      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-start">
        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onSubmit={(e) => {
            e.preventDefault();
            setForm(initialState);
          }}
          className="grid gap-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
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
          </div>

          <label className="grid gap-2 rounded-2xl border border-zinc-200 bg-[#f7fafb] px-5 py-4">
            <span className="text-xs font-semibold text-zinc-950">Company *</span>
            <input
              required
              type="text"
              name="Company"
              placeholder="Enter your company name"
              value={form.company}
              onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
              className="bg-transparent text-sm text-zinc-950 placeholder:text-zinc-500 outline-none"
            />
          </label>

          <label className="grid gap-2 rounded-2xl border border-zinc-200 bg-[#f7fafb] px-5 py-4">
            <span className="text-xs font-semibold text-zinc-950">Subject *</span>
            <input
              required
              type="text"
              name="Subject"
              placeholder="Enter your subject"
              value={form.subject}
              onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
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
              Book your appointment
            </button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
          className="lg:pt-3"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 max-w-md">
            Benefits of booking an appointment with Healthaide
          </h3>

          <div className="mt-10 grid gap-8 max-w-md">
            <div>
              <h4 className="text-base font-semibold text-zinc-950">
                Expert Healthcare at Your Fingertips
              </h4>
              <div className="mt-4 border-t border-zinc-950/10 pt-4">
                <p className="text-sm leading-7 text-zinc-600">
                  Connect with top doctors from the comfort of your home. Access personalized
                  medical advice tailored to your health history from the comfort and current
                  needs.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-base font-semibold text-zinc-950">
                Secure and Private Consultations
              </h4>
              <div className="mt-4 border-t border-zinc-950/10 pt-4">
                <p className="text-sm leading-7 text-zinc-600">
                  Enjoy peace of mind knowing your personal health information is protected. All
                  communications and data shared during your appointment are encrypted and
                  confidential.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
