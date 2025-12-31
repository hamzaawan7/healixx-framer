"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/components/blog/blogData";

export default function BlogListing() {
  const [visibleCount, setVisibleCount] = useState(6);

  const visiblePosts = useMemo(
    () => blogPosts.slice(0, Math.min(visibleCount, blogPosts.length)),
    [visibleCount]
  );

  const canLoadMore = visibleCount < blogPosts.length;

  return (
    <section className="mx-auto max-w-[1283px] px-4 sm:px-6 pt-14 sm:pt-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-4xl sm:text-6xl font-semibold tracking-tight text-zinc-950"
        >
          Health insights &amp;
          <br />
          wellness tips.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
          className="text-base leading-7 text-zinc-600 lg:pt-4 max-w-md lg:justify-self-end"
        >
          Discover powerful features that help you monitor and manage your health effortlessly
        </motion.p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post, idx) => (
          <BlogCard key={post.id} post={post} index={idx} />
        ))}
      </div>

      <div className="mt-10 pb-10">
        <button
          type="button"
          onClick={() => setVisibleCount((c) => c + 3)}
          disabled={!canLoadMore}
          className="inline-flex h-10 items-center justify-center rounded-xl bg-zinc-950 px-5 text-xs font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Load More
        </button>
      </div>
    </section>
  );
}
