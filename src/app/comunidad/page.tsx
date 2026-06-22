"use client";

import { TopNavBar } from "@/components/TopNavBar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import { ArrowRight, Music, Coffee, Flame, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

export default function ComunidadPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-inter text-[#4a4a4a]">
      <TopNavBar />
      
      <main>
        
        {/* HERO */}
        <section className="relative w-full h-[380px] md:h-[450px] flex items-center">
          <div className="absolute inset-0">
             <img 
               src="/adult-woman-picking-coffee-from-plantations.jpg" 
               alt="Mujer recolectora de café" 
               className="w-full h-full object-cover" 
             />
             <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 w-full">
            <div className="max-w-2xl">
              <Reveal>
                <h1 className="font-montserrat text-[48px] md:text-[72px] font-bold text-white leading-[1.1] mb-6">
                  Comunidad
                </h1>
                <div className="w-16 h-1 bg-[#b4843b] mb-8"></div>
                <p className="font-inter text-[16px] md:text-[20px] text-white/90 leading-relaxed font-medium">
                  Detrás de cada origen hay personas, familias y comunidades que hacen posible el café colombiano.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECCIÓN 1: Más que una bebida */}
        <section className="py-24 bg-[#F8F7F2]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <Reveal>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d] mb-8">
                Más que una bebida
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-[#4a4a4a]">
                El café colombiano es el resultado del trabajo de miles de familias, generaciones de conocimiento y comunidades que han construido su identidad alrededor de este cultivo.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SECCIÓN 2: Comunidades que inspiran (CARRUSEL DE A 3) */}
        <section className="py-24 bg-[#FDFBF7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <div className="flex justify-between items-end mb-16">
              <Reveal>
                <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d]">
                  Comunidades que inspiran
                </h2>
              </Reveal>
              <div className="hidden md:flex gap-4">
                <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-[#EBE7DD] flex items-center justify-center text-[#1a281d] hover:border-[#b4843b] hover:text-[#b4843b] transition-colors shadow-sm">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={scrollRight} className="w-12 h-12 rounded-full border border-[#EBE7DD] flex items-center justify-center text-[#1a281d] hover:border-[#b4843b] hover:text-[#b4843b] transition-colors shadow-sm">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
            
            <div 
              ref={carouselRef}
              className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Para esconder el scrollbar en webkit via css, usaremos inline styles basicos o clases si existieran. Aquí con hide-scrollbar. */}
              <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />

              {/* Bloque 1 */}
              <Link href="/apia" className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] group cursor-pointer block">
                <div className="w-full h-[320px] overflow-hidden rounded-sm mb-6">
                  <img src="/low-angle-view-coffee-farm-hill-against-sky.jpg" alt="Apía" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-[#1a281d] mb-2 flex items-center gap-2 group-hover:text-[#b4843b] transition-colors">
                  📍 Apía, Risaralda
                </h3>
                <p className="text-base text-[#4a4a4a] mb-4">El corazón vibrante de Risaralda, donde la música y el café se encuentran.</p>
                <div className="text-[#b4843b] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Conocer más <ArrowRight size={16} />
                </div>
              </Link>

              {/* Bloque 2 */}
              <Link href="/jardin" className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] group cursor-pointer block">
                <div className="w-full h-[320px] overflow-hidden rounded-sm mb-6">
                  <img src="/scenic-view-agricultural-field-against-sky.jpg" alt="Jardín" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-[#1a281d] mb-2 flex items-center gap-2 group-hover:text-[#b4843b] transition-colors">
                  📍 Jardín, Antioquia
                </h3>
                <p className="text-base text-[#4a4a4a] mb-4">Arquitectura colonial y tierras fértiles impulsadas por mujeres cafeteras.</p>
                <div className="text-[#b4843b] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Conocer más <ArrowRight size={16} />
                </div>
              </Link>

              {/* Bloque 3 */}
              <Link href="/ciudad-bolivar" className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] group cursor-pointer block">
                <div className="w-full h-[320px] overflow-hidden rounded-sm mb-6">
                  <img src="/latin-american-peruvian-man-working-with-coffee-with-jungle-forest-background.jpg" alt="Ciudad Bolívar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-[#1a281d] mb-2 flex items-center gap-2 group-hover:text-[#b4843b] transition-colors">
                  📍 Ciudad Bolívar, Antioquia
                </h3>
                <p className="text-base text-[#4a4a4a] mb-4">La capital cafetera de Antioquia, hogar de caficultores de pura cepa.</p>
                <div className="text-[#b4843b] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Conocer más <ArrowRight size={16} />
                </div>
              </Link>

              {/* Bloque 4 */}
              <Link href="/comunidad" className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] group cursor-pointer block">
                <div className="w-full h-[320px] overflow-hidden rounded-sm mb-6">
                  <img src="/raw-red-green-coffee-cherries-tree-branch-coffee-plantation-mountains-colombia.jpg" alt="Santuario" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-[#1a281d] mb-2 flex items-center gap-2 group-hover:text-[#b4843b] transition-colors">
                  📍 Santuario, Risaralda
                </h3>
                <p className="text-base text-[#4a4a4a] mb-4">Montañas nubladas y familias dedicadas a conservar la herencia cafetera.</p>
                <div className="text-[#b4843b] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Conocer más <ArrowRight size={16} />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: Cita / Manifiesto (Reemplaza a Historias) */}
        <section 
          className="relative py-20 md:py-24 flex items-center justify-center bg-fixed bg-center bg-cover" 
          style={{ backgroundImage: "url('/latin-american-peruvian-man-working-with-coffee-with-jungle-forest-background.jpg')" }}
        >
          {/* Overlay oscuro pero transparente para que se aprecie la imagen */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
            <Reveal>
              <span className="text-[#b4843b] text-5xl md:text-6xl font-serif leading-none block mb-2 opacity-90">"</span>
              <h2 className="font-montserrat text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-relaxed mb-6">
                El café no es solo una bebida, es el lenguaje con el que nuestras montañas cuentan su historia.
              </h2>
              <div className="w-12 h-[2px] bg-[#b4843b] mx-auto mb-6"></div>
              <p className="font-inter text-white/90 text-sm md:text-base tracking-[0.15em] uppercase font-bold">
                Manifiesto COLBREW™
              </p>
            </Reveal>
          </div>
        </section>

        {/* SECCIÓN 4: Cultura que conecta */}
        <section className="py-24 bg-[#FDFBF7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 text-center">
            <Reveal>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d] mb-6">
                Cultura que conecta
              </h2>
              <div className="w-16 h-[3px] bg-[#b4843b] mx-auto mb-16"></div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <Reveal delay={0.1}>
                <div className="flex flex-col items-center">
                  <Music size={40} className="text-[#b4843b] mb-6" strokeWidth={1.5} />
                  <h3 className="font-montserrat text-xl font-bold text-[#1a281d] mb-3">Música</h3>
                  <p className="text-[#4a4a4a] leading-relaxed max-w-xs">Bandas marciales, chirimías y sonidos que alegran el campo colombiano tras cada cosecha.</p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex flex-col items-center">
                  <Coffee size={40} className="text-[#b4843b] mb-6" strokeWidth={1.5} />
                  <h3 className="font-montserrat text-xl font-bold text-[#1a281d] mb-3">Café</h3>
                  <p className="text-[#4a4a4a] leading-relaxed max-w-xs">El hilo conductor que une a las familias y sostiene la economía de regiones enteras.</p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-col items-center">
                  <Flame size={40} className="text-[#b4843b] mb-6" strokeWidth={1.5} />
                  <h3 className="font-montserrat text-xl font-bold text-[#1a281d] mb-3">Tradición</h3>
                  <p className="text-[#4a4a4a] leading-relaxed max-w-xs">Conocimientos ancestrales pasados de generación en generación que protegen la identidad local.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA FINAL GLOBAL */}
        <CtaSection />

      </main>
      <Footer />
    </div>
  );
}
