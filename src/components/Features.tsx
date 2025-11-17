import { Card } from "@/components/ui/card";
import { Shield, Scale, Globe, Lock, Zap, Database } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Operational Truth",
      description: "DvP and reconciliation are core—not bolted on. Every token action requires verified settlement evidence.",
      color: "text-accent",
    },
    {
      icon: Lock,
      title: "Permissioned by Default",
      description: "ERC-3643 compatible transfers. Enforce eligibility, lockups, and jurisdictional restrictions at the token seam.",
      color: "text-success",
    },
    {
      icon: Scale,
      title: "Regulated Rails",
      description: "Cash settles on trusted infrastructure: SWIFT, SEPA, ACH, or whitelisted stablecoins—your choice.",
      color: "text-accent",
    },
    {
      icon: Database,
      title: "Audit-Ready Events",
      description: "On-chain events mirror banking identifiers (ISO 20022 MsgId/UETR) for deterministic joins.",
      color: "text-success",
    },
    {
      icon: Globe,
      title: "Cross-Border Ready",
      description: "Designed for Georgian SMEs accessing Eurobond-like financing with international investor base.",
      color: "text-accent",
    },
    {
      icon: Zap,
      title: "Programmable Servicing",
      description: "Automated coupon calculations (ACT/360) and redemptions with transparent, verifiable execution.",
      color: "text-success",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sans font-semibold text-foreground mb-4">
            Why KBB MVP Matters
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for the real world. Professional-grade infrastructure for tokenized private debt.
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
            Design Principle
          </h3>
          <p className="text-base text-muted-foreground text-center leading-relaxed">
            <strong className="text-foreground">Cash settles on regulated rails.</strong> Tokens exist to <span className="text-accent font-medium">register ownership</span>, <span className="text-success font-medium">gate eligibility/lockups</span>, and <span className="text-accent font-medium">emit machine-readable lifecycle events</span> keyed to the same references used by banking or stablecoin rails.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
