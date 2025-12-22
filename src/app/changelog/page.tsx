import ReviewsHero from "@/components/reviews/ReviewsHero";
import ChangelogEntries from "@/components/changelog/ChangelogEntries";

export default function ChangelogPage() {
  return (
    <div className="bg-white">
      <ReviewsHero
        title="Changelog"
        description="Discover powerful features that help you monitor and manage your health effortlessly"
      />
      <ChangelogEntries />
    </div>
  );
}
