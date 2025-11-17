import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, FileText, Code2, Users } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground tracking-wide">
            How to Collaborate
          </h2>
          <p className="text-xl font-serif text-primary-foreground/85 max-w-2xl mx-auto">
            Join us in building the future of tokenized private debt infrastructure
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <Card className="p-6 bg-card/10 backdrop-blur-sm border-2 border-primary-foreground/20 text-center hover:bg-card/20 transition-all ornamental-border hover:shadow-ornate">
              <Code2 className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-display font-semibold text-primary-foreground mb-2">Contribute a Slice</h3>
              <p className="text-sm font-serif text-primary-foreground/75">Small PR + one test. Every contribution counts.</p>
            </Card>

            <Card className="p-6 bg-card/10 backdrop-blur-sm border-2 border-primary-foreground/20 text-center hover:bg-card/20 transition-all ornamental-border hover:shadow-ornate">
              <FileText className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-display font-semibold text-primary-foreground mb-2">Add a Rail Adapter</h3>
              <p className="text-sm font-serif text-primary-foreground/75">Parse evidence → produce settlement attestation.</p>
            </Card>

            <Card className="p-6 bg-card/10 backdrop-blur-sm border-2 border-primary-foreground/20 text-center hover:bg-card/20 transition-all ornamental-border hover:shadow-ornate">
              <Users className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-display font-semibold text-primary-foreground mb-2">Challenge Mechanics</h3>
              <p className="text-sm font-serif text-primary-foreground/75">Invariants, rounding, record dates, failure paths.</p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-display font-semibold px-8 shadow-ornate"
              asChild
            >
              <a href="https://github.com/duracell04/KBB_MVP" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-sans"
            >
              <FileText className="w-5 h-5 mr-2" />
              Read Documentation
            </Button>
          </div>

          <div className="pt-8 space-y-2">
            <p className="text-sm font-serif text-primary-foreground/60">
              See <code className="px-2 py-1 bg-primary-foreground/10 rounded text-primary-foreground font-mono">VISION.md</code> for intent and <code className="px-2 py-1 bg-primary-foreground/10 rounded text-primary-foreground font-mono">ROADMAP.md</code> for next checkpoints
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
