"use client";
import { useState } from "react";

// ⬇️ REPLACE THIS with your Formspree form ID.
// 1. Sign up free at https://formspree.io
// 2. Create a new form, set the destination email to maria.r@explorai.eu
// 3. Formspree gives you an endpoint like https://formspree.io/f/abcdwxyz
// 4. Paste just the ID part (e.g. "abcdwxyz") below.
const FORMSPREE_ID = "YOUR_FORM_ID";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#3B82F6]">
            Contact
          </span>
          <h2
            className="mt-3 text-4xl font-bold text-[#111827] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Let&apos;s talk compliance
          </h2>
          <p className="text-[#6B7280] mb-10">
            Whether you need a quick classification check or a full conformity
            assessment, I am happy to start with a no-obligation call to understand
            your situation.
          </p>
        </div>

        {status === "success" ? (
          <div className="max-w-xl mx-auto text-center bg-white rounded-2xl p-10 border border-[#EDF1FB]">
            <div className="w-12 h-12 rounded-full bg-[#EDF1FB] text-[#0A2FA6] flex items-center justify-center mx-auto mb-4 text-2xl">
              ✓
            </div>
            <h3 className="text-xl font-semibold text-[#111827] mb-2">
              Message sent
            </h3>
            <p className="text-[#6B7280]">
              Thank you for reaching out. I&apos;ll get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#D1D9F0] bg-white text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30 focus:border-[#3B82F6] transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-1.5">
                  Organisation
                </label>
                <input
                  type="text"
                  name="organisation"
                  placeholder="Company name"
                  className="w-full px-4 py-3 rounded-lg border border-[#D1D9F0] bg-white text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30 focus:border-[#3B82F6] transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#111827] mb-1.5">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                required
                className="w-full px-4 py-3 rounded-lg border border-[#D1D9F0] bg-white text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30 focus:border-[#3B82F6] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#111827] mb-1.5">
                What do you need help with?
              </label>
              <select
                name="service"
                className="w-full px-4 py-3 rounded-lg border border-[#D1D9F0] bg-white text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30 focus:border-[#3B82F6] transition"
              >
                <option value="">Select a service</option>
                <option>EU AI Act Pre-Assessment</option>
                <option>EU AI Act Conformity Assessment</option>
                <option>EU AI Act Training</option>
                <option>Not sure yet — let&apos;s talk</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#111827] mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Briefly describe your AI system and where you are in the compliance process…"
                className="w-full px-4 py-3 rounded-lg border border-[#D1D9F0] bg-white text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30 focus:border-[#3B82F6] transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3 bg-[#0A2FA6] text-white rounded-lg font-medium hover:bg-[#0826A6] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>

            {status === "error" && (
              <p className="text-center text-sm text-red-600">
                Something went wrong. Please email me directly at{" "}
                <a href="mailto:maria.r@explorai.eu" className="underline">
                  maria.r@explorai.eu
                </a>
                .
              </p>
            )}

            <p className="text-center text-xs text-[#9CA3AF]">
              Or email directly:{" "}
              <a
                href="mailto:maria.r@explorai.eu"
                className="text-[#3B82F6] hover:underline"
              >
                maria.r@explorai.eu
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
