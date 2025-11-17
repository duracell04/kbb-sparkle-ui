import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Target } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sans font-semibold text-foreground mb-4">
            Why Georgia, Why Now
          </h2>
          <p className="text-lg text-muted-foreground">
            The perfect combination of opportunity, readiness, and impact
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card border border-border">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-accent/10 border border-accent flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Government Support
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Actively seeking fintech innovation leadership
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-success/10 border border-success flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    High Growth Economy
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    5-7% GDP growth demands capital infrastructure
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-accent/10 border border-accent flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Perfect Scale
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Small enough to prove model ($20B economy), large enough to matter globally
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-brand-700 text-white border border-brand-600 shadow-card">
            <h3 className="text-2xl font-semibold mb-6">The Impact</h3>
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-accent mb-2 tabular-nums">1%</div>
                <p className="text-white/90 text-sm">
                  Just 1% more foreign capital
                </p>
              </div>
              <div className="text-3xl font-bold text-white/60">=</div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2 tabular-nums">$200M</div>
                <p className="text-white/90 text-sm">
                  Economic impact for Georgian businesses
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
