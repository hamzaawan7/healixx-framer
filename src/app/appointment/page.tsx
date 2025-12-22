import AppointmentHero from "@/components/appointment/AppointmentHero";
import AboutBrands from "@/components/about/AboutBrands";
import FeaturesWhyChoose from "@/components/features/FeaturesWhyChoose";
import HomeInsights from "@/components/home/HomeInsights";

export default function AppointmentPage() {
  return (
    <div className="bg-white">
      <AppointmentHero />
      <AboutBrands />
      <FeaturesWhyChoose />
      <HomeInsights
        heading="Studies show that proactive health tracking can reduce chronic"
        highlighted="health risks by up to 78%"
        cardTitle="Health Monitoring Matters"
        cardDescription="Studies show that proactive health tracking can reduce chronic health risks by up to"
      />
    </div>
  );
}
