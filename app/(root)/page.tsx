import { CarouselPlugin } from "@/components/carousel";
import Certificate from "@/components/certificate";
import Companies from "@/components/companies";
import Compare from "@/components/compare";
import { FAQ } from "@/components/faq";
import Find from "@/components/find";
import FindESGbyCountry from "@/components/find-esg-by-country";
import Hero from "@/components/hero";
import HowESGCaculated from "@/components/how-esg-calculated";
import LatestNews from "@/components/latest-news";
import { Carousel } from "@/components/ui/carousel";
import WhyImportant from "@/components/why-important";

export default function Home() {
  return (
   <main className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <Hero /> 
      <Find />
      <Certificate />
      <WhyImportant />
      <HowESGCaculated />
      <LatestNews />
      <FAQ />
   </main>
  );
}
