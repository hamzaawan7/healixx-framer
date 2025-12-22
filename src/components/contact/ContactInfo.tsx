import Link from "next/link";

export default function ContactInfo() {
  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-16 sm:pt-20 pb-10">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">
            General Inquiries
          </h3>
          <p className="mt-4 text-base leading-7 text-zinc-600 max-w-md">
            Interested in learning more about TaskHub? Our sales team is here to provide you with
            a tailored demo.
          </p>

          <div className="mt-10 border-t border-zinc-950/10 pt-10">
            <div className="grid gap-8">
              <div>
                <div className="text-sm font-semibold text-zinc-950">Business &amp; Partnerships</div>
                <div className="mt-3 text-sm text-zinc-600">
                  <Link
                    href="mailto:partnerships@healix.com"
                    target="_blank"
                    rel="noopener"
                    className="hover:underline"
                  >
                    partnerships@healix.com
                  </Link>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-zinc-950">Press &amp; Media</div>
                <div className="mt-3 text-sm text-zinc-600">
                  <Link
                    href="mailto:media@healix.com"
                    target="_blank"
                    rel="noopener"
                    className="hover:underline"
                  >
                    media@healix.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">
            Customer Support
          </h3>
          <p className="mt-4 text-base leading-7 text-zinc-600 max-w-md">
            We&apos;re here to help! Whether you have a question about TaskHub&apos;s features, need
            assistance.
          </p>

          <div className="mt-10 border-t border-zinc-950/10 pt-10">
            <div className="grid gap-8">
              <div>
                <div className="text-sm font-semibold text-zinc-950">Customer Support Email</div>
                <div className="mt-3 text-sm text-zinc-600">
                  <Link
                    href="mailto:support@healix.com"
                    target="_blank"
                    rel="noopener"
                    className="hover:underline"
                  >
                    support@healix.com
                  </Link>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-zinc-950">Phone Support</div>
                <div className="mt-3 text-sm text-zinc-600">
                  <Link
                    href="tel:+18001234567"
                    target="_blank"
                    rel="noopener"
                    className="hover:underline"
                  >
                    +1 (800) 123-4567
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
