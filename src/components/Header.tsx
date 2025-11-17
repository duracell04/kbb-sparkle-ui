import { Button } from "@/components/ui/button";
import { Github, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-semibold text-sm">KB</span>
            </div>
            <div>
              <h1 className="text-lg font-medium text-foreground">KBB MVP</h1>
              <p className="text-xs text-muted-foreground">Kartvelian Business Bonds</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <a href="/#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="/#architecture" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Architecture
            </a>
            <Link to="/issuer-workflow" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Issuer Demo
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/duracell04/KBB_MVP" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-white font-medium">
              <FileText className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Docs</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
