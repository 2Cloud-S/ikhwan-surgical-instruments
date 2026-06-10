import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/content/HeroSection";
import LargeHero from "../components/content/LargeHero";
import FiftyFiftySection from "../components/content/FiftyFiftySection";
import OneThirdTwoThirdsSection from "../components/content/OneThirdTwoThirdsSection";
import ProductCarousel from "../components/content/ProductCarousel";
import EditorialSection from "../components/content/EditorialSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/10">
      <Header />

      <main className="relative">
        <HeroSection />

        {/* Spacer with decorative element */}
        <div className="relative pt-10 sm:pt-16 md:pt-20 pb-4">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-border/50 to-transparent"></div>
        </div>

        <div className="space-y-4">
          <FiftyFiftySection />
          <ProductCarousel />
          <LargeHero />
          <OneThirdTwoThirdsSection />
          <EditorialSection />
        </div>

        {/* Bottom spacer */}
        <div className="h-16"></div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
