import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "accent";
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
}

/**
 * KBB Logo - "Capital Tree" geometric mark
 * Abstract tree representing capital flows to Georgian businesses
 * Specifications: 32×32 grid, ultra-minimal, institutional aesthetic
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
  
  // Color variants - ink teal tree, amber nodes
  const colors = {
    default: {
      tree: "#0D232D",
      nodes: "#0D232D"
    },
    accent: {
      tree: "#0D232D",
      nodes: "#D97706"
    }
  };
  
  const { tree, nodes } = colors[variant];
  
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Icon - Geometric Antlers */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Base / skull hint */}
        <line x1="14" y1="20" x2="18" y2="20" stroke={tree} strokeWidth="2" strokeLinecap="round" />
        
        {/* Left horn - main beam */}
        <polyline 
          points="16,20 13,16 11,12 9,8" 
          stroke={tree} 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        
        {/* Left horn - tines */}
        <line x1="13" y1="16" x2="13" y2="12" stroke={tree} strokeWidth="2" strokeLinecap="round" />
        <line x1="11" y1="12" x2="11" y2="8" stroke={tree} strokeWidth="2" strokeLinecap="round" />
        <line x1="9" y1="8" x2="8" y2="5" stroke={tree} strokeWidth="2" strokeLinecap="round" />
        
        {/* Right horn - main beam (mirrored) */}
        <polyline 
          points="16,20 19,16 21,12 23,8" 
          stroke={tree} 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        
        {/* Right horn - tines (mirrored) */}
        <line x1="19" y1="16" x2="19" y2="12" stroke={tree} strokeWidth="2" strokeLinecap="round" />
        <line x1="21" y1="12" x2="21" y2="8" stroke={tree} strokeWidth="2" strokeLinecap="round" />
        <line x1="23" y1="8" x2="24" y2="5" stroke={tree} strokeWidth="2" strokeLinecap="round" />
        
        {/* Amber nodes at tine tips (accent variant only) */}
        {variant === "accent" && (
          <>
            <circle cx="13" cy="12" r="1.5" fill={nodes} />
            <circle cx="11" cy="8" r="1.5" fill={nodes} />
            <circle cx="8" cy="5" r="1.5" fill={nodes} />
            <circle cx="19" cy="12" r="1.5" fill={nodes} />
            <circle cx="21" cy="8" r="1.5" fill={nodes} />
            <circle cx="24" cy="5" r="1.5" fill={nodes} />
          </>
        )}
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
