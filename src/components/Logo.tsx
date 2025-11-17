import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "inverse" | "accent";
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
}

/**
 * KBB Logo - "Rails & Ledger" geometric mark
 * Two vertical rails (regulated payment rails) bridged by a token square (registered bond)
 * Specifications: 32×32 grid, ultra-minimal, no curves beyond subtle radius
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
  
  // Color variants
  const colors = {
    default: {
      rails: "#0d232d",
      token: "#0d232d",
      bg: "transparent"
    },
    inverse: {
      rails: "#FFFFFF",
      token: "#FFFFFF",
      bg: "#0d232d"
    },
    accent: {
      rails: "#0d232d",
      token: "#B45309",
      bg: "transparent"
    }
  };
  
  const { rails, token, bg } = colors[variant];
  
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        style={{ background: bg }}
      >
        {/* Left rail - segmented by token */}
        <rect x="8" y="6" width="4" height="8" fill={rails} />
        <rect x="8" y="18" width="4" height="8" fill={rails} />
        
        {/* Right rail - segmented by token */}
        <rect x="20" y="6" width="4" height="8" fill={rails} />
        <rect x="20" y="18" width="4" height="8" fill={rails} />
        
        {/* Token square - centered, bridging rails */}
        <rect x="12" y="12" width="8" height="8" fill={token} rx="1" />
      </svg>
      
      {/* Wordmark */}
      {showWordmark && (
        <div className="flex flex-col">
          <span 
            className="font-sans font-medium tracking-wider text-brand-700"
            style={{ fontSize: size === 'sm' ? '0.875rem' : size === 'md' ? '1.125rem' : '1.25rem' }}
          >
            KBB
          </span>
          {size !== 'sm' && (
            <span className="text-xs text-neutral-700 font-medium">
              Kartvelian Business Bonds
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
