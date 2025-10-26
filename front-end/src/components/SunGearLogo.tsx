import { cn } from "@/lib/utils";

interface SunGearLogoProps {
  className?: string;
  animate?: boolean;
}

export const SunGearLogo = ({ className, animate = true }: SunGearLogoProps) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn(
        "text-secondary",
        animate && "transition-transform hover:rotate-180 duration-500",
        className
      )}
      fill="currentColor"
    >
      {/* Gear teeth (outer rays) */}
      <g>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect
            key={angle}
            x="48"
            y="5"
            width="4"
            height="20"
            rx="2"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
      </g>
      
      {/* Inner gear teeth */}
      <g>
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
          <rect
            key={angle}
            x="48.5"
            y="15"
            width="3"
            height="12"
            rx="1.5"
            transform={`rotate(${angle} 50 50)`}
            opacity="0.7"
          />
        ))}
      </g>
      
      {/* Center circle (sun core) */}
      <circle cx="50" cy="50" r="20" />
      
      {/* Center gear hole */}
      <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
      
      {/* Inner details */}
      <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.5" />
    </svg>
  );
};
