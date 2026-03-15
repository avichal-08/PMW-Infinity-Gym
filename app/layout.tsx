import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { LocalSchema } from "@/components/LocalSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pmw-infinity-gym.vercel.app/"), 
  
  title: {
    default: "PMW Infinity Gym | Premium Fitness in Kalyanpur",
    template: "%s | PMW Infinity Gym"
  },
  description: "Transform your physique with PMW Infinity. The largest and fully AC premium gym in Kalyanpur featuring expert trainers, modern equipment, and guaranteed results.",
  keywords: [
    "best gym in Kalyanpur", 
    "gym near me", 
    "fitness center Kalyanpur", 
    "PMW Infinity", 
    "weight loss Kanpur", 
    "personal trainer Kalyanpur", 
    "AC gym in Kalyanpur"
  ],
  authors: [{ name: "PMW Infinity Gym" }],
  creator: "PMW Infinity Gym",
  
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "PMW Infinity Gym | Premium Fitness in Kalyanpur",
    description: "Transform your physique with PMW Infinity. The largest and fully AC premium gym in Kalyanpur.",
    siteName: "PMW Infinity Gym",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "PMW Infinity Gym | Premium Fitness in Kalyanpur",
    description: "Transform your physique with PMW Infinity. The largest and fully AC premium gym in Kalyanpur.",
  },
  
  icons: {
    icon: "/logo.png",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        {children}
        <MobileBottomNav />
        <WhatsAppButton />
        <LocalSchema/>
      </body>
    </html>
  );
}