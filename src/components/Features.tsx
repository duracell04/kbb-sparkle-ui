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
            The Vision
          </h2>
          <p className="text-lg text-muted-foreground">
            Create a bridge between Georgian businesses and global capital using blockchain rails.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8 bg-card border border-border">
            <h3 className="text-2xl font-medium text-foreground mb-6 text-center">
              Think "Eurobond Market for SMEs"
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-md bg-accent/10 border border-accent mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-medium text-foreground mb-2">Standardized</h4>
                <p className="text-sm text-muted-foreground">
                  Common bond structures that global investors understand
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-md bg-success/10 border border-success mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-success" />
                </div>
                <h4 className="font-medium text-foreground mb-2">Liquid</h4>
                <p className="text-sm text-muted-foreground">
                  Blockchain rails enable efficient secondary markets
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-md bg-accent/10 border border-accent mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-medium text-foreground mb-2">Accessible</h4>
                <p className="text-sm text-muted-foreground">
                  Global reach without traditional infrastructure costs
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border border-border text-center shadow-card">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground font-semibold">Not replacing existing systems</strong> — building where they can't reach. The innovation isn't the instrument — it's the <strong className="text-foreground">access</strong>.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
