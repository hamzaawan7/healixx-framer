import PricingComparison from "@/components/pricing/PricingComparison";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingHero from "@/components/pricing/PricingHero";

export default function PricingPage() {
  return (
    <div className="bg-white">
      <PricingHero />
      <PricingComparison />
      <PricingFAQ />
    </div>
  );
}
