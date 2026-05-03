"use client";

import Image from "next/image";

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
  const s = sizeConfig[size];

  // For "transparent" variant on hero, add a subtle brightness filter
  const filterClass =
    variant === "transparent"
      ? "brightness-0 invert"
      : "";

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/images/cmc-logo.png"
        alt="CMC Arquitectura"
        height={s.height}
        width={s.height * 3.5}
        className={`object-contain ${filterClass}`}
        priority
      />
    </div>
  );
}
