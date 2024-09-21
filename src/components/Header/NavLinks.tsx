import Link from "next/link";
import React, { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface NavLinksProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
}

export default function NavLinks({
  children,
  className,
  href,
  title,
  ...props
}: NavLinksProps) {
  return (
    <Link
      href={href}
      title={title}
      {...props}
      className={
        (twMerge(
          "font-inter text-gray-scale-300 hover:text-brand text-base font-medium transition-all",
        ),
        className)
      }
    >
      {children}
    </Link>
  );
}
