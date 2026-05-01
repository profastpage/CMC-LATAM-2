"use client";

interface CMCLogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: "transparent" | "solid" | "light";
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { icon: 32, text: "text-lg", gap: "gap-1.5", iconPad: "p-1" },
  md: { icon: 40, text: "text-2xl", gap: "gap-2", iconPad: "p-1.5" },
  lg: { icon: 48, text: "text-3xl", gap: "gap-2.5", iconPad: "p-2" },
};

export default function CMCLogo({
  className = "",
  iconOnly = false,
  variant = "solid",
  size = "md",
}: CMCLogoProps) {
  const s = sizeMap[size];

  const iconBg = {
    transparent: "bg-white/15 backdrop-blur-sm border border-white/20",
    solid: "bg-green shadow-md shadow-green/20",
    light: "bg-green/10 border border-green/20",
  }[variant];

  const textColor = {
    transparent: "text-white",
    solid: "text-navy dark:text-white",
    light: "text-foreground",
  }[variant];

  return (
    <div className={`flex items-center ${s.gap} ${className}`}>
      {/* Logo Icon */}
      <div
        className={`${iconBg} rounded-xl flex items-center justify-center ${s.iconPad}`}
        style={{ width: s.icon, height: s.icon }}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{ maxWidth: s.icon - 12, maxHeight: s.icon - 12 }}
        >
          {/* Roof / House silhouette */}
          <path
            d="M20 4L4 18H8V34H16V24H24V34H32V18H36L20 4Z"
            fill="white"
            fillOpacity="0.95"
          />
          {/* Wave element at bottom */}
          <path
            d="M4 34C8 30 12 38 16 34C18 32 20 36 22 34C24 32 26 36 28 34C30 32 32 36 36 34"
            stroke="white"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Door */}
          <rect x="17" y="26" width="6" height="8" rx="1" fill="currentColor" fillOpacity="0.15" />
          {/* Window left */}
          <rect x="9.5" y="20" width="4" height="4" rx="0.5" fill="currentColor" fillOpacity="0.15" />
          {/* Window right */}
          <rect x="26.5" y="20" width="4" height="4" rx="0.5" fill="currentColor" fillOpacity="0.15" />
        </svg>
      </div>

      {/* Text */}
      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span
            className={`${s.text} font-extrabold tracking-[0.18em] ${textColor}`}
          >
            CMC
          </span>
          <span
            className={`text-[9px] sm:text-[10px] font-medium tracking-[0.25em] uppercase mt-0.5 ${
              variant === "transparent"
                ? "text-white/50"
                : "text-muted-foreground"
            }`}
          >
            {size !== "sm"
              ? "Arquitectura"
              : ""}
          </span>
        </div>
      )}
    </div>
  );
}
