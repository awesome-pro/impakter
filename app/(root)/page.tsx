import Certificate from "@/components/certificate";
import Compare from "@/components/compare";
import { FAQ } from "@/components/faq";
import Find from "@/components/find";
import FindESGbyCountry from "@/components/find-esg-by-country";
import Hero from "@/components/hero";
import HowESGCaculated from "@/components/how-esg-calculated";
import LatestNews from "@/components/latest-news";

export default function Home() {
  return (
   <main className="min-h-screen flex flex-col items-center justify-center">
      <Hero />
      <Find />
      <FindESGbyCountry />
      <Compare />
      <Certificate />
      <HowESGCaculated />
      <LatestNews />
      <FAQ />
   </main>
  );
}
