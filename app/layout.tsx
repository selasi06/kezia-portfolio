import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Kezia Eyram Gidiglo",
  description: "design student. visual direction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${jetBrains.variable}`}>
      <body className="font-mono antialiased">{children}</body>
    </html>
  );
}
