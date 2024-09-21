"use client";
import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

export default function template({ children }: ChildrenProps) {
  return <main>{children}</main>;
}
