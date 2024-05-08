import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DM SNT",
  description: "DM SNT par Timéo Bavart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="no-scrollbar" lang="fr">
      <body className={`${inter.className} no-scrollbar`}>{children}</body>
    </html>
  );
}
