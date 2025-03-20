import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Ensure this file exists

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LingoVids",
  description: "AI-powered video translations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
