import Image from "next/image";
import Hero from "./components/home/Hero";
import Projects from "./components/home/Projects";
import Navbar from "./components/Navbar";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonials";
import WebDesigns from "./components/designs/WebDesigns";
import Contact from "./components/contact/Contact";
import FAQ from "./components/home/FAQ";

export default function Home() {
  return (
    <>
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
