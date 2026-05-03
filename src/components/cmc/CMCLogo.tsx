"use client";

import Image from "next/image";
import { useAppStore } from "@/lib/language-store";

interface CMCLogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: "transparent" | "solid" | "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const sizeConfig = {
  sm: { height: 36 },
  md: { height: 44 },
  lg: { height: 56 },
};

export default function CMCLogo({
  className = "",
  iconOnly = false,
  variant = "solid",
  size = "md",
}: CMCLogoProps) {
  const { theme } = useAppStore();
  const s = sizeConfig[size];

  // Determine which logo to show based on variant and theme
  const useWhiteLogo =
    variant === "transparent" ||
    variant === "dark" ||
    (variant === "solid" && theme === "dark");

  const logoSrc = useWhiteLogo
    ? "/images/cmc-logo-white.png"
    : "/images/cmc-logo.png";

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={logoSrc}
        alt="CMC Arquitectura"
        height={s.height}
        width={s.height * 3.5}
        className="object-contain"
        priority
      />
    </div>
  );
}
