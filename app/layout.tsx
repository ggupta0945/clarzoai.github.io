import type { Metadata, Viewport } from "next";
import { Inter_Tight, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { BackgroundAtmosphere } from "@/components/layout/BackgroundAtmosphere";

const fontDisplay = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://clarzo.ai"),
  title: {
    default: "Clarzo.ai — See Your Money. Understand Your Life.",
    template: "%s — Clarzo.ai",
  },
  description:
    "Your AI-powered wealth partner — helping you track, plan, and grow your money with personalized insights and smarter financial decisions.",
  keywords: [
    "wealth management",
    "portfolio tracker",
    "AI finance",
    "Indian investors",
    "mutual funds",
    "stock discovery",
    "financial planning",
  ],
  authors: [{ name: "Clarzo.ai" }],
  openGraph: {
    type: "website",
    title: "Clarzo.ai — See Your Money. Understand Your Life.",
    description:
      "AI-powered wealth intelligence platform. Track every investment, ask any question, plan every goal.",
    siteName: "Clarzo.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clarzo.ai — See Your Money. Understand Your Life.",
    description:
      "AI-powered wealth intelligence platform. Track every investment, ask any question, plan every goal.",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}>
      <body className="relative min-h-screen">
        <BackgroundAtmosphere />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
