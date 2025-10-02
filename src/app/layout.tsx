import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CoffeeContext } from "@/context/CoffeeContext";
import BottomNavigation from "@/components/BottomNavigation/BottomNavigation";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coffee Crawl",
  description: "Where to try next?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CoffeeContext>
          {children}
          <BottomNavigation />
          <ToastContainer />
        </CoffeeContext>
      </body>
    </html>
  );
}
