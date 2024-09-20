import React from "react";
import Container from "../Container/container";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Container>
        <Link href="/" title="Página inicial"></Link>
      </Container>
    </header>
  );
}
