import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
  title?: string;
  onClick?: () => void;
}

export default function Button({
  href,
  variant,
  children,
  title,
  onClick,
}: ButtonProps) {
  const baseClass =
    "inline-block rounded-lg font-manrope text-base font-semibold transition-all duration-300";
  const primaryClass = "px-12 py-4 bg-brand text-white hover:brightness-90";
  const secondaryClass = "border-2 border-white";
  const variantClass = variant === "primary" ? primaryClass : secondaryClass;
  const combinedClass = `${baseClass} ${variantClass}`;

  return (
    <Link href={href} title={title} className={combinedClass} onClick={onClick}>
      {children}
    </Link>
  );
}
