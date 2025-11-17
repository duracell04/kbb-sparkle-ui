import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "accent";
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
}

/**
 * KBB Logo - "Rails & Ledger" geometric mark
 * Two vertical rails (regulated payment rails) bridged by a token square (registered bond)
 * Specifications: 32×32 grid, ultra-minimal, no curves, no shadows
 */
const Logo = ({ 
  variant = "default", 
  size = "md", 
  showWordmark = false,
  className 
}: LogoProps) => {
  const sizeMap = {
    sm: 24,
    md: 32,
    lg: 40
  };
  
  const iconSize = sizeMap[size];
  
  // Color variants - ink teal base, amber accent only
  const colors = {
    default: {
      rails: "#0D232D",
      token: "#0D232D"
    },
    accent: {
      rails: "#0D232D",
      token: "#D97706"
    }
  };
  
  const { rails, token } = colors[variant];
  
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Icon - Rails & Ledger */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Left rail */}
        <rect x="8" y="6" width="4" height="20" fill={rails} />
        
        {/* Right rail */}
        <rect x="20" y="6" width="4" height="20" fill={rails} />
        
        {/* Token square - centered between rails */}
        <rect x="12" y="12" width="8" height="8" fill={token} />
      </svg>
      
      {/* Wordmark */}
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span 
            className="font-medium tracking-wide"
            style={{ 
              fontSize: size === 'sm' ? '0.875rem' : size === 'md' ? '1.125rem' : '1.25rem',
              color: '#0D232D'
            }}
          >
            KBB
          </span>
          {size !== 'sm' && (
            <span className="text-xs font-normal" style={{ color: '#4B5563' }}>
              Kartvelian Business Bonds
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
