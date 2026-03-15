import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Transformations } from "@/components/sections/Transformations";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { HypeBanner } from "@/components/HypeBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans selection:bg-orange-500/30">
      <Header />
      <Hero />
      <HypeBanner/>
      <Services />
      <Transformations />
      <Pricing />
      <FAQ/>
      <Footer />
    </main>
  );
}