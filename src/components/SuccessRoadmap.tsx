import { Card } from "@/components/ui/card";
import { Calendar, Building2, TrendingUp, Target } from "lucide-react";

const SuccessRoadmap = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sans font-semibold text-foreground mb-4">
            Success Roadmap
          </h2>
          <p className="text-lg text-muted-foreground">
            Clear milestones on the path to transforming Georgian SME financing
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-md bg-accent/10 border border-accent flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Year 1</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">10</div>
                  <p className="text-sm text-muted-foreground">businesses onboarded</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">$5M</div>
                  <p className="text-sm text-muted-foreground">capital raised</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-md bg-success/10 border border-success flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Year 3</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-success mb-1">100</div>
                  <p className="text-sm text-muted-foreground">businesses onboarded</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-success mb-1">$100M</div>
                  <p className="text-sm text-muted-foreground">capital raised</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-md bg-accent/10 border border-accent flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Year 5</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    Market Standard
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Standard financing option for Georgian SMEs
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-primary text-white">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-4">Real Success</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  When Georgian business growth isn't capital constrained. When entrepreneurs can focus on building great companies instead of searching for funding.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SuccessRoadmap;
