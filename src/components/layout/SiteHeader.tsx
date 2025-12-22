"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type NavLink = {
  label: string;
  href: string;
};

type NavGroup = {
  title: string;
  links: NavLink[];
};

type HeaderProps = {
  brand?: {
    label: string;
    href: string;
  };
  primaryLinks?: NavLink[];
  allPagesLabel?: string;
  allPagesGroups?: NavGroup[];
  cta?: {
    label: string;
    href: string;
  };
};

function useOnClickOutside(
  refs: Array<React.RefObject<HTMLElement | null>>,
  handler: () => void,
  enabled: boolean,
) {
  useEffect(() => {
    if (!enabled) return;

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node | null;
      if (!target) return;

      const isInside = refs.some((r) => {
        const el = r.current;
        return el ? el.contains(target) : false;
      });

      if (!isInside) handler();
    };

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [enabled, handler, refs]);
}

function LogoMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="text-zinc-950"
    >
      <circle cx="9" cy="16" r="6" fill="currentColor" />
      <circle cx="22" cy="9" r="4" fill="currentColor" opacity="0.95" />
      <circle cx="24" cy="23" r="5" fill="currentColor" opacity="0.9" />
      <path
        d="M13.6 12.8C16.5 10.3 18.9 9 22 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M14 19.5C17 21.8 19.8 23 24 23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

export default function SiteHeader({
  brand = { label: "Healix", href: "/" },
  primaryLinks = [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Reviews", href: "/reviews" },
  ],
  allPagesLabel = "All Pages",
  allPagesGroups = [
    {
      title: "Main",
      links: [
        { label: "Home", href: "/" },
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "About Us", href: "/about" },
        { label: "Appointment", href: "/appointment" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Blog Details", href: "/blog/1" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "Contact Us", href: "/contact" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "404", href: "/not-found" },
      ],
    },
  ],
  cta = { label: "Get Started For Free", href: "/appointment" },
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownBtnRef = useRef<HTMLButtonElement>(null);
  const dropdownPanelRef = useRef<HTMLDivElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  const allPagesItems = useMemo(() => allPagesGroups, [allPagesGroups]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setDropdownOpen(false);
      setMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useOnClickOutside(
    [dropdownBtnRef, dropdownPanelRef],
    () => setDropdownOpen(false),
    dropdownOpen,
  );

  useOnClickOutside([mobilePanelRef], () => setMobileOpen(false), mobileOpen);

  useEffect(() => {
    if (!mobileOpen) return;
    document.documentElement.classList.add("overflow-hidden");
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-transparent">
        <div className="mx-auto max-w-[1283px] px-4 sm:px-6 py-3">
          <div className="flex h-14 sm:h-16 items-center justify-between w-full rounded-2xl sm:rounded-full border border-zinc-200/70 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl px-3 sm:px-4">
            <div className="flex items-center gap-8">
              <Link
                href={brand.href}
                className="flex items-center gap-2 font-semibold tracking-tight text-zinc-950"
              >
                <LogoMark />
                <span className="text-lg">{brand.label}</span>
              </Link>

              <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-700">
                <div className="relative">
                  <button
                    ref={dropdownBtnRef}
                    type="button"
                    onClick={() => setDropdownOpen((v) => !v)}
                    aria-haspopup="menu"
                    aria-expanded={dropdownOpen}
                    className="inline-flex items-center gap-2 rounded-full px-3 py-2 hover:bg-zinc-100/70 transition-colors"
                  >
                    <span>{allPagesLabel}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={
                        "transition-transform duration-200 " +
                        (dropdownOpen ? "rotate-180" : "rotate-0")
                      }
                      aria-hidden="true"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {dropdownOpen ? (
                      <motion.div
                        ref={dropdownPanelRef}
                        role="menu"
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute left-0 mt-3 w-[680px] rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 p-6 origin-top-left"
                      >
                        <div className="grid grid-cols-3 gap-8">
                          {allPagesItems.map((group) => (
                            <div key={group.title} className="min-w-0">
                              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                                {group.title}
                              </div>
                              <div className="mt-3 flex flex-col gap-2">
                                {group.links.map((l) => (
                                  <Link
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setDropdownOpen(false)}
                                    className="rounded-lg px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-100 transition-colors"
                                  >
                                    {l.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>

                {primaryLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-full px-3 py-2 hover:bg-zinc-100/70 transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href={cta.href}
                className="hidden sm:inline-flex items-center justify-center h-10 rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white shadow-sm shadow-black/10 hover:bg-zinc-900 transition-colors"
              >
                {cta.label}
              </Link>

              <button
                type="button"
                aria-label="Open menu"
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/80 hover:bg-white transition-colors"
                onClick={() => setMobileOpen(true)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 7H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 12H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 17H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="lg:hidden fixed inset-0 z-50"
            aria-hidden={!mobileOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              ref={mobilePanelRef}
              className="absolute right-0 top-0 h-full w-[92%] max-w-sm bg-white shadow-2xl ring-1 ring-black/5"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.22, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100">
                <Link
                  href={brand.href}
                  className="flex items-center gap-2 font-semibold tracking-tight text-zinc-950"
                  onClick={() => setMobileOpen(false)}
                >
                  <LogoMark />
                  <span className="text-lg">{brand.label}</span>
                </Link>

                <button
                  type="button"
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 hover:bg-zinc-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="px-5 py-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {allPagesLabel}
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {allPagesItems
                    .flatMap((g) => g.links)
                    .map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-xl border border-zinc-100 bg-white px-3 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-50 transition-colors"
                      >
                        {l.label}
                      </Link>
                    ))}
                </div>

                <div className="mt-6 h-px bg-zinc-100" />

                <div className="mt-6 flex flex-col gap-2">
                  {primaryLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-xl px-3 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>

                <Link
                  href={cta.href}
                  onClick={() => setMobileOpen(false)}
                  className="mt-8 inline-flex w-full items-center justify-center h-12 rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white shadow-sm shadow-black/10 hover:bg-zinc-900 transition-colors"
                >
                  {cta.label}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
