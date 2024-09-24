import React from "react";
import Link from "next/link";
import Image from "next/image";
import CaptionPost from "@/components/Caption/CaptionPost";
import imgPostGrande from "@/assets/thumb-md.png";

export default function FixedPosts() {
  return (
    <Link
      href="/blog/post/123"
      className="group mb-16 mt-20 flex items-center justify-between gap-14"
    >
      <div className="h-[456px] max-w-[712px] flex-1 overflow-hidden rounded-2xl">
        <Image
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={imgPostGrande}
          alt="Post grande"
        />
      </div>

      <div className="max-w-[464px] flex-1">
        <CaptionPost categoria="Development" tempo="16 March 2023" />
        <h3 className="text-gray-scale-400 mb-3 mt-6 font-manrope text-[32px] font-bold leading-tight transition-colors group-hover:text-brand">
          How to make a Game look more attractive with New VR & AI Technology
        </h3>
        <p className="mb-9 font-inter text-base/normal text-gray-scale-200">
          Google has been investing in AI for many years and bringing its
          benefits to individuals, businesses and communities. Whether its
          publishing state-of-the-art research, building helpful products or
          developing tools and resources that enable others, were committed to
          making AI accessible to everyone.
        </p>

        <span className="inline-block rounded-lg border border-brand px-7 py-3 font-manrope text-base font-semibold text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
          Read More
        </span>
      </div>
    </Link>
  );
}
