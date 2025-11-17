import { Card } from "@/components/ui/card";
import { Shield, Scale, Globe, Lock, Zap, Database } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "DvP by Design",
      description: "Tokens move only after verified funds. Delivery-versus-Payment is enforced at the protocol level.",
      color: "text-accent",
    },
    {
      icon: Database,
      title: "Audit-Ready",
      description: "Register events store bank references (ISO 20022 identifiers) for one-to-one matching with settlement evidence.",
      color: "text-success",
    },
    {
      icon: Lock,
      title: "Permissioned Transfers",
      description: "Professional-only, whitelisted transfers. ERC-3643 compatible with eligibility, lockups, and jurisdictional controls.",
      color: "text-accent",
    },
    {
      icon: Scale,
      title: "CSD-Aligned",
      description: "Legal title remains in the Central Securities Depository (Phase-1). Token mirrors the official record.",
      color: "text-success",
    },
    {
      icon: Globe,
      title: "Cross-Border Ready",
      description: "Designed for Georgian SMEs accessing professional capital with international investor participation.",
      color: "text-accent",
    },
    {
      icon: Zap,
      title: "Regulated Rails",
      description: "Cash settles on licensed banks or approved payment systems. SWIFT, SEPA, ACH, or permitted stablecoins.",
      color: "text-success",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sans font-semibold text-foreground mb-4">
            Why KBB Matters
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional-grade infrastructure for tokenized private debt on regulated rails.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card border border-border"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-secondary rounded-md ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-medium text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 p-8 bg-slate-50 border border-slate-200 rounded-md">
          <h3 className="text-2xl font-medium text-foreground mb-4 text-center">
            What KBB Is
          </h3>
          <p className="text-base text-muted-foreground text-center leading-relaxed">
            <strong className="text-foreground">Is:</strong> A controlled way to record ownership and servicing of private notes; professional-only; CSD-aligned; bank-funded; audit-ready.
          </p>
          <p className="text-base text-muted-foreground text-center leading-relaxed mt-4">
            <strong className="text-foreground">Is not:</strong> A retail trading app; a way to bypass banks or the central bank; a promise of instant liquidity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
