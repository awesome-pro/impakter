import Certificate from "@/components/certificate";
import Compare from "@/components/compare";
import { FAQ } from "@/components/faq";
import Find from "@/components/find";
import FindESGbyCountry from "@/components/find-esg-by-country";
import Hero from "@/components/hero";
import HowESGCaculated from "@/components/how-esg-calculated";
import LatestNews from "@/components/latest-news";
import WhyImportant from "@/components/why-important";

export default function Home() {
  return (
   <main className="min-h-screen flex flex-col items-center justify-center">
      <Hero />
      <FindESGbyCountry />
      <Find />
      <Compare />
      <Certificate />
      <WhyImportant />
      <HowESGCaculated />
      <LatestNews />
      <FAQ />
   </main>
  );
}
