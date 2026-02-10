import { type MetaFunction } from "react-router";
import { action as contactAction } from "./contact";
import ContactComponent from "../components/home/Contact";
import ContactHero from "../components/contact/ContactHero";
import { getMetaTags } from "../utils/seo";

export const meta: MetaFunction = () => {
  return getMetaTags({
    title: "Start a Project | Contact Us",
    description: "Ready to elevate your brand? Contact Blink Studio today for a consultation on your next digital project.",
    image: "/process-imgs/process-3.jpg",
  });
};

export const action = contactAction;

export default function ContactPage() {
  return (
    <div className="bg-[#1a1d18] min-h-screen">
      <ContactHero />
      <ContactComponent showHeader={false} />
    </div>
  );
}
