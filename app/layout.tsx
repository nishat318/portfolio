import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const _playfair = Playfair_Display({ subsets: ["latin"] });
const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nishat Tasnim — Designer & Creative",
  description:
    "The elegant personal portfolio of Nishat Tasnim: branding, web design, illustration, and editorial work with a soft, soulful touch.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fdf7f2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
