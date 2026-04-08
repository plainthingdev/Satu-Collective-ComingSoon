import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Roboto, Open_Sans } from "next/font/google";
import "./globals.css";
import "@/styles/fonts.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Satu Collective",
  description: "Website still under development",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${roboto.variable} ${openSans.variable} antialiased`}>
      <head>
        <link rel="icon" href="/sclogo.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">{children}</body>
    </html>
  );
}
