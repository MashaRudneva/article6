// Placeholder posts — replace with Notion API fetch or MDX files later
const posts = [
  {
    date: "2026-05-20",
    category: "Regulation",
    title: "What the August 2026 deadline means for high-risk AI providers",
    excerpt:
      "The full application date for most EU AI Act obligations is 2 August 2026. Here is what high-risk AI system providers need to have in place before that date.",
    slug: "#",
  },
  {
    date: "2026-04-14",
    category: "Training",
    title: "AI literacy under Article 4: what counts as 'sufficient'?",
    excerpt:
      "Article 4 requires providers and deployers to ensure their staff have adequate AI literacy. But the regulation is deliberately vague. This post breaks down what a defensible programme looks like.",
    slug: "#",
  },
  {
    date: "2026-03-03",
    category: "Assessment",
    title: "The pre-assessment question every company should ask first",
    excerpt:
      "Before you commission a full conformity assessment, there is one foundational question that shapes everything else: is your AI system in scope at all?",
    slug: "#",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function UpdatesSection() {
  return (
    <section id="updates" className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">

        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              Updates
            </span>
            <h2 className="font-serif mt-3 text-4xl font-bold text-ink">
              Latest from Article6
            </h2>
          </div>
          <a href="#" className="text-sm font-medium text-primary hover:underline hidden md:block">
            All posts →
          </a>
        </div>

        <div className="space-y-4">
          {posts.map((p) => (
            <a
              key={p.slug + p.title}
              href={p.slug}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-white rounded-2xl p-6 border border-white hover:border-accent/30 transition-colors"
            >
              {/* Date */}
              <div className="shrink-0 text-sm text-muted w-32">
                {formatDate(p.date)}
              </div>

              {/* Category pill */}
              <span className="shrink-0 px-2.5 py-1 rounded-full bg-surface text-primary text-xs font-medium w-fit">
                {p.category}
              </span>

              {/* Title + excerpt */}
              <div className="flex-1">
                <h3 className="font-semibold text-ink group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-muted line-clamp-2">{p.excerpt}</p>
              </div>

              {/* Arrow */}
              <span className="text-accent text-lg shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="#" className="text-sm font-medium text-primary hover:underline">
            All posts →
          </a>
        </div>
      </div>
    </section>
  );
}
