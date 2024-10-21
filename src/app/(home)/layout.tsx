// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
// import "./globals.css";
import Header from "@/components/global/header/Header";
import Footer from "@/components/global/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CleverSEO",
  description: "CleverSEO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
