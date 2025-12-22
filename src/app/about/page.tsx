import AboutBrands from "@/components/about/AboutBrands";
import AboutCounters from "@/components/about/AboutCounters";
import AboutHero from "@/components/about/AboutHero";
import AboutMissionStory from "@/components/about/AboutMissionStory";
import AboutTeam from "@/components/about/AboutTeam";
import AboutValues from "@/components/about/AboutValues";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <AboutHero />
      <AboutMissionStory />
      <AboutCounters />
      <AboutValues />
      <AboutBrands />
      <AboutTeam />
    </div>
  );
}
