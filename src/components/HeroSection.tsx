"use client";

import { Reveal } from "./Reveal";
import { useState, useEffect } from "react";
import { Link } from "../../i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

const heroImages = [
  "/brand-1.webp",
  "/brand-2.webp",
  "/brand-3.webp"
];

export function HeroSection() {
  const [currentImg, setCurrentImg] = useState(0);
  const t = useTranslations("Hero");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Crossfade every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] md:min-h-[850px] overflow-hidden bg-[#F8F7F2] flex items-center justify-center md:justify-start pt-[80px] md:pt-0">
      
      {/* Background Image: Full screen on Mobile, Right side curve on Desktop */}
      <div 
        className="absolute inset-0 md:inset-auto md:right-0 md:top-0 h-full w-full md:w-[58%] z-0 md:rounded-tr-none md:rounded-l-[100vw] overflow-hidden"
      >
        {heroImages.map((src, index) => (
          <Image
            key={src}
            alt={`Paisaje cafetero colombiano ${index + 1}`}
            className={`object-cover transition-opacity duration-[1500ms] ${
              index === currentImg ? "opacity-100" : "opacity-0"
            }`}
            src={src}
            fill
            priority={index === 0}
          />
        ))}
        {/* Dark overlay ONLY on mobile to ensure text legibility */}
        <div className="absolute inset-0 bg-black/50 md:hidden z-10" />
      </div>

      {/* Content grid */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-16 pt-8 pb-12 md:py-24">
        <div className="w-full md:w-[45%] pr-0 md:pr-8">
          <Reveal>
            <span className="block font-montserrat text-[48px] sm:text-[56px] md:text-[76px] font-extrabold leading-[1] text-white md:text-[#1a281d] mb-2 tracking-tight drop-shadow-md md:drop-shadow-none">
              COLBREW<span className="text-[24px] sm:text-[32px] md:text-[40px] align-top font-bold">™</span>
            </span>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className="font-montserrat text-[32px] sm:text-[36px] md:text-[50px] font-bold text-white md:text-[#1a281d] leading-[1.1] mb-6 md:mb-8 drop-shadow-md md:drop-shadow-none">
              <span className="sr-only">Café Especial Colombiano. </span>
              {t("title1")}<span className="text-[#d4a860] md:text-[#b4843b] font-medium">{t("title2")}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-inter text-[16px] md:text-[18px] text-gray-100 md:text-[#4a4a4a] max-w-[420px] mb-8 md:mb-10 leading-relaxed font-medium drop-shadow-sm md:drop-shadow-none">
              {t("subtitle")}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/nuestro-origen"
                className="bg-[#b4843b] md:bg-[#1a281d] text-white px-8 py-3.5 rounded-sm font-inter font-semibold text-[15px] hover:bg-[#9a6f30] md:hover:bg-[#2c3d31] transition-colors shadow-lg md:shadow-sm w-full sm:w-auto text-center cursor-pointer"
              >
                {t("cta1")}
              </Link>
              <Link 
                href="/#origenes-section"
                className="bg-transparent text-white md:text-[#1a281d] px-8 py-3.5 rounded-sm font-inter font-semibold text-[15px] border border-white md:border-[#d1cdc2] hover:bg-white/10 md:hover:bg-transparent md:hover:border-[#1a281d] transition-colors w-full sm:w-auto text-center cursor-pointer"
              >
                {t("cta2")}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

    </section>
  );
}
