import React from "react";

interface CaptionPostProps {
  categoria: string;
  tempo: string;
}

export default function CaptionPost({ categoria, tempo }: CaptionPostProps) {
  return (
    <div className="flex gap-2">
      <strong className="text-gray-scale-400 font-inter text-xs/normal uppercase">
        {categoria}
      </strong>
      <span className="font-manrope text-xs/normal font-medium text-gray-scale-100">
        {tempo}
      </span>
    </div>
  );
}
