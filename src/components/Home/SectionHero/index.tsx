import React from "react";
import Image from "next/image";
import Container from "@/components/Container/container";
import Button from "@/components/Button";
import imageHero from "@/assets/img-hero.png";

export default function SectionHomeHero() {
  return (
    <section className="before:bg-element-hero after:bg-element-hero relative overflow-hidden bg-brand pb-24 pt-32 before:absolute before:-left-[84px] before:-top-44 before:h-[378px] before:w-[685px] after:absolute after:-bottom-[138px] after:-right-[373px] after:h-[378px] after:w-[685px]">
      <Container className="flex items-center justify-between gap-12">
        <div className="max-w-[580px] flex-1">
          <span className="mb-2 block font-manrope text-base/normal uppercase tracking-widest text-white">
            Featured Post
          </span>
          <h1 className="mb-14 text-balance font-manrope text-6xl/tight font-bold text-white">
            How AI will Change the Future
          </h1>
          <p className="mb-16 w-[416px] font-inter text-base/normal text-white">
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly
            cute. For example, home robots will overcome navigation, direction.
          </p>
          <Button href="#" variant="tertiary">
            Read More
          </Button>
        </div>

        <div className="relative z-20 h-[576px] max-w-[608px] flex-1 overflow-hidden rounded-2xl">
          <Image
            className="h-full w-full object-cover"
            src={imageHero}
            alt="Imagem da Hero"
          />
        </div>
      </Container>
    </section>
  );
}
