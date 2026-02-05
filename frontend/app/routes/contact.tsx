import { action as contactAction } from "./contact";
import ContactComponent from "../components/home/Contact";
import ContactHero from "../components/contact/ContactHero";

export const action = contactAction;

export default function ContactPage() {
  return (
    <div className="bg-[#1a1d18] min-h-screen">
      <ContactHero />
      <ContactComponent showHeader={false} />
    </div>
  );
}
