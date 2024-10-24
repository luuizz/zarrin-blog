import React from 'react'
import Button from '../Button'

interface TopTitlesProps {
  title: string
  link: string
}

export default function TopTitles({ title, link }: TopTitlesProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-bold font-manrope text-5xl/tight text-gray-scale-400">
        {title}
      </h2>

      <Button href={link} variant="primary">
        View All
      </Button>
    </div>
  )
}
