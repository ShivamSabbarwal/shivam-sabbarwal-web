import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = "", size = 'md' }: LogoProps) => {
  
  const sizeClasses = {
    sm: 'text-3xl',
    md: 'text-5xl',
    lg: 'text-7xl'
  };

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      whileHover={{ 
        scale: 1.08,
        rotateY: 5,
        rotateX: 2
      }}
      whileTap={{ 
        scale: 0.95,
        rotateY: -3,
        rotateX: -1
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
    >
      {/* Main logo container with 3D effect */}
      <div className={`relative ${sizeClasses[size]} font-black`}>
        {/* Shadow layer - Accent */}
        <div className="absolute inset-0 transform translate-x-1 translate-y-1 opacity-25">
          <span 
            className="text-accent/20 font-black"
            style={{ 
              fontFamily: "'Orbitron', 'Courier New', monospace",
              fontWeight: 900,
              letterSpacing: '0.1em',
              transform: 'skew(-5deg, 2deg)',
              filter: 'contrast(1.2) saturate(1.1)'
            }}
          >
            S
          </span>
        </div>
        
        {/* Main S - Primary */}
        <div className="relative z-10">
          <span
            className="inline-block text-primary font-black"
            style={{
              fontFamily: "'Orbitron', 'Courier New', monospace",
              fontWeight: 900,
              letterSpacing: '0.1em',
              transform: 'skew(-5deg, 2deg)',
              filter: 'contrast(1.2) saturate(1.1)',
              textShadow: `
                2px 2px 0 var(--accent),
                4px 4px 0 rgba(0,0,0,0.3)
              `
            }}
          >
            S
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Logo;
