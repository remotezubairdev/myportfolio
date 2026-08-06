import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/home/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://zubairdevportfolio.vercel.app"),

  title: {
    default: "Zubair Asif Dar | Full Stack Web Developer",
    template: "%s | Zubair Asif Dar",
  },

  description:
    "Full Stack Web Developer building modern, fast, responsive websites with Next.js, React, Django, and Tailwind CSS.",

  keywords: [
    "Zubair Asif Dar",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Django Developer",
    "JavaScript Developer",
    "Tailwind CSS",
    "Portfolio",
    "Freelance Web Developer",
    "SEO",
    "Responsive Websites",
  ],

  authors: [
    {
      name: "Zubair Asif Dar",
    },
  ],

  creator: "Zubair Asif Dar",

  openGraph: {
    type: "website",
    locale: "en_UK",
    url: "https://zubairdevportfolio.vercel.app",
    siteName: "Zubair Asif Dar Portfolio",
    title: "Zubair Asif Dar | Full Stack Web Developer",
    description:
      "Modern, fast, responsive websites built with Next.js, React, Django, and Tailwind CSS.",
    images: [
      {
        url: "/home/hero-mypic.jpeg",
        width: 400,
        height: 400,
        alt: "Zubair Asif Dar Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Zubair Asif Dar | Full Stack Web Developer",
    description:
      "Building modern, responsive, SEO-friendly websites for businesses.",
    images: ["/home/hero-mypic.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://zubairdevportfolio.vercel.app",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${geistSans.className} max-w-[1000px] xl:max-w-[1280px] 2xl:max-w-[1440px] px-12 mx-auto`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
