import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

type FooterProps = {
  brand?: {
    label: string;
    href: string;
  };
  columns?: Array<{
    title: string;
    links: FooterLink[];
  }>;
  copyrightName?: string;
};

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

function SocialIcon({
  name,
}: {
  name: "x" | "facebook" | "linkedin";
}) {
  if (name === "x") {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M18.9 3H21L14.6 10.3L22 21H16.2L11.6 14.6L6.1 21H4L10.8 13.2L3.7 3H9.6L13.8 8.7L18.9 3Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M13.5 22V13.2H16.4L16.8 9.9H13.5V7.8C13.5 6.9 13.8 6.2 15.1 6.2H16.9V3.2C16.6 3.2 15.5 3 14.2 3C11.5 3 9.7 4.7 9.7 7.7V9.9H6.9V13.2H9.7V22H13.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6.5 9.5H3.5V20.5H6.5V9.5Z"
        fill="currentColor"
      />
      <path
        d="M5 3.5C3.9 3.5 3 4.4 3 5.5C3 6.6 3.9 7.5 5 7.5C6.1 7.5 7 6.6 7 5.5C7 4.4 6.1 3.5 5 3.5Z"
        fill="currentColor"
      />
      <path
        d="M20.5 13.5C20.5 10.7 19 9.1 16.7 9.1C15.2 9.1 14.5 9.9 14.1 10.5V9.5H11.1C11.1 10.2 11.1 20.5 11.1 20.5H14.1V14.4C14.1 14 14.1 13.6 14.2 13.3C14.5 12.6 15.1 11.9 16.1 11.9C17.4 11.9 18 12.9 18 14.4V20.5H21V14.1C21 13.9 21 13.7 21 13.5H20.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function SiteFooter({
  brand = { label: "Healix", href: "/" },
  columns = [
    {
      title: "",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blogs", href: "/blog" },
      ],
    },
    {
      title: "",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ],
  copyrightName = "Healix",
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/70 bg-white">
      <div className="mx-auto max-w-[1283px] px-4 sm:px-6">
        <div className="flex flex-col gap-10 py-14">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <Link
              href={brand.href}
              className="inline-flex items-center gap-3 text-4xl font-semibold tracking-tight text-zinc-950"
            >
              <LogoMark />
              {brand.label}
            </Link>

            <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm font-medium text-zinc-700 sm:grid-cols-3">
              {columns.map((col, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  {col.title ? (
                    <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      {col.title}
                    </div>
                  ) : null}
                  {col.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="hover:text-zinc-950 transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-zinc-100" />

          <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div className="text-sm text-zinc-500">
              Copyright © {year} {copyrightName}. All Rights Reserved.
            </div>

            <div className="flex items-center gap-3 text-zinc-700">
              <Link
                href="#"
                aria-label="X"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 hover:bg-zinc-50 transition-colors"
              >
                <SocialIcon name="x" />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 hover:bg-zinc-50 transition-colors"
              >
                <SocialIcon name="facebook" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 hover:bg-zinc-50 transition-colors"
              >
                <SocialIcon name="linkedin" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
