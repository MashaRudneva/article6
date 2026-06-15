import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto px-6 w-full py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="order-2 md:order-1">
            {/* Label */}
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#3B82F6] mb-6">
              EU AI Act Compliance
            </span>

            {/* Headline */}
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight text-[#111827] mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              EU AI Act compliance,{" "}
              <span className="text-[#0A2FA6]">made clear.</span>
            </h1>

            {/* Sub */}
            <p className="text-lg text-[#6B7280] leading-relaxed mb-10 max-w-md">
              I help organisations understand, assess, and meet their obligations
              under the EU AI Act — from initial pre-assessment through to
              full conformity and team training.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="px-6 py-3 bg-[#0A2FA6] text-white rounded-md font-medium hover:bg-[#0826A6] transition-colors"
              >
                Explore services
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-[#0A2FA6] text-[#0A2FA6] rounded-md font-medium hover:bg-[#EDF1FB] transition-colors"
              >
                Book a call
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-12 flex flex-wrap gap-6 text-sm text-[#6B7280]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                Pre-assessment
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                Conformity assessment
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                Compliance training
              </span>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Blue geometric shape behind photo */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-[#EDF1FB]" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden bg-[#D1D9F0]">
                <Image
                  src="/maria.png"
                  alt="Maria Rudneva, EU AI Act compliance specialist"
                  fill
                  priority
                  sizes="(max-width: 768px) 288px, 320px"
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-md px-4 py-3 border border-[#EDF1FB]">
                <p className="text-xs text-[#6B7280] font-medium uppercase tracking-wide">Regulation</p>
                <p
                  className="text-[#0A2FA6] font-bold text-sm"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
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
