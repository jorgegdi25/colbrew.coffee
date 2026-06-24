"use client";

import { Reveal } from "./Reveal";
import { Sprout, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CtaSectionProps {
  title?: React.ReactNode;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
}

export function CtaSection({
  title = (
    <>
      Cada taza puede <br className="hidden sm:block" /> generar <span className="text-[#b4843b]">oportunidades</span>
    </>
  ),
  description = "Detrás de cada origen existen comunidades, jóvenes, iniciativas culturales y familias cafeteras que construyen el futuro de sus territorios. COLBREW™ busca conectar esas historias con personas que creen en el poder transformador del café colombiano.",
  primaryButtonText = "Explorar Orígenes",
  secondaryButtonText = "Solicitar Información",
  primaryButtonLink = "/historias"
}: CtaSectionProps) {
  return (
    <section className="relative py-32 bg-[#1a281d] flex items-center justify-center overflow-hidden">
      {/* Fondo fotográfico con opacidad súper baja */}
      <div className="absolute inset-0">
        <img 
          src="/raw-red-green-coffee-cherries-tree-branch-coffee-plantation-mountains-colombia.jpg" 
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
            {title}
          </h2>
        </Reveal>
 
        <Reveal delay={0.2}>
          <p className="font-inter text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </Reveal>
 
        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href={primaryButtonLink}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b4843b] text-white px-8 py-4 rounded-sm font-inter font-bold hover:bg-white hover:text-[#1a281d] transition-colors group cursor-pointer text-center"
            >
              <Sprout size={18} />
              {primaryButtonText}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            {secondaryButtonText && (
              <Link 
                href="#contacto-footer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-8 py-4 rounded-sm font-inter font-bold hover:bg-white/10 transition-colors group cursor-pointer text-center"
              >
                <Mail size={18} className="text-[#b4843b]" />
                {secondaryButtonText}
                <ArrowRight size={18} className="text-[#b4843b] group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
