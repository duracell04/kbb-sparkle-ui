import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, FileCheck, Coins } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-card border-b border-border">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E5E7EB] rounded-md text-[#0D232D] text-sm font-medium">
            <Shield className="w-4 h-4" />
            Kartvelian Business Bonds
          </div>

          <h1 className="text-5xl md:text-6xl font-sans font-semibold text-[#0D232D] leading-tight">
            Token-registered, bank-settled private debt for supervised investors
          </h1>

          <p className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
            Bridging Georgian businesses with global capital using blockchain rails. Not replacing existing systems —
            building where they can't reach.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" variant="default" asChild className="bg-[#0D232D] text-white hover:bg-[#0A1B24]">
              <a href="/issuer-workflow">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 text-[#F59E0B]" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-[#0D232D] text-[#0D232D] bg-white hover:bg-neutral-100">
              View Documentation
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="text-center p-6 rounded-lg bg-white border border-[#E5E7EB] shadow-sm transition-all hover:shadow-md">
              <div className="text-5xl font-bold text-[#F59E0B] mb-2 tabular-nums">$50B+</div>
              <p className="text-[#0D232D] text-base font-medium mb-1">Global capital seeking yields</p>
              <p className="text-[#4B5563] text-sm">Institutional investors looking for emerging markets</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-white border border-[#E5E7EB] shadow-sm transition-all hover:shadow-md">
              <div className="text-5xl font-bold text-[#F59E0B] mb-2 tabular-nums">500+</div>
              <p className="text-[#0D232D] text-base font-medium mb-1">Georgian SMEs need capital</p>
              <p className="text-[#4B5563] text-sm">Proven businesses unable to access global markets</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-white border border-[#E5E7EB] shadow-sm transition-all hover:shadow-md">
              <div className="text-5xl font-bold text-[#F59E0B] mb-2 tabular-nums">7-11%</div>
              <p className="text-[#0D232D] text-base font-medium mb-1">Annual GDP growth</p>
              <p className="text-[#4B5563] text-sm">High-growth economy demands capital infrastructure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
