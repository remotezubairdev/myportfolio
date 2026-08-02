import Image from "next/image";
import Hero from "./components/home/Hero";
import Projects from "./components/home/Projects";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <main>
      <Hero />
      <Projects />
    </main>
    </>
  );
}
