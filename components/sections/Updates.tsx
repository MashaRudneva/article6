import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";

export default function UpdatesSection() {
  // Show the 3 most recent posts on the homepage
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="updates" className="py-24 bg-[#EDF1FB]">
      <div className="max-w-5xl mx-auto px-6">

        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#3B82F6]">
              Updates
            </span>
            <h2
              className="mt-3 text-4xl font-bold text-[#111827]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Latest from Article6
            </h2>
          </div>
          <Link href="/blog" className="text-sm font-medium text-[#0A2FA6] hover:underline hidden md:block">
            All posts →
          </Link>
        </div>

        <div className="space-y-4">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-white rounded-2xl p-6 border border-white hover:border-[#3B82F6]/30 transition-colors"
            >
              {/* Date */}
              <div className="shrink-0 text-sm text-[#6B7280] w-32">
                {formatDate(p.date)}
              </div>

              {/* Category pill */}
              <span className="shrink-0 px-2.5 py-1 rounded-full bg-[#EDF1FB] text-[#0A2FA6] text-xs font-medium w-fit">
                {p.category}
              </span>

              {/* Title + excerpt */}
              <div className="flex-1">
                <h3 className="font-semibold text-[#111827] group-hover:text-[#0A2FA6] transition-colors">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-[#6B7280] line-clamp-2">{p.excerpt}</p>
              </div>

              {/* Arrow */}
              <span className="text-[#3B82F6] text-lg shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </Link>
          ))}

          {posts.length === 0 && (
            <p className="text-[#6B7280]">No posts yet.</p>
          )}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/blog" className="text-sm font-medium text-[#0A2FA6] hover:underline">
            All posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
