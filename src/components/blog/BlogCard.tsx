"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/components/blog/blogData";

type Props = {
  post: BlogPost;
  index?: number;
};

export default function BlogCard({ post, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.04 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="block rounded-2xl border border-zinc-950/10 bg-white p-4 hover:bg-zinc-50/40 transition-colors"
      >
        <div className="overflow-hidden rounded-3xl">
          <div className="relative h-[240px] sm:h-[220px]">
            <Image src={post.image} alt="Blog Image" fill className="object-cover" />
          </div>
        </div>

        <div className="mt-5">
          <div className="text-xs font-semibold text-zinc-950">{post.date}</div>

          <h4 className="mt-4 whitespace-pre-line text-lg font-semibold text-zinc-950">
            {post.title}
          </h4>

          <p className="mt-3 text-sm leading-7 text-zinc-600">{post.excerpt}</p>
        </div>
      </Link>
    </motion.div>
  );
}
