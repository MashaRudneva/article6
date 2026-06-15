const services = [
  {
    tag: "Art. 6/ Art. 43",
    title: "Pre-Assessment Advisory EU AI Act",
    description:
      "Not sure where your AI system falls under the regulation? I conduct a structured pre-assessment to determine your system's risk classification, identify applicable obligations, and help to build a roadmap to compliance.",
    bullets: [
      "AI systems risk classification",
      "Applicable obligations summary",
      "Compliance gap overview",
      "Actionable next-step roadmap",
    ],
  },
  {
    tag: "Art. 43 / Annex VII",
    title: "Conformity Assessment Support",
    description:
      "For high-risk AI systems, conformity assessment is a legal requirement. I guide your team through the full assessment process, incuding technical documentation, risk management, QMS, logging and monitoring to support your preparation for third-party audit or self-assessment.",
    bullets: [
      "Technical documentation review (Annex IV)",
      "High-risk AI systems requirements",
      "Transparency obligations (Art. 50)",
      "Harmonised standards guidance",
    ],
  },
  {
    tag: "Art. 4",
    title: "EU AI Act Training for legaland tech teams",
    description:
      "Article 4 requires providers and deployers to ensure AI literacy across relevant staff. I design and deliver bespoke training programmes — from executive briefings to technical team deep-dives — tailored to your sector, systems, and team.",
    bullets: [
      "Executive awareness sessions",
      "Compliance workshops and bootcamps",
      "Requirements mapping",
      "Customised for your industry",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            Services
          </span>
          <h2 className="font-serif mt-3 text-4xl font-bold text-ink">
            How I can help
          </h2>
          <p className="mt-4 text-muted max-w-xl">
            Practical, expert-led compliance services designed for organisations
            building, deploying, or procuring AI systems in the EU.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-8 border border-white hover:border-accent/30 transition-colors flex flex-col gap-5"
            >
              <span className="font-mono text-xs font-semibold tracking-widest uppercase text-accent">
                {s.tag}
              </span>
              <h3 className="text-xl font-semibold text-ink">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed flex-1">{s.description}</p>
              <ul className="space-y-2 pt-2 border-t border-surface">
                {s.bullets.map((b) => (
                  <li key={b} className="text-sm text-ink flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors"
          >
            Discuss your situation
          </a>
        </div>
      </div>
    </section>
  );
}
