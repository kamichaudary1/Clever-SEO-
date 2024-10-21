// src/app/layout.tsx
import type { Metadata } from "next";
// import localFont from "next/font/local";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";

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
      <body>
        <div
          style={{
            backgroundImage: `url('/images/login-bg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
          }}
          className="flex justify-center items-center w-full"
        >
          <div className="text-center">
            <Link href="/">
              <Image
                src="/images/CleverSEO.png"
                alt="CleverSEO"
                width={400}
                height={70}
                className="w-auto h-auto object-contain mb-4"
                priority 
              />
            </Link>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
