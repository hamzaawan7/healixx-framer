import type React from "react";

type Props = {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
};

export default function LegalLayout({ title, lastUpdated, children }: Props) {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-16 sm:pt-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-zinc-950">
            {title}
          </h1>
          {lastUpdated ? (
            <p className="mt-4 text-sm font-semibold text-zinc-950">{lastUpdated}</p>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-12 sm:pt-16 pb-24">
        <div className="mx-auto max-w-3xl">{children}</div>
      </section>
    </div>
  );
}
