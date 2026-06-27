"use client";

import { Reveal } from "./Reveal";
import { Sprout, Mail, ArrowRight } from "lucide-react";
import { Link } from "../i18n/routing";
import { useTranslations } from "next-intl";

interface CtaSectionProps {
  title?: React.ReactNode;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
}

export function CtaSection({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink = "/historias"
}: CtaSectionProps) {
  const t = useTranslations("Cta");
  
  const displayTitle = title || (
    <>
      {t("title1")} <br className="hidden sm:block" /> {t("title2")} <span className="text-[#b4843b]">{t("title3")}</span>
    </>
  );
  
  const displayDesc = description || t("desc");
  const displayPrimary = primaryButtonText || t("primary");
  const displaySecondary = secondaryButtonText || t("secondary");
  return (
    <section className="relative py-32 bg-[#1a281d] flex items-center justify-center overflow-hidden">
      {/* Fondo fotográfico con opacidad súper baja */}
      <div className="absolute inset-0">
        <img 
          src="/raw-red-green-coffee-cherries-tree-branch-coffee-plantation-mountains-colombia.webp" 
          alt="Cerezas de café en la rama" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full border border-[#b4843b]/50 bg-[#b4843b]/10 flex items-center justify-center text-[#b4843b]">
              <Sprout size={32} strokeWidth={1.5} />
            </div>
          </div>
        </Reveal>
 
        <Reveal delay={0.1}>
          <h2 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            {displayTitle}
          </h2>
        </Reveal>
 
        <Reveal delay={0.2}>
          <p className="font-inter text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {displayDesc}
          </p>
        </Reveal>
 
        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href={primaryButtonLink}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b4843b] text-white px-8 py-4 rounded-sm font-inter font-bold hover:bg-white hover:text-[#1a281d] transition-colors group cursor-pointer text-center"
            >
              <span className="font-inter font-semibold text-[15px]">{displayPrimary}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            {secondaryButtonText && (
              <Link 
                href="/contacto"
                className="group flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-8 py-4 rounded-sm hover:bg-white/10 hover:border-white transition-all w-full sm:w-auto"
              >
                <Mail size={18} />
                <span className="font-inter font-semibold text-[15px]">{displaySecondary}</span>
                <ArrowRight size={18} className="text-[#b4843b] group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
