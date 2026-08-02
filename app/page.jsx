import Image from "next/image";
import Hero from "./components/home/Hero";
import Trust from "./components/home/Trust";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <main>
      <Hero />
      <Trust />
    </main>
    </>
  );
}
