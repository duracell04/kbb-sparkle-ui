import { Github, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Logo showWordmark size="sm" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Token-registered · Cash-settled · Professional-only · Legal title in CSD
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-foreground text-sm">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#features" className="text-muted-foreground hover:text-brand-700 transition-colors">Vision</a></li>
              <li><a href="/#how-it-works" className="text-muted-foreground hover:text-brand-700 transition-colors">Why Georgia</a></li>
              <li><a href="/#mechanism" className="text-muted-foreground hover:text-brand-700 transition-colors">Mechanism</a></li>
              <li><a href="/#roadmap" className="text-muted-foreground hover:text-brand-700 transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-foreground text-sm">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://github.com/duracell04/KBB_MVP" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-700 transition-colors flex items-center gap-2">
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </li>
              <li>
                <Link to="/documentation" className="text-muted-foreground hover:text-brand-700 transition-colors flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5" />
                  Documentation
                </Link>
              </li>
              <li><Link to="/issuer-workflow" className="text-muted-foreground hover:text-brand-700 transition-colors">Issuer Demo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-foreground text-sm">Standards</h4>
            <div className="flex flex-wrap gap-2">
              {["ERC-3643", "DvP", "ISO 20022", "Permissioned"].map((keyword) => (
                <span key={keyword} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded font-mono border border-border">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© 2025 KBB · Open source under MIT License</p>
            <p>Infrastructure for professional private debt</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
