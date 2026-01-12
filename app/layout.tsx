import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shawarmania | Fresh Shawarma in Montreal",
    template: "%s | Shawarmania",
  },
  description: "Fresh, authentic Middle Eastern shawarma, bowls, and skewers in downtown Montreal. Order online for pickup or delivery.",
  keywords: ["shawarma", "montreal", "middle eastern food", "halal", "bowls", "skewers", "delivery"],
  openGraph: {
    title: "Shawarmania | Fresh Shawarma in Montreal",
    description: "Fresh, authentic Middle Eastern shawarma, bowls, and skewers.",
    type: "website",
    locale: "en_CA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
