import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import CategoryCarousel from "./components/CategoryCarousel";
import FeatureCards from "./components/FeatureCards";
import NewsletterCTA from "./components/NewsletterCTA";
import ContactSection from "./components/ContactSection";
import FooterNew from "./components/FooterNew";
import MobileBottomNav from "./components/MobileBottomNav";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col pt-16 bg-background">
      <Header />
      
      <main className="flex-1 max-w-[1280px] mx-auto w-full py-8 pb-24 xl:pb-8">
        <HeroBanner />
        <CategoryCarousel />
        <FeatureCards />
        <NewsletterCTA />
        <ContactSection />
      </main>

      <FooterNew />
      <MobileBottomNav />
    </div>
  );
}
