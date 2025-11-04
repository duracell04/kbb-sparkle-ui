import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, FileCheck, Coins } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent-foreground text-sm font-medium backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            Token-registered · Cash-settled · Regulated Rails
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Private Debt,
            <br />
            <span className="text-accent">Programmable & Auditable</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            KBB makes fixed-income notes programmable with permissioned tokens while cash settles on <strong>regulated rails</strong>—no pretending payments are on-chain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-glow">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm">
              View Documentation
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-6 text-left">
              <Shield className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">DvP by Design</h3>
              <p className="text-primary-foreground/70 text-sm">
                Delivery-versus-Payment only. Mint or transfer after verified settlement evidence.
              </p>
            </div>
            
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-6 text-left">
              <FileCheck className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Audit-Ready</h3>
              <p className="text-primary-foreground/70 text-sm">
                On-chain events mirror banking identifiers for deterministic reconciliation.
              </p>
            </div>
            
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-6 text-left">
              <Coins className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Permissioned Transfers</h3>
              <p className="text-primary-foreground/70 text-sm">
                ERC-3643 compatible. Eligibility, lockups, and jurisdictions enforced at token layer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
