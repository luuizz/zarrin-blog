import Link from 'next/link'
import React, { type AnchorHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavLinksProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  className?: string
}

export default function NavLinks({
  children,
  className,
  href,
  title,
  ...props
}: NavLinksProps) {
  const defaultClass =
    'font-inter text-gray-scale-300 hover:text-brand text-base font-medium transition-all'

  const combinedClass = twMerge(defaultClass, className)

  return (
    <Link href={href} title={title} {...props} className={combinedClass}>
      {children}
    </Link>
  )
}
