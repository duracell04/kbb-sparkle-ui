import { Card } from "@/components/ui/card";
import { ArrowRight, DollarSign, Shield, Coins } from "lucide-react";

const Mechanism = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sans font-semibold text-foreground mb-4">
            The Mechanism
          </h2>
          <p className="text-lg text-muted-foreground">
            How capital flows from investors to Georgian businesses
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-card border border-border text-center">
              <div className="w-16 h-16 rounded-md bg-accent/10 border border-accent mx-auto mb-4 flex items-center justify-center">
                <Coins className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Businesses Offer Bonds
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Revenue-sharing bonds with standardized terms and transparent servicing
              </p>
            </Card>

            <div className="flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-muted-foreground hidden md:block" />
            </div>

            <Card className="p-8 bg-card border border-border text-center">
              <div className="w-16 h-16 rounded-md bg-success/10 border border-success mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Investors Buy Globally
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Professional investors worldwide purchase through familiar rails
              </p>
            </Card>

            <Card className="md:col-span-3 p-8 bg-card border border-border text-center">
              <div className="w-16 h-16 rounded-md bg-accent/10 border border-accent mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Blockchain Handles Settlement
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Automated, transparent settlement with instant record-keeping and compliance
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-card border border-border shadow-card">
            <p className="text-base text-muted-foreground text-center leading-relaxed">
              <strong className="text-foreground font-semibold">Same economics as traditional revenue bonds.</strong> Revolutionary distribution and liquidity. The innovation isn't the instrument — it's the access.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mechanism;
