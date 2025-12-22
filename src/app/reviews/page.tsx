import HomeInsights from "@/components/home/HomeInsights";
import ReviewsGrid from "@/components/reviews/ReviewsGrid";
import ReviewsHero from "@/components/reviews/ReviewsHero";

export default function ReviewsPage() {
  return (
    <div className="bg-white">
      <ReviewsHero />
      <ReviewsGrid />
      <HomeInsights
        heading="Studies show that proactive health tracking can reduce chronic"
        highlighted="health risks by up to 78%"
        cardTitle="Health Monitoring Matters"
        cardDescription="Studies show that proactive health tracking can reduce chronic health risks by up to"
      />
    </div>
  );
}
