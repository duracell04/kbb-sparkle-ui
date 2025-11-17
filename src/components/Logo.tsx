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
      {/* Icon - Capital Tree */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Trunk - central vertical line */}
        <rect x="15" y="6" width="2" height="20" fill={tree} />
        
        {/* Branch tier 1 (top) - short horizontal + tall vertical shoots */}
        <rect x="13" y="10" width="3" height="1.5" fill={tree} />
        <rect x="16" y="10" width="3" height="1.5" fill={tree} />
        <rect x="12" y="8" width="1.5" height="3" fill={tree} />
        <rect x="18.5" y="8" width="1.5" height="3" fill={tree} />
        <rect x="11" y="7" width="2" height="2" fill={nodes} />
        <rect x="19" y="7" width="2" height="2" fill={nodes} />
        
        {/* Branch tier 2 - horizontal + upward turn */}
        <rect x="11" y="14" width="5" height="1.5" fill={tree} />
        <rect x="16" y="14" width="5" height="1.5" fill={tree} />
        <rect x="10" y="12" width="1.5" height="3" fill={tree} />
        <rect x="20.5" y="12" width="1.5" height="3" fill={tree} />
        <rect x="9" y="11" width="2" height="2" fill={nodes} />
        <rect x="21" y="11" width="2" height="2" fill={nodes} />
        
        {/* Branch tier 3 - longer horizontal + upward turn */}
        <rect x="9" y="18" width="7" height="1.5" fill={tree} />
        <rect x="16" y="18" width="7" height="1.5" fill={tree} />
        <rect x="8" y="16" width="1.5" height="3" fill={tree} />
        <rect x="22.5" y="16" width="1.5" height="3" fill={tree} />
        <rect x="7" y="15" width="2" height="2" fill={nodes} />
        <rect x="23" y="15" width="2" height="2" fill={nodes} />
        
        {/* Branch tier 4 (bottom) - widest, shorter vertical */}
        <rect x="7" y="22" width="9" height="1.5" fill={tree} />
        <rect x="16" y="22" width="9" height="1.5" fill={tree} />
        <rect x="6" y="21" width="1.5" height="2" fill={tree} />
        <rect x="24.5" y="21" width="1.5" height="2" fill={tree} />
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
