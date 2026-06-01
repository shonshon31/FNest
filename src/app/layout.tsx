import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "FlickNest",
  description: "Aniqqa-style movies and series streaming shell powered by VidKing embeds.",
  manifest: "/manifest.json"
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-ink font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
