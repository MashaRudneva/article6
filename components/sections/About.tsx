export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-page">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              About
            </span>
            <h2 className="font-serif mt-3 text-4xl font-bold text-ink mb-6">
              I am Maria Rudneva
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I am an independent EU AI Act compliance specialist with a background in
                AI governance, regulatory affairs, and enterprise risk management.
                I founded Article6 to give organisations direct access to expert,
                practical compliance support — without the overhead of a large consultancy.
              </p>
              <p>
                My work sits at the intersection of law, technology, and operations.
                I speak the language of both legal teams and engineering departments,
                which means assessments are thorough and training actually lands.
              </p>
              <p>
                I work with companies across the Netherlands and the EU — from
                early-stage AI startups navigating their first classification questions
                to established enterprises preparing for conformity assessment.
              </p>
            </div>

            {/* Credentials placeholder */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "EU AI Act specialist",
                "AI governance",
                "Risk management",
                "Based in the Netherlands",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-surface text-primary text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-block text-sm font-medium text-primary hover:underline"
            >
              Let's talk →
            </a>
          </div>

          {/* Photo — reuses the same placeholder, replace with next/image + real photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-72 md:w-72 md:h-80">
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-surface" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-surface-deep flex items-center justify-center text-primary/30 text-sm">
                [ Photo ]
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
