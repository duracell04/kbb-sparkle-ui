import { TrendingUp, Building2, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const Disconnect = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sans font-semibold text-foreground mb-6">
            The Disconnect
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            High-growth economies like Georgia offer 15-20% returns, yet proven profitable businesses can't access international markets. Current systems block natural capital flow.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card border border-border text-center">
            <TrendingUp className="w-16 h-16 text-accent mx-auto mb-4" />
            <div className="text-4xl font-bold text-foreground mb-3">$50B+</div>
            <p className="text-lg font-medium text-foreground mb-2">
              Global Capital Seeking Returns
            </p>
            <p className="text-sm text-muted-foreground">
              Institutional investors looking for emerging market yields with proper infrastructure
            </p>
          </Card>

          <Card className="p-8 bg-card border border-border text-center">
            <Building2 className="w-16 h-16 text-success mx-auto mb-4" />
            <div className="text-4xl font-bold text-foreground mb-3">500+</div>
            <p className="text-lg font-medium text-foreground mb-2">
              Georgian SMEs Need Growth Capital
            </p>
            <p className="text-sm text-muted-foreground">
              Proven profitable businesses unable to tap into international capital markets
            </p>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <Card className="p-6 bg-amber-50 border border-amber-200">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-base text-amber-900 font-medium mb-2">
                  The Problem
                </p>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Current systems weren't built for this scale. Traditional cross-border debt infrastructure is too expensive and complex for SMEs, while local markets lack the depth to meet demand.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Disconnect;
