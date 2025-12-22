import HomeFeatures from "@/components/home/HomeFeatures";
import FeaturesCounterStrip from "@/components/features/FeaturesCounterStrip";
import FeaturesFAQ from "@/components/features/FeaturesFAQ";
import FeaturesHero from "@/components/features/FeaturesHero";
import FeaturesTrustedTestimonials from "@/components/features/FeaturesTrustedTestimonials";
import FeaturesWhyChoose from "@/components/features/FeaturesWhyChoose";

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      <FeaturesHero />
      <FeaturesCounterStrip />
      <FeaturesWhyChoose />
      <HomeFeatures
        heading="Features designed for your health journey"
        description="Healix is designed to help you track and understand your health to make informed decisions for a healthier lifestyle."
      />
      <FeaturesTrustedTestimonials />
      <FeaturesFAQ />
    </div>
  );
}
