import CallToAction from "@/components/CallToAction";
import SectionLargestPost from "@/components/Home/LargestPost";
import SectionRecentPosts from "@/components/Home/RecentsPosts";
import SectionHomeHero from "@/components/Home/SectionHero";

export default function Home() {
  return (
    <>
      <SectionHomeHero />
      <SectionLargestPost />
      <SectionRecentPosts />
      <CallToAction />
    </>
  );
}
