import Image from "next/image";
import Link from "next/link";
import HomeInsights from "@/components/home/HomeInsights";
import { blogPosts } from "@/components/blog/blogData";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  const slugParams = blogPosts.map((p) => ({ slug: p.slug }));
  const idParams = blogPosts.map((p) => ({ slug: String(p.id) }));
  return [...slugParams, ...idParams];
}

export const dynamicParams = false;

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = params;

  const bySlug = blogPosts.find((p) => p.slug === slug);
  const asId = Number.isFinite(Number(slug)) ? Number(slug) : null;
  const byId = asId ? blogPosts.find((p) => p.id === asId) : undefined;
  const post = bySlug ?? byId;

  if (!post) {
    return (
      <div className="bg-white">
        <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-14 sm:pt-16 pb-24">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
            Post not found
          </h1>
          <p className="mt-4 text-sm leading-7 text-zinc-600">
            The blog post you’re looking for doesn’t exist.
          </p>
          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex h-10 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white"
            >
              Back to Blogs
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-14 sm:pt-16">
        <div className="max-w-3xl">
          <Link href="/blog" className="text-sm font-semibold text-zinc-950/70 hover:text-zinc-950">
            ← Back to Blogs
          </Link>

          <div className="mt-6 text-xs font-semibold text-zinc-950">{post.date}</div>

          <h1 className="mt-4 whitespace-pre-line text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
            {post.title}
          </h1>

          <p className="mt-5 text-base leading-7 text-zinc-600">{post.excerpt}</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[40px]">
          <div className="relative h-[260px] sm:h-[420px]">
            <Image src={post.image} alt="Blog Image" fill className="object-cover" priority />
          </div>
        </div>

        <div className="mx-auto max-w-3xl py-12">
          <div className="space-y-6 text-sm leading-7 text-zinc-600">
            <p>
              Healix helps you translate your health data into everyday actions. This article expands
              on the topic and offers practical steps you can apply right away.
            </p>
            <p>
              Consistency is key: track trends over time, not just one-day changes. Use your
              insights to adjust sleep, movement, hydration, and stress habits.
            </p>
            <p>
              If you’re new to health tracking, start with one metric and build from there. Small
              improvements compound.
            </p>
          </div>
        </div>
      </section>

      <HomeInsights
        heading="Studies show that proactive health tracking can reduce chronic"
        highlighted="health risks by up to 78%"
        cardTitle="Health Monitoring Matters"
        cardDescription="Studies show that proactive health tracking can reduce chronic health risks by up to"
      />
    </div>
  );
}
