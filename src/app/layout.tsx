import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Country Water | The Mwananchi Water",
  description: "High-quality, affordable bottled and bulk water delivery in Kenya. Sourced from Ndakaini Dam, purified with 7-stage technology.",
  keywords: ["Country Water", "Mwananchi Water", "Water Delivery Kenya", "Bottled Water Kenya", "Athi River Water", "Pure Drinking Water"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} selection:bg-[#379eff]/30`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
