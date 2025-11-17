import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, FileText, Code2, Users } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sans font-semibold text-white">
            Ready to Build the Future of Georgian Finance?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Join us in unlocking dormant capital and transforming SME financing in Georgia
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <Card className="p-6 bg-white/5 border border-white/10 text-center">
              <Code2 className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">Contribute a Slice</h3>
              <p className="text-sm text-white/80">Small PR + one test. Every contribution counts.</p>
            </Card>

            <Card className="p-6 bg-white/5 border border-white/10 text-center">
              <FileText className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">Add a Rail Adapter</h3>
              <p className="text-sm text-white/80">Parse evidence → produce settlement attestation.</p>
            </Card>

            <Card className="p-6 bg-white/5 border border-white/10 text-center">
              <Users className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">Challenge Mechanics</h3>
              <p className="text-sm text-white/80">Invariants, rounding, record dates, failure paths.</p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-medium px-8"
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
              className="border-white/40 text-white hover:bg-white/10"
            >
              <FileText className="w-5 h-5 mr-2" />
              Read Documentation
            </Button>
          </div>

          <div className="pt-8 space-y-2">
            <p className="text-sm text-white/70">
              Kartvelian Business Bonds | Led by Andro Kasrashvili, AKALabs | Building Financial Infrastructure for Georgia's Future
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
