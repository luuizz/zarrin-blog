import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  variant: "primary" | "secondary" | "tertiary";
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
    "font-manrope inline-block rounded-lg font-manrope text-base font-semibold transition-all duration-300";
  const primaryClass = "px-12 py-4 bg-brand text-white hover:brightness-90";
  const secondaryClass =
    "border-brand border py-3 px-7 text-brand font-bold hover:bg-brand hover:text-white";
  const tertiaryClass =
    "px-12 py-4 bg-white text-gray-scale-400 hover:bg-black hover:text-white";
  const variantClass =
    variant === "primary"
      ? primaryClass
      : variant === "secondary"
        ? secondaryClass
        : tertiaryClass;
  const combinedClass = `${baseClass} ${variantClass}`;

  return (
    <Link href={href} title={title} className={combinedClass} onClick={onClick}>
      {children}
    </Link>
  );
}
