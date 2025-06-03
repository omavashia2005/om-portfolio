import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Om Kashyap Avashia's Portfolio",
  description: "Om Kashyap Avashia's portfolio website. I'm a Software Engineer, AI Enthusiast, and CS Junior @ ASU. Visit my portfolio to explore projects and connect!",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png"
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://omavashia.vercel.app" />
        <meta property="og:title" content="Om Kashyap Avashia's Portfolio" />
        <meta property="og:description" content="Explore Om's work in AI, backend systems, and web development. Built with Next.js, React, and Tailwind." />
        <meta property="og:url" content="https://omavashia.com" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <CustomCursor />
        <Analytics />
      </body>
    </html>
  );
}
