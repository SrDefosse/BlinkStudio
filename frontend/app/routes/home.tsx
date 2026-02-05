import type { Route } from "./+types/home";
import HomeHero from "../components/home/HomeHero";
import BentoGrid from "../components/home/BentoGrid";
import Values from "../components/home/Values";
import Process from "../components/home/Process";
import ShowCase2 from "../components/home/ShowCase2";
import ContactSection from "../components/home/Contact";
// import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import useSmoothScroll from "../hooks/useSmoothScroll";
import HomeBackground from "../components/home/HomeBackground";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Blink Studio" },
    { name: "description", content: "Digital Agency based in Mexico" },
  ];
}

export default function Home() {
  useSmoothScroll();

  return (
    <HomeBackground>
      <main className="w-full relative">
        {/* Navbar is now in root.tsx */}
        <section>
          <HomeHero />
        </section>
        <section>
          <BentoGrid />
        </section>
        <section>
          <Values />
        </section>
        <section>
          <Process />
        </section>
        <section>
          <ShowCase2 />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <Footer />
      </main>
    </HomeBackground>
  );
}
