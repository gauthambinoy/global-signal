import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const jetMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unified-world-data.vercel.app"),
  title: {
    default: "Global Signal — Real-Time Global Intelligence",
    template: "%s · Global Signal",
  },
  description:
    "A real-time global intelligence dashboard aggregating public APIs across weather, earthquakes, markets, forex, energy, space, health, and technology signals.",
  applicationName: "Global Signal",
  authors: [{ name: "Gautham Binoy", url: "https://github.com/gauthambinoy" }],
  keywords: [
    "real-time dashboard",
    "global data",
    "earth visualization",
    "open data",
    "next.js",
    "live world stats",
  ],
  openGraph: {
    type: "website",
    title: "Global Signal — Real-Time Global Intelligence",
    description:
      "Real-time global intelligence dashboard with 200+ APIs, 3D Earth, and editorial design.",
    siteName: "Global Signal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Signal",
    description: "Real-time global intelligence powered by public data.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF9F5" },
    { media: "(prefers-color-scheme: dark)", color: "#1F1E1C" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${sourceSerif.variable} ${jetMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
