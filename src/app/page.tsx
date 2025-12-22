import HomeHero from "@/components/home/HomeHero";
import HomeBenefits from "@/components/home/HomeBenefits";
import HomeFeatures from "@/components/home/HomeFeatures";
import HomeInsights from "@/components/home/HomeInsights";
import HomePricingPreview from "@/components/home/HomePricingPreview";
import HomeSteps from "@/components/home/HomeSteps";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeTips from "@/components/home/HomeTips";

export default function Home() {
  return (
    <div className="bg-white">
      <HomeHero
        title="Where care meets innovation"
        description="From daily wellness to advanced health insights, our platform is designed to support you."
        ctaLabel="Get Started For Free"
        ctaHref="/pricing"
      />

      <HomeBenefits heading="Why choose Healix for health tracking & monitoring?" />

      <HomeFeatures
        heading="Features designed for your health journey"
        description="Healix is designed to help you track and understand your health to make informed decisions for a healthier lifestyle."
      />

      <HomeTips />

      <HomeSteps />

      <HomeTestimonials
        heading="See how Healix has transformed lives through personalized health tracking and support"
        ctaLabel="Share your video"
        ctaHref="/contact"
      />

      <HomePricingPreview />

      <HomeInsights
        heading="Studies show that proactive health tracking can reduce chronic"
        highlighted="health risks by up to 78%"
        cardTitle="Health Monitoring Matters"
        cardDescription="Studies show that proactive health tracking can reduce chronic health risks by up to"
      />
    </div>
  );
}
