import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug, formatDate } from "@/lib/posts";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not found — Article6" };
  return {
    title: `${post.title} — Article6`,
    description: post.excerpt,
  };
}

// Custom styling for elements rendered from Markdown
const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl font-bold text-[#111827] mt-10 mb-4"
      style={{ fontFamily: "var(--font-serif)" }}
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-[#374151] leading-relaxed mb-5" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 space-y-2 mb-5 text-[#374151]" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-[#3B82F6] pl-5 my-6 text-[#111827] italic"
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-[#0A2FA6] underline hover:text-[#3B82F6]" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-[#111827]" {...props} />
  ),
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="pt-32 pb-24 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-2xl mx-auto px-6">
        <Link
          href="/blog"
          className="text-sm font-medium text-[#0A2FA6] hover:underline"
        >
          ← All updates
        </Link>

        <div className="flex items-center gap-4 mt-8 mb-4">
          <span className="text-sm text-[#6B7280]">{formatDate(post.date)}</span>
          <span className="px-2.5 py-1 rounded-full bg-[#EDF1FB] text-[#0A2FA6] text-xs font-medium">
            {post.category}
          </span>
        </div>

        <h1
          className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight mb-10"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {post.title}
        </h1>

        <div className="prose-article">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        <div className="mt-16 pt-8 border-t border-[#EDF1FB]">
          <Link
            href="/#contact"
            className="inline-block px-6 py-3 bg-[#0A2FA6] text-white rounded-md font-medium hover:bg-[#0826A6] transition-colors"
          >
            Discuss your compliance needs
          </Link>
        </div>
      </div>
    </article>
  );
}
