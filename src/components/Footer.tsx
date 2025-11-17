import { Github, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-800 text-white py-12 border-t border-brand-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-700 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">KB</span>
              </div>
              <div>
                <h3 className="font-bold">KBB MVP</h3>
                <p className="text-xs text-white/70">Kartvelian Business Bonds</p>
              </div>
            </div>
            <p className="text-sm text-white/70">
              Token-registered · Cash-settled on regulated rails · Professional-only · Legal title in the CSD (Phase-1).
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Architecture</a></li>
              <li><a href="#use-case" className="hover:text-white transition-colors">Use Case</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="https://github.com/duracell04/KBB_MVP" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Documentation
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">VISION.md</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ROADMAP.md</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Keywords</h4>
            <div className="flex flex-wrap gap-2">
              {["ERC-3643", "DvP", "ISO 20022", "Stablecoin", "Permissioned", "Audit-ready"].map((keyword) => (
                <span key={keyword} className="px-2 py-1 bg-white/10 text-white/90 text-xs rounded">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>© 2025 KBB. Open source under MIT License.</p>
          <p className="mt-2">Professional private debt on regulated rails.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
