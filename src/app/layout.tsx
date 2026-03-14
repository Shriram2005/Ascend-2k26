import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimationProvider } from "@/components/AnimationProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASCEND 2K24 | MCA Department | KKWIEER, Nashik",
  description:
    "ASCEND 2K24 — It's Time to Rise! A National-Level technical event by Department of MCA, K. K. Wagh Institute of Engineering Education and Research, Nashik. Poster Competition, Blind Coding, Mini Hackathon, PUBG Tournament & more!",
  authors: [{ name: "ASCEND 2K24 Team - MCA Department" }],
  keywords:
    "ASCEND 2K24,hackathon,coding,Nashik,KKWIEER,K K Wagh,MCA,poster competition,blind coding,PUBG tournament,mini hackathon",
  openGraph: {
    title: "ASCEND 2K24 | It's Time to Rise",
    description:
      "National-Level Technical Event by Dept. of MCA, K. K. Wagh Institute, Nashik. Exciting competitions & prizes!",
    siteName: "ASCEND 2K24",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASCEND 2K24 | It's Time to Rise",
    description: "Technical event at KKWIEER, Nashik. Register now!",
  },
  icons: {
    icon: "/logo-new.png",
    shortcut: "/logo-new.png",
    apple: "/logo-new.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#050505" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}
