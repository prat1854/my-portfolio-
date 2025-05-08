'use client';

import Image from "next/image";

export default function BackgroundDecoration() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <Image 
          src="/grid.svg" 
          alt=""
          role="presentation"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-full opacity-[0.02] dark:opacity-[0.03]">
        <Image 
          src="/hero_setup.avif" 
          alt=""
          role="presentation"
          fill
          className="object-contain object-right-bottom"
        />
      </div>
    </div>
  );
} 