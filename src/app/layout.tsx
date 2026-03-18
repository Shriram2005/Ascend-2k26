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
  title: "ASCEND 2K26 | National Technical Symposium | MCA KKWIEER Nashik",
  description:
    "ASCEND 2K26 is a national-level technical symposium on March 28, 2026 at KKWIEER Nashik with 4 competitions: Mini Hackathon, Art Arena, BGMI Tournament, and Bowl'ed Out.",
  authors: [{ name: "ASCEND 2K26 Team - MCA Department" }],
  creator: "MCA Department, KKWIEER",
  publisher: "K. K. Wagh Institute of Engineering Education and Research",
  keywords:
    "ascend,ascend 2026,ascend kkw,ascend 2k26,ascend event,ASCEND 2K26,national technical symposium,hackathon,art arena,poster making,BGMI tournament,esports,Bowl'ed Out,Nashik,KKWIEER,engineering event,MCA,college fest,technical competition,innovation,2026,Nashik events,student competition",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://ascend2k26.in",
  },
  openGraph: {
    title: "ASCEND 2K26 | It's Time to Rise — National Technical Symposium",
    description:
      "National technical symposium on March 28, 2026 at KKWIEER Nashik. 4 events: Mini Hackathon, Art Arena, BGMI, Bowl'ed Out. Register now!",
    siteName: "ASCEND 2K26",
    locale: "en_IN",
    type: "website",
    url: "https://ascend2k26.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASCEND 2K26 (ASCEND 2026) | National Technical Symposium Event",
    description: "Join ASCEND 2K26 on March 28 at KKWIEER Nashik.",
    creator: "@ASCEND2K26",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "your-google-verification-code",
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
