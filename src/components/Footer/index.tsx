import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container/container";
import { arraySocial, menuFooter } from "@/utils/data";
import logo from "@/assets/logo.svg";

export default function Footer() {
  return (
    <footer className="py-10">
      <Container>
        <main className="mb-10 flex flex-col items-center justify-center border-b border-brand pb-10">
          <Link href="#" className="mb-10" title="Ir para Página Inicial">
            <Image src={logo} alt="Logo Zarrin Blog" />
          </Link>
          <nav className="mb-10 flex gap-14">
            {menuFooter.map((item) => (
              <Link
                className="text-gray-scale-500 font-inter text-base/normal transition-all hover:text-brand"
                key={item.label}
                href={item.url}
                title={`Ir para ${item.label}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            {arraySocial.map((item) => (
              <Link
                className="rounded-full bg-brand p-2 text-2xl text-white transition-all hover:brightness-105"
                href={item.url}
                key={item.title}
                style={{ display: "flex", alignItems: "center" }}
              >
                <item.icon />
              </Link>
            ))}
          </div>
        </main>

        <div>
          <p className="text-gray-scale-500 mx-auto text-center font-manrope text-base font-normal">
            Copyright Ideapeel Inc © 2023. All Right Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
