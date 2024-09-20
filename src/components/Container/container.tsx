import React from 'react'
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  children: React.ReactNode,
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={twMerge("mx-auto px-3 w-full max-w-container", className)}>{children}</div>
  )
}
