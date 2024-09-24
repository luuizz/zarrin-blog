import React from "react";
import Image from "next/image";
import Container from "@/components/Container/container";
import imgLarge from "@/assets/thumb-fixed-lg.png";
import CaptionPost from "@/components/Caption/CaptionPost";
import Button from "@/components/Button";

export default function SectionLargestPost() {
  return (
    <section className="pb-20 pt-32">
      <Container>
        <div className="flex flex-col items-end">
          <div className="h-[576px] w-full overflow-hidden rounded-2xl">
            <Image
              className="h-full w-full object-cover"
              src={imgLarge}
              alt="Imagem destacada"
            />
          </div>

          <div className="-mt-[312px] w-full max-w-[920px] rounded-2xl bg-white p-10">
            <div className="w-full max-w-[784px]">
              <CaptionPost categoria="Development" tempo="16 March 2023" />
              <h1 className="text-gray-scale-400 mb-8 mt-6 font-manrope text-4xl/tight font-bold">
                How to make a Game look more attractive with New VR & AI
                Technology
              </h1>
              <p className="mb-10 text-balance font-inter text-base/normal text-gray-scale-200">
                Google has been investing in AI for many years and bringing its
                benefits to individuals, businesses and communities. Whether its
                publishing state-of-the-art research, building helpful products
                or developing tools and resources that enable others, were
                committed to making AI accessible to everyone.
              </p>
              <Button href="#" title="Ler mais" variant="secondary">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
