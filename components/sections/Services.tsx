const services = [
  {
    tag: "Art. 9 / Art. 43",
    title: "EU AI Act Pre-Assessment",
    description:
      "Not sure where your AI system falls under the regulation? I conduct a structured pre-assessment to determine your system's risk classification, identify applicable obligations, and map out your path to compliance — before the clock starts ticking.",
    bullets: [
      "Risk classification (unacceptable / high / limited / minimal)",
      "Applicable obligations summary",
      "Compliance gap overview",
      "Actionable next-step roadmap",
    ],
  },
  {
    tag: "Art. 43 / Annex VII",
    title: "Conformity Assessment",
    description:
      "For high-risk AI systems, conformity assessment is a legal requirement. I guide your team through the full assessment process — from technical documentation and risk management to post-market monitoring — preparing you for third-party audit or self-assessment.",
    bullets: [
      "Technical documentation review (Annex IV)",
      "Risk management system (Art. 9)",
      "Data governance and bias assessment",
      "Conformity declaration preparation",
    ],
  },
  {
    tag: "Art. 4",
    title: "EU AI Act Training",
    description:
      "Article 4 requires providers and deployers to ensure AI literacy across relevant staff. I design and deliver bespoke training programmes — from executive briefings to technical team deep-dives — tailored to your sector, systems, and team.",
    bullets: [
      "Executive awareness sessions (90 min)",
      "Legal & compliance team workshops",
      "Technical team obligation mapping",
      "Customised for your industry sector",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#EDF1FB]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#3B82F6]">
            Services
          </span>
          <h2
            className="mt-3 text-4xl font-bold text-[#111827]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            How I can help
          </h2>
          <p className="mt-4 text-[#6B7280] max-w-xl">
            Practical, expert-led compliance services designed for organisations
            building, deploying, or procuring AI systems in the EU.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-8 border border-white hover:border-[#3B82F6]/30 transition-colors flex flex-col gap-5"
            >
              <span
                className="text-xs font-semibold tracking-widest uppercase text-[#3B82F6]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {s.tag}
              </span>
              <h3 className="text-xl font-semibold text-[#111827]">{s.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed flex-1">{s.description}</p>
              <ul className="space-y-2 pt-2 border-t border-[#EDF1FB]">
                {s.bullets.map((b) => (
                  <li key={b} className="text-sm text-[#111827] flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#3B82F6] shrink-0" />
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
            className="inline-block px-8 py-3 bg-[#0A2FA6] text-white rounded-md font-medium hover:bg-[#0826A6] transition-colors"
          >
            Discuss your situation
          </a>
        </div>
      </div>
    </section>
  );
}
