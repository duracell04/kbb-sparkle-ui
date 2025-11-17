import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, FileCheck, Coins } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-card border-b border-border">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-md text-muted-foreground text-sm font-medium">
            <Shield className="w-4 h-4" />
            Kartvelian Business Bonds
          </div>

          <h1 className="text-5xl md:text-6xl font-sans font-semibold text-brand-700 leading-tight">
            Token-registered, bank-settled private debt for supervised investors
          </h1>

          <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Bridging Georgian businesses with global capital using blockchain rails. Not replacing existing systems —
            building where they can't reach.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" variant="amber" asChild>
              <a href="/issuer-workflow">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="text-center p-6 rounded-lg bg-card border border-border shadow-card transition-all hover:shadow-lg">
              <div className="text-5xl font-bold text-accent mb-2 tabular-nums">$50B+</div>
              <p className="text-muted-foreground text-base">Global capital seeking emerging market yields</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-accent/20 shadow-card transition-all hover:shadow-lg hover:border-accent/40">
              <div className="text-5xl font-bold text-accent mb-2 tabular-nums">500+</div>
              <p className="text-muted-foreground text-base">Georgian SMEs needing growth capital</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border shadow-card transition-all hover:shadow-lg">
              <div className="text-5xl font-bold text-accent mb-2 tabular-nums">15-20%</div>
              <p className="text-muted-foreground text-base">Returns in high-growth economies like Georgia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
