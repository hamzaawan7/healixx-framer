import FeaturesFAQ from "@/components/features/FeaturesFAQ";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <ContactHero />
      <ContactInfo />
      <FeaturesFAQ />
    </div>
  );
}
