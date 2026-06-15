import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://article6.eu"),
  title: "Article6 — EU AI Act Advisory",
  description:
    "EU AI Act compliance advisory. Expert assessment, conformity preparation, and training by Maria Rudneva.",
  openGraph: {
    title: "Article6 — EU AI Act Advisory",
    description:
      "EU AI Act compliance advisory. Expert assessment, conformity preparation, and training.",
    url: "https://article6.eu",
    siteName: "Article6",
    locale: "en_NL",
    type: "website",
    images: [
      {
        url: "https://article6.eu/og-image.png",
        width: 1200,
        height: 630,
        alt: "Article6 — EU AI Act Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Article6 — EU AI Act Advisory",
    description:
      "EU AI Act compliance advisory. Expert assessment, conformity preparation, and training.",
    images: ["https://article6.eu/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
