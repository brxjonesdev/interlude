import type { Metadata } from "next";
import {Manrope, Work_Sans} from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Loop - Building in public",
  description: "Loop is a simple, fast, and streamlined way to share updates with your users.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
        ${manrope.variable} ${workSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
