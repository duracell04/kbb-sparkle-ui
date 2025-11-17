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
        <rect x="15" y="8" width="2" height="18" fill={tree} />
        
        {/* Branch tier 1 (top) */}
        <rect x="11" y="12" width="10" height="1.5" fill={tree} />
        <rect x="10" y="12" width="2" height="2" fill={nodes} />
        <rect x="20" y="12" width="2" height="2" fill={nodes} />
        
        {/* Branch tier 2 */}
        <rect x="9" y="16" width="14" height="1.5" fill={tree} />
        <rect x="8" y="16" width="2" height="2" fill={nodes} />
        <rect x="22" y="16" width="2" height="2" fill={nodes} />
        
        {/* Branch tier 3 */}
        <rect x="11" y="20" width="10" height="1.5" fill={tree} />
        <rect x="10" y="20" width="2" height="2" fill={nodes} />
        <rect x="20" y="20" width="2" height="2" fill={nodes} />
        
        {/* Branch tier 4 (bottom) */}
        <rect x="13" y="24" width="6" height="1.5" fill={tree} />
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
