import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, FileCheck, Coins } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm font-medium">
            <Shield className="w-4 h-4" />
            Kartvelian Business Bonds
          </div>
          
          <h1 className="text-5xl md:text-6xl font-sans font-semibold text-white leading-tight">
            Unlocking $1 Billion of Dormant Capital
            <br />
            for Georgian SMEs
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Bridging Georgian businesses with global capital using blockchain rails. Not replacing existing systems — building where they can't reach.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-medium px-8" asChild>
              <a href="/issuer-workflow">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
              View Documentation
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">$50B+</div>
              <p className="text-white/90 text-base">
                Global capital seeking emerging market yields
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">500+</div>
              <p className="text-white/90 text-base">
                Georgian SMEs needing growth capital
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">15-20%</div>
              <p className="text-white/90 text-base">
                Returns in high-growth economies like Georgia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
