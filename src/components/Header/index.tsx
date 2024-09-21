"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container/container";
import Logo from "@/assets/logo.svg";
import Hamburger from "hamburger-react";
import AsideMenu from "./AsideMenu";
import NavLinks from "./NavLinks";
import { PiMagnifyingGlass } from "react-icons/pi";
import { linksMenu } from "@/utils/data";
import Button from "../Button";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="py-5">
        <Container className="flex items-center justify-between">
          <Link href="/" title="Página inicial">
            <Image src={Logo} alt="logo do Blog Zarrin" />
          </Link>

          <nav className="hidden items-center justify-between gap-12 lg:flex">
            <div className="flex gap-10">
              <ul className="flex items-center gap-4">
                {linksMenu.map((item, index) => (
                  <li key={item.label}>
                    <NavLinks href={item.url}>{item.label}</NavLinks>
                  </li>
                ))}
              </ul>
              <Link href="/">
                <PiMagnifyingGlass size={24} />
              </Link>
            </div>

            <Button href="/contato" variant="primary">
              Entre em contato
            </Button>
          </nav>
          <div className="flex items-center gap-9 lg:hidden">
            <Link href="/">
              <PiMagnifyingGlass size={24} />
            </Link>
            <button className="relative z-[99]">
              <Hamburger
                label="Mostrar menu"
                toggle={setOpen}
                toggled={isOpen}
              />
            </button>
          </div>
        </Container>
      </header>
      <AsideMenu isOpen={isOpen} closeMenu={closeMenu} />
    </>
  );
}
