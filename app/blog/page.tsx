import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata = {
  title: "Updates — Article6",
  description: "Insights and updates on EU AI Act compliance from Maria Rudneva.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <section className="pt-32 pb-24 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#3B82F6]">
          Updates
        </span>
        <h1
          className="mt-3 text-4xl md:text-5xl font-bold text-[#111827] mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Insights on EU AI Act compliance
        </h1>
        <p className="text-[#6B7280] mb-12">
          Practical analysis of the regulation, deadlines, and what they mean for your organisation.
        </p>

        <div className="space-y-4">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group block bg-white rounded-2xl p-6 border border-white hover:border-[#3B82F6]/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-2">
                <span className="text-sm text-[#6B7280]">{formatDate(p.date)}</span>
                <span className="px-2.5 py-1 rounded-full bg-[#EDF1FB] text-[#0A2FA6] text-xs font-medium">
                  {p.category}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-[#111827] group-hover:text-[#0A2FA6] transition-colors">
                {p.title}
              </h2>
              <p className="mt-2 text-sm text-[#6B7280]">{p.excerpt}</p>
              <span className="mt-3 inline-block text-sm font-medium text-[#3B82F6]">
                Read more →
              </span>
            </Link>
          ))}

          {posts.length === 0 && (
            <p className="text-[#6B7280]">No posts yet. Check back soon.</p>
          )}
        </div>

        <div className="mt-12">
          <Link href="/" className="text-sm font-medium text-[#0A2FA6] hover:underline">
            ← Back home
          </Link>
        </div>
      </div>
    </section>
  );
}
