import { Card } from "@/components/ui/card";
import { ArrowRight, Wallet, CheckCircle2, FileText, Coins } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Wallet,
      title: "Investor Subscribes",
      description: "Eligible investor funds on supported rail (escrow, SWIFT, SEPA, or whitelisted stablecoin)",
      highlight: "Subscribe",
    },
    {
      icon: CheckCircle2,
      title: "Settlement Evidence",
      description: "Settlement adapter receives and verifies proof (amount, currency, valueDate, settlementRef)",
      highlight: "Verify",
    },
    {
      icon: FileText,
      title: "DvP Orchestration",
      description: "Orchestrator attests funding and triggers smart contract execution",
      highlight: "Attest",
    },
    {
      icon: Coins,
      title: "Token Minted",
      description: "FixedIncomeNote minted/transferred with on-chain event including settlementRef",
      highlight: "Settle",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            A rail-agnostic DvP flow where cash settles on regulated infrastructure
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <Card className="p-6 h-full bg-gradient-card border-border shadow-elevated hover:shadow-glow transition-all duration-300">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full"></div>
                      <div className="relative bg-accent/10 border-2 border-accent p-4 rounded-full">
                        <step.icon className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">
                        {step.highlight}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-secondary/50 border border-border rounded-lg">
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-accent" />
              Event Schema (Rail-Agnostic)
            </h4>
            <div className="space-y-2 font-mono text-sm">
              <div className="bg-card p-4 rounded border border-border">
                <code className="text-foreground">
                  SubscriptionSettled(orderId, investor, amount, currency, <span className="text-accent">settlementRef</span>, <span className="text-accent">settlementNetwork</span>)
                </code>
              </div>
              <div className="bg-card p-4 rounded border border-border">
                <code className="text-foreground">
                  CouponPaid(periodId, grossAmount, withholding, netAmount, <span className="text-accent">settlementRef</span>, <span className="text-accent">settlementNetwork</span>)
                </code>
              </div>
              <div className="bg-card p-4 rounded border border-border">
                <code className="text-foreground">
                  RedemptionPaid(amount, <span className="text-accent">settlementRef</span>, <span className="text-accent">settlementNetwork</span>)
                </code>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              <strong>settlementNetwork:</strong> ISO20022 | SWIFT | SEPA | ACH | FPS | ONCHAIN_STABLECOIN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
