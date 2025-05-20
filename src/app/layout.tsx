import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "DevScope",
    template: "%s - DevScope",
  },
  description: "Come and read my articles!",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="bg-[#f5f3ff]">
          <main className="p-5 container mx-auto">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
