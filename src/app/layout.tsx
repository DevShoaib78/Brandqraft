import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

export const viewport: Viewport = {
  themeColor: "#043E52",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://brandqraft.co"),
  title: "brandqraft | Branding, Digital Marketing & Business Scaling Agency",
  description:
    "brandqraft transforms innovative ideas into thriving brands. We specialize in branding, digital marketing, website development, and business scaling solutions for ambitious entrepreneurs.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://brandqraft.co",
  },
  keywords: [
    "branding agency",
    "digital marketing",
    "website development",
    "business scaling",
    "brand identity",
    "logo design",
    "visual identity",
    "startup branding",
    "growth agency",
    "Hyderabad",
  ],
  authors: [{ name: "brandqraft" }],
  creator: "brandqraft",
  publisher: "brandqraft",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://brandqraft.co",
    siteName: "brandqraft",
    title: "brandqraft | Branding, Digital Marketing & Business Scaling Agency",
    description:
      "Transforming innovative ideas into thriving brands. End-to-end business lifecycle solutions from ideation to sustainable growth.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "brandqraft - Your Strategic Growth Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "brandqraft | Branding, Digital Marketing & Business Scaling Agency",
    description:
      "Transforming innovative ideas into thriving brands. End-to-end business lifecycle solutions from ideation to sustainable growth.",
    images: ["/opengraph-image"],
    creator: "@brandqraft",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
