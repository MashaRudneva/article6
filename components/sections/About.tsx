import Image from "next/image";

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
                I am an independent EU AI Act compliance specialist and Certified AI Compliance Officer (CAICO), 
                working at the intersection of Artificial Intelligence, digital transformation and AI governance. 
                </p>
                <p>I also act as a compliance assessor at ExplorAI - a NL conformity assessment body in formation 
                for high-risk AI systems under the EU AI Act. 
                </p>
                <p>
                I specialise in the practical application of the EU AI Act, with focus on AI system classification, intended purpose, 
                provider and deployer responsibilities, and AI Act obligations. 
                </p>
              <p>
                I founded Article6 to give organisations direct access to expert,
                practical EU AI Act support and to translate regulatory requirements into 
              real-world AI system decisions and actionable compliance steps. 
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
                <Image
                  src="/maria.png"
                  alt="Maria Rudneva, EU AI Act compliance specialist"
                  fill
                  priority
                  sizes="(max-width: 768px) 288px, 320px"
                  className="object-cover object-right"
                />            
           </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
