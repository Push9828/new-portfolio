import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-calistoga",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          twMerge(inter.variable, calistoga.variable) +
          "antialiased bg-[#EAEEFE]"
        }
      >
        {children}
      </body>
    </html>
  );
}
