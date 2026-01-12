import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-[#fafaf9] text-neutral-800 relative overflow-x-hidden`}>
        {/* Ambient Background Blobs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }} />
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-red-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '4s' }} />
        </div>

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
