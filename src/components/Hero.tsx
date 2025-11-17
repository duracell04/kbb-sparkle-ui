import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, FileCheck, Coins } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm font-medium">
            <Shield className="w-4 h-4" />
            Token-registered · Cash-settled · Regulated Rails
          </div>
          
          <h1 className="text-5xl md:text-6xl font-sans font-semibold text-white leading-tight">
            Private Debt.
            <br />
            Regulated Rails. Clear Records.
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            KBB brings professional investors to Georgian private debt. Money settles through licensed banks. The token is a register & audit log, not a payment system.
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-12">
            <div className="bg-white/5 border border-white/10 rounded-md p-6 text-left">
              <Shield className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">DvP by Design</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Tokens move only after verified funds.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-md p-6 text-left">
              <FileCheck className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">Audit-Ready</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Register events store bank references for one-to-one matching.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-md p-6 text-left">
              <Coins className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">Permissioned Transfers</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Professional-only, whitelisted, ERC-3643 compatible.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-md p-6 text-left">
              <Shield className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">CSD-Aligned</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Legal title in the CSD; token mirrors the record.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
