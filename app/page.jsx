import Image from "next/image";
import Hero from "./components/home/Hero";
import Projects from "./components/home/Projects";
import Navbar from "./components/Navbar";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonials";
import WebDesigns from "./components/designs/WebDesigns";
import Contact from "./components/contact/Contact";
import FAQ from "./components/home/FAQ";

export const metadata = {
  title: "Portfolio Home",

  description:
    "Hi, I'm Zubair Asif Dar, a Full Stack Web Developer specializing in Next.js, React, Django, and modern web experiences. I build fast, responsive, & SEO rich websites for businesses.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Zubair Asif Dar | Full Stack Web Developer",
    description:
      "Explore my portfolio featuring modern websites, web applications, and business solutions built with Next.js, React, and Django.",
    url: "/",
    images: [
      {
        url: "/home/hero-mypic.jpeg",
        width: 1200,
        height: 630,
        alt: "Zubair Asif Dar Portfolio",
      },
    ],
  },

  twitter: {
    title: "Zubair Asif Dar | Full Stack Web Developer",
    description:
      "Portfolio showcasing modern web development projects using Next.js, React, Django, and Tailwind CSS.",
    images: ["/home/hero-mypic.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zubair Asif Dar",
  jobTitle: "Full Stack Web Developer",
  url: "https://zubairdevportfolio.vercel.app",
  image: "https://zubairdevportfolio.vercel.app/hero-mypic.jpeg",
  sameAs: [
    "https://github.com/remotezubairdev",
    "https://linkedin.com/in/zubair-a-9a7a0833b",
  ],
};

export default function Home() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
    <Navbar />
    <main>
      <Hero />
      <Testimonials />
      <About />
      <WebDesigns />
      <Projects />
      <Contact />
      <FAQ />
    </main>
    </>
  );
}
