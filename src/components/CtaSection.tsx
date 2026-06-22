"use client";

import { Reveal } from "./Reveal";
import { Sprout, ArrowRight, Mail, Globe } from "lucide-react";

export function CtaSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-white overflow-hidden px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row bg-[#FDFBF7] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-[#EBE7DD] shadow-xl">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 p-10 sm:p-14 md:p-16 xl:p-24 flex flex-col justify-center relative">
            <Reveal>
              <div className="w-16 h-16 rounded-full border border-[#b4843b] flex items-center justify-center text-[#b4843b] mb-10">
                <Sprout size={32} strokeWidth={1.5} />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-montserrat text-[42px] md:text-[52px] xl:text-[64px] font-extrabold leading-[1.1] mb-8 text-[#1a281d] tracking-tight">
                Cada café <br /> cuenta una <span className="text-[#b4843b]">historia</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-inter text-[16px] md:text-[18px] text-[#4a4a4a] leading-relaxed mb-12 max-w-[480px]">
                Detrás de cada origen hay familias cafeteras, comunidades y proyectos culturales que transforman vidas. Explora nuestros cafés de origen colombiano y sé parte de este impacto positivo.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1a281d] text-white px-8 py-4 rounded-xl font-inter font-bold hover:bg-[#2c3f2e] transition-colors shadow-md group">
                  <Sprout size={18} />
                  Explorar nuestros cafés
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-[#b4843b] text-[#1a281d] px-8 py-4 rounded-xl font-inter font-bold hover:bg-[#b4843b]/10 transition-colors group">
                  <Mail size={18} className="text-[#b4843b]" />
                  Solicitar información
                  <ArrowRight size={18} className="text-[#b4843b] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex items-start gap-4 pt-8 border-t border-[#EBE7DD]">
                <Globe size={24} className="text-[#b4843b] flex-shrink-0 mt-1" strokeWidth={1.5} />
                <p className="font-inter text-[14px] text-[#4a4a4a] leading-relaxed max-w-[400px]">
                  Cafés de origen colombiano, con calidad, trazabilidad e impacto social.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Image */}
          <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-auto relative min-h-[400px]">
            <img 
              src="/latin-american-peruvian-man-working-with-coffee-with-jungle-forest-background.jpg" 
              alt="Caficultor en las montañas" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
