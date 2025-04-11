
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialSection from "@/components/TestimonialSection";
import CompanyLogos from "@/components/CompanyLogos";
import CTASection from "@/components/CTASection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeatureSection />
        <HowItWorks />
        <TestimonialSection />
        <CompanyLogos />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
