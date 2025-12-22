import BlogListing from "@/components/blog/BlogListing";
import HomeInsights from "@/components/home/HomeInsights";

export default function BlogPage() {
  return (
    <div className="bg-white">
      <BlogListing />
      <HomeInsights
        heading="Studies show that proactive health tracking can reduce chronic"
        highlighted="health risks by up to 78%"
        cardTitle="Health Monitoring Matters"
        cardDescription="Studies show that proactive health tracking can reduce chronic health risks by up to"
      />
    </div>
  );
}
