import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import LoansSection from "@/components/LoansSection";
import ValueProposition from "@/components/ValueProposition";
import StatsSection from "@/components/StatsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <LoansSection />
      <ValueProposition />
      <StatsSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
