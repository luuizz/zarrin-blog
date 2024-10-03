import React from 'react'
import Image, { type StaticImageData } from 'next/image'
import CaptionPost from '../Caption/CaptionPost'
import Link from 'next/link'

interface CardPostProps {
  categoria: string
  tempo: string
  titulo: string
  alt: string
  image: StaticImageData
  excerpt: string
  link: string
}

export default function CardPost({
  categoria,
  tempo,
  titulo,
  link,
  excerpt,
  image,
  alt,
}: CardPostProps) {
  return (
    <Link className="group" href={link}>
      <div className="mb-10 h-[360px] w-[400px] overflow-hidden rounded-xl">
        <Image
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          alt={alt}
          src={image}
        />
      </div>

      <div>
        <CaptionPost categoria={categoria} tempo={tempo} />
        <h3 className="text-gray-scale-400 mb-2 mt-4 font-manrope text-2xl/8 font-bold transition-colors group-hover:text-brand">
          {titulo}
        </h3>
        <p className="line-clamp-3 w-[376px] font-inter text-base/normal text-gray-scale-200">
          {excerpt}
        </p>
        <span className="mt-4 block font-manrope text-lg/normal font-bold text-brand underline decoration-solid transition-all group-hover:brightness-90">
          Read More....
        </span>
      </div>
    </Link>
  )
}
