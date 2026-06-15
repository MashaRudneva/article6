import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-page">
      <div className="max-w-5xl mx-auto px-6 w-full py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text — first in DOM and first on mobile: the headline is the page */}
          <div>
            {/* Label */}
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-6">
              EU AI Act Compliance
            </span>

            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight text-ink mb-6">
              EU AI Act compliance,{" "}
              <span className="text-primary">made clear.</span>
            </h1>

            {/* Sub */}
            <p className="text-lg text-muted leading-relaxed mb-10 max-w-md">
              I help organisations understand, assess, and meet their obligations
              under the EU AI Act - from initial pre-assessment through to conformity assessment preparation and team training.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors"
              >
                Explore services
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-surface transition-colors"
              >
                Book a call
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-12 flex flex-wrap gap-6 text-sm text-muted">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Pre-assessment
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Conformity assessment
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Compliance training
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Awareness training
              </span>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Blue geometric shape behind photo */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-surface" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden bg-surface-deep">
                {/* Replace src with actual photo path */}
                <div className="w-full h-full flex items-center justify-center text-primary/30 text-sm font-medium">
                <Image
                  src="/maria.png"
                  alt="Maria Rudneva, EU AI Act compliance specialist"
                  fill
                  priority
                  sizes="(max-width: 768px) 288px, 320px"
                  className="object-cover"
                />         
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-md px-4 py-3 border border-surface">
                <p className="text-xs text-muted font-medium uppercase tracking-wide">Regulation</p>
                <p className="font-mono text-primary font-bold text-sm">
                  EU AI Act
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
