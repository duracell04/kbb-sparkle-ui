import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Architecture from "@/components/Architecture";
import UseCase from "@/components/UseCase";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="architecture">
          <Architecture />
        </div>
        <div id="use-case">
          <UseCase />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
