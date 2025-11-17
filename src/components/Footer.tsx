import { Github, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-800 text-white py-12 border-t border-brand-700">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-700 rounded flex items-center justify-center">
                <span className="text-white font-semibold">KB</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">KBB</h3>
                <p className="text-xs text-white/90">Kartvelian Business Bonds</p>
              </div>
            </div>
            <p className="text-sm text-white/90 leading-relaxed">
              Token-registered · Cash-settled on regulated rails · Professional-only · Legal title in the CSD.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li><a href="#features" className="hover:text-white transition-colors">Vision</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Why Georgia</a></li>
              <li><a href="#mechanism" className="hover:text-white transition-colors">Mechanism</a></li>
              <li><a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-white/90">
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
              <li><a href="#" className="hover:text-white transition-colors">Technical Spec</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Standards</h4>
            <div className="flex flex-wrap gap-2">
              {["ERC-3643", "DvP", "ISO 20022", "Permissioned", "Audit-ready"].map((keyword) => (
                <span key={keyword} className="px-2 py-1 bg-white/20 text-white text-xs rounded font-mono">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/80">
          <p>© 2025 KBB. Open source under MIT License.</p>
          <p className="mt-2">Infrastructure for professional private debt.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
