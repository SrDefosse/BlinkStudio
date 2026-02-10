import type { Route } from "./+types/home";
import HomeHero from "../components/home/HomeHero";
import BentoGrid from "../components/home/BentoGrid";
import Values from "../components/home/Values";
import Process from "../components/home/Process";
import ShowCase2 from "../components/home/ShowCase2";
import ContactSection from "../components/home/Contact";
// import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import HomeBackground from "../layout/HomeBackground";

import { getMetaTags } from "../utils/seo";

export function meta({ }: Route.MetaArgs) {
  return getMetaTags({
    title: "Blink Studio | Creative Digital Agency in Mexico",
    description: "Elevating brands through innovative digital solutions. Specialist in Web Development, Branding, and AI Chatbots.",
    image: "/process-imgs/process-1.jpg",
  });
}

export default function Home() {

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
