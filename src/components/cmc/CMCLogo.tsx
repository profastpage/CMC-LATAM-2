"use client";

interface CMCLogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: "transparent" | "solid" | "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const sizeConfig = {
  sm: { iconSize: 30, textSize: "text-base", subSize: "text-[7px]", gap: "gap-1.5" },
  md: { iconSize: 38, textSize: "text-xl", subSize: "text-[8px]", gap: "gap-2" },
  lg: { iconSize: 48, textSize: "text-2xl sm:text-3xl", subSize: "text-[9px]", gap: "gap-2.5" },
};

const variantConfig = {
  transparent: {
    iconBg: "bg-white/15 backdrop-blur-sm border border-white/20",
    textColor: "text-white",
    subColor: "text-white/50",
  },
  solid: {
    iconBg: "bg-green shadow-md shadow-green/20",
    textColor: "text-navy dark:text-white",
    subColor: "text-muted-foreground",
  },
  light: {
    iconBg: "bg-green/15 border border-green/20",
    textColor: "text-foreground",
    subColor: "text-muted-foreground",
  },
  dark: {
    iconBg: "bg-green shadow-md shadow-green/30",
    textColor: "text-white",
    subColor: "text-white/50",
  },
};

export default function CMCLogo({
  className = "",
  iconOnly = false,
  variant = "solid",
  size = "md",
}: CMCLogoProps) {
  const s = sizeConfig[size];
  const v = variantConfig[variant];

  return (
    <div className={`flex items-center ${s.gap} ${className}`}>
      {/* Logo Icon - Based on official CMC logo design */}
      <div
        className={`${v.iconBg} rounded-lg flex items-center justify-center`}
        style={{ width: s.iconSize, height: s.iconSize }}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{ maxWidth: s.iconSize - 10, maxHeight: s.iconSize - 10 }}
        >
          {/* Green triangular roof - larger shape */}
          <path
            d="M20 3L2 20H7V36H14V24H26V36H33V20H38L20 3Z"
            fill="#4ca64c"
          />
          {/* Navy house silhouette inside - smaller, offset */}
          <path
            d="M20 10L8 21H11V33H17V24H23V33H29V21H32L20 10Z"
            fill="#0b1d2a"
          />
          {/* Door */}
          <rect x="17.5" y="26" width="5" height="7" rx="0.8" fill="white" fillOpacity="0.25" />
          {/* Left window */}
          <rect x="12" y="22" width="3.5" height="3" rx="0.4" fill="white" fillOpacity="0.2" />
          {/* Right window */}
          <rect x="24.5" y="22" width="3.5" height="3" rx="0.4" fill="white" fillOpacity="0.2" />
        </svg>
      </div>

      {/* Text */}
      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span className={`${s.textSize} font-extrabold tracking-[0.15em] ${v.textColor}`}>
            CMC
          </span>
          {size !== "sm" && (
            <span className={`${s.subSize} font-semibold tracking-[0.2em] uppercase mt-0.5 ${v.subColor}`}>
              Arquitectura
            </span>
          )}
        </div>
      )}
    </div>
  );
}
