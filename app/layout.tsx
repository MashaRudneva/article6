import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Article6 — EU AI Act Compliance",
  description:
    "Expert EU AI Act compliance assessment and training by Maria Rudneva. Pre-assessments, conformity assessments, and bespoke training for organisations operating in the EU.",
  openGraph: {
    title: "Article6 — EU AI Act Compliance",
    description:
      "Expert EU AI Act compliance services by Maria Rudneva — assessment, certification preparation, and training.",
    url: "https://article6.eu",
    siteName: "Article6",
    locale: "en_EU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
