const CONTACT_EMAIL = "masha.rudneva@gmail.com";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-24">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="font-bold text-lg">
            Article<span className="text-accent">6</span>
          </p>
          <p className="text-sm text-white/60 mt-1">EU AI Act compliance, made clear.</p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-white/60">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
            {CONTACT_EMAIL}
          </a>
          <a
            href="https://linkedin.com/in/mariarudneva"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Article6. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
