import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

const morn = localFont({
  src: "../../public/Morn-Font/MornVariable.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-morn",
});

const vilane = localFont({
  src: [
    { path: "../../public/Vilane-Font/Vilane Thin.ttf", weight: "100", style: "normal" },
    { path: "../../public/Vilane-Font/Vilane Extra Light.ttf", weight: "200", style: "normal" },
    { path: "../../public/Vilane-Font/Vilane Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/Vilane-Font/Vilane Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/Vilane-Font/Vilane Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/Vilane-Font/Vilane Semi Bold.ttf", weight: "600", style: "normal" },
    { path: "../../public/Vilane-Font/Vilane Bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-vilane",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Healix",
  description: "Where care meets innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${morn.variable} ${vilane.variable} ${geistMono.variable} font-sans bg-white text-zinc-950`}
      >
        <SiteHeader />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
