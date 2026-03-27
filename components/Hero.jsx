'use client';

import { assets } from '@/assets/assets';
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import CategoriesMarquee from './CategoriesMarquee';

const Hero = () => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$';

  return (
    <div className="mx-6">
      <div className="mx-auto my-10 flex max-w-7xl gap-8 max-xl:flex-col">
        {/* Main Hero */}
        <div className="group relative flex flex-1 flex-col overflow-hidden rounded-[2rem] border border-[#eadfd9] bg-gradient-to-br from-[#f7ede8] via-[#fdf8f5] to-[#efe3dc] shadow-sm xl:min-h-[640px]">
          <div className="p-6 sm:p-14">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-[#eadfd9] bg-white/80 pr-4 pl-1 py-1 text-xs font-medium text-[#6d5b55] shadow-sm sm:text-sm">
              <span className="rounded-full bg-[#0D0D0D] px-3 py-1 text-[10px] uppercase tracking-widest text-white">
                New
              </span>
              New Season Arrivals Are Here
              <ChevronRightIcon
                className="transition-all group-hover:ml-1"
                size={16}
              />
            </div>

            {/* Heading */}
            <h2 className="mt-6 max-w-xl font-serif text-3xl leading-[1.15] text-[#3f312c] sm:text-5xl">
              Imperfectly Bold. <br />
              <span className="text-[#5c6d7c]">Unapologetically You</span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#7d6a63] sm:text-base">
              Discover elevated everyday fashion designed to feel effortless,
              refined, and timeless. Curated pieces for the modern wardrobe.
            </p>

            {/* Price */}
            <div className="mt-8 text-[#3f312c]">
              <p className="text-sm font-medium uppercase tracking-widest text-[#9a827b]">
                Starts from
              </p>
              <p className="mt-2 text-4xl font-semibold sm:text-5xl">
                {currency}949
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
              <button className="rounded-full bg-[#0D0D0D] px-8 py-3 text-sm font-medium text-white shadow-md transition hover:bg-[#5c6d7c] hover:shadow-lg">
                Shop Collection
              </button>

              <button className="rounded-full border border-[#d9c9c2] bg-white/70 px-8 py-3 text-sm font-medium text-[#4f403a] transition hover:border-[#b07d72] hover:text-[#b07d72]">
                Explore Trends
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <Image
            className="sm:absolute bottom-0 right-0 translate-x-4 md:translate-x-8 lg:translate-x-16 w-full max-w-[30px] object-contain sm:max-w-[430px] md:right-8 lg:max-w-[470px]"
            src={assets.model_img}
            alt="Fashion model"
          />
        </div>

        {/* Side Cards */}
        <div className="flex w-full flex-col gap-5 text-sm text-[#5c4a44] md:flex-row xl:max-w-sm xl:flex-col">
          {/* Card 1 */}
          <div className="group flex flex-1 items-center justify-between rounded-[2rem] border border-[#eadfd9] bg-[#f5ebe6] p-6 px-8 shadow-sm transition hover:shadow-md">
            <div>
              <p className="max-w-40 font-serif text-3xl font-medium leading-tight text-[#3f312c]">
                Signature styles
              </p>
              <p className="mt-4 flex items-center gap-1 text-[#8b6f68]">
                View more
                <ArrowRightIcon
                  className="transition-all group-hover:ml-2"
                  size={18}
                />
              </p>
            </div>
            <Image className="w-32 sm:w-36" src={assets.hero_model_img} alt="Featured fashion item" />
          </div>

          {/* Card 2 */}
          <div className="group flex flex-1 items-center justify-between rounded-[2rem] border border-[#eadfd9] bg-[#eef1f4] p-6 px-8 shadow-sm transition hover:shadow-md">
            <div>
              <p className="max-w-40 font-serif text-3xl font-medium leading-tight text-[#3f312c]">
                Seasonal edits
              </p>
              <p className="mt-4 flex items-center gap-1 text-[#8b6f68]">
                View more
                <ArrowRightIcon
                  className="transition-all group-hover:ml-2"
                  size={18}
                />
              </p>
            </div>
            <Image className="w-32 sm:w-36" src={assets.pink_model_img} alt="Seasonal fashion item" />
          </div>
        </div>
      </div>

      <CategoriesMarquee />
    </div>
  );
};

export default Hero;