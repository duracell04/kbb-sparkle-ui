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
      {/* Icon - Capital Tree with Antler-Inspired Upper Branches */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Central trunk */}
        <rect x="15" y="12" width="2" height="14" fill={tree} />
        
        {/* Lower tier - wide horizontal base */}
        <rect x="9" y="22" width="7" height="1.5" fill={tree} />
        <rect x="16" y="22" width="7" height="1.5" fill={tree} />
        
        {/* Mid-lower tier - horizontal with gentle upward turn */}
        <rect x="11" y="18" width="5" height="1.5" fill={tree} />
        <rect x="16" y="18" width="5" height="1.5" fill={tree} />
        <rect x="10" y="17" width="1.5" height="2.5" fill={tree} />
        <rect x="20.5" y="17" width="1.5" height="2.5" fill={tree} />
        
        {/* Mid-upper tier - shorter horizontal, taller upward sweep (antler-like) */}
        <rect x="12" y="14" width="4" height="1.5" fill={tree} />
        <rect x="16" y="14" width="4" height="1.5" fill={tree} />
        <rect x="11" y="11" width="1.5" height="4" fill={tree} />
        <rect x="19.5" y="11" width="1.5" height="4" fill={tree} />
        <circle cx="11.75" cy="10" r="1.5" fill={nodes} />
        <circle cx="20.25" cy="10" r="1.5" fill={nodes} />
        
        {/* Top tier - very vertical, branching upward shoots (strongest antler echo) */}
        <rect x="13" y="12" width="3" height="1.5" fill={tree} />
        <rect x="16" y="12" width="3" height="1.5" fill={tree} />
        
        {/* Left upward shoots */}
        <rect x="12.5" y="6" width="1.5" height="7" fill={tree} />
        <rect x="11" y="6" width="1.5" height="5" fill={tree} />
        <circle cx="11.75" cy="5" r="1.5" fill={nodes} />
        <circle cx="13.25" cy="5" r="1.5" fill={nodes} />
        
        {/* Right upward shoots */}
        <rect x="18" y="6" width="1.5" height="7" fill={tree} />
        <rect x="19.5" y="6" width="1.5" height="5" fill={tree} />
        <circle cx="18.75" cy="5" r="1.5" fill={nodes} />
        <circle cx="20.25" cy="5" r="1.5" fill={nodes} />
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
