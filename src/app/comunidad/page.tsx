"use client";

import { TopNavBar } from "@/components/TopNavBar";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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
        <section className="relative w-full">
          <div className="absolute inset-0">
             <Image src="/brand-6.webp" alt="Mujer recolectora de café" fill className="object-cover" />
             <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div 
            className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 w-full"
            style={{ paddingTop: '180px', paddingBottom: '120px' }}
          >
            <div className="max-w-2xl">
              <Reveal>
                <h1 className="font-montserrat text-[48px] md:text-[72px] font-bold text-white leading-[1.1] mb-6">
                  Cultura, juventud y territorio
                </h1>
                <div className="w-16 h-1 bg-[#b4843b] mb-8"></div>
                <p className="font-inter text-[16px] md:text-[20px] text-white/90 leading-relaxed font-medium">
                  Detrás de cada café existen comunidades, escuelas de música y jóvenes que trabajan por construir oportunidades para el futuro de sus regiones.
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
                ¿Por qué la comunidad es importante?
              </h2>
              <div className="text-lg md:text-xl leading-relaxed text-[#4a4a4a] space-y-4">
                <p>
                  Para COLBREW™, el café es una herramienta para conectar personas, cultura y oportunidades.
                </p>
                <p>
                  Creemos que el desarrollo de los territorios cafeteros no depende únicamente de producir un gran café, sino también de fortalecer a las comunidades que lo hacen posible.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECCIÓN 2: Comunidades que inspiran (CARRUSEL DE A 3) */}
        <section id="territorios-section" className="py-24 bg-[#FDFBF7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <div className="flex justify-between items-end mb-16">
              <Reveal>
                <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d]">
                  Territorios que inspiran
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
              className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 scroll-smooth [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >

              {/* Bloque 1 */}
              <Link href="/apia" className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] group cursor-pointer block">
                <div className="w-full h-[320px] overflow-hidden rounded-sm mb-6">
                  <Image src="/apia-1.webp" alt="Apía" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-[#1a281d] mb-2 flex items-center gap-2 group-hover:text-[#b4843b] transition-colors">
                  📍 Apía, Risaralda
                </h3>
                <p className="text-base text-[#4a4a4a] mb-4">Café, música y tradición se unen para fortalecer nuevas oportunidades para niños y jóvenes de la región.</p>
                <div className="text-[#b4843b] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Conocer más <ArrowRight size={16} />
                </div>
              </Link>

              {/* Bloque 2 */}
              <Link href="/jardin" className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] group cursor-pointer block">
                <div className="w-full h-[320px] overflow-hidden rounded-sm mb-6">
                  <Image src="/jardin-1.webp" alt="Jardín" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-[#1a281d] mb-2 flex items-center gap-2 group-hover:text-[#b4843b] transition-colors">
                  📍 Jardín, Antioquia
                </h3>
                <p className="text-base text-[#4a4a4a] mb-4">Un territorio donde la identidad cultural y el café forman parte de la vida cotidiana de sus comunidades.</p>
                <div className="text-[#b4843b] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Conocer más <ArrowRight size={16} />
                </div>
              </Link>

              {/* Bloque 3 */}
              <Link href="/ciudad-bolivar" className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] group cursor-pointer block">
                <div className="w-full h-[320px] overflow-hidden rounded-sm mb-6">
                  <Image src="/ciudad-bolivar.webp" alt="Ciudad Bolívar" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-[#1a281d] mb-2 flex items-center gap-2 group-hover:text-[#b4843b] transition-colors">
                  📍 Ciudad Bolívar, Antioquia
                </h3>
                <p className="text-base text-[#4a4a4a] mb-4">Una región cafetera donde las nuevas generaciones continúan construyendo el futuro de su territorio.</p>
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
          style={{ backgroundImage: "url('/musica-1.webp')" }}
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

        {/* SECCIÓN NUEVA: Escuelas que transforman vidas */}
        <section className="bg-[#1a281d] py-24 text-white">
          <div className="max-w-[1200px] mx-auto px-6 md:px-16">
            <Reveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6 text-white">
                  Escuelas que transforman vidas
                </h2>
                <div className="w-16 h-1 bg-[#b4843b] mx-auto mb-8"></div>
                <p className="font-inter text-lg text-white/90 leading-relaxed">
                  Las escuelas de música son espacios donde niños y jóvenes desarrollan talento, disciplina y sentido de pertenencia. COLBREW™ busca apoyar iniciativas culturales que generan impacto positivo en las regiones cafeteras.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <Reveal delay={0.1}>
                <div className="bg-[#2c3d31] p-8 rounded-sm border-t-4 border-[#b4843b] h-full">
                  <h3 className="font-montserrat text-2xl font-bold mb-4 text-[#d4a860]">COMARCA</h3>
                  <p className="font-inter text-white/80 leading-relaxed">
                    Formación musical y desarrollo comunitario.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="bg-[#2c3d31] p-8 rounded-sm border-t-4 border-[#b4843b] h-full">
                  <h3 className="font-montserrat text-2xl font-bold mb-4 text-[#d4a860]">ACORDEMUS</h3>
                  <p className="font-inter text-white/80 leading-relaxed">
                    Procesos culturales que fortalecen la identidad local.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="bg-[#2c3d31] p-8 rounded-sm border-t-4 border-white/20 h-full opacity-80">
                  <h3 className="font-montserrat text-2xl font-bold mb-4 text-white">Futuras alianzas</h3>
                  <p className="font-inter text-white/80 leading-relaxed">
                    Nuevas organizaciones que compartan la visión de transformar territorios a través de la cultura.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA FINAL GLOBAL */}
        <CtaSection 
          title={
            <>
              Cada origen impulsa <br className="hidden sm:block" /> una <span className="text-[#b4843b]">comunidad</span>
            </>
          }
          description="Cuando una persona descubre un café colombiano también descubre un territorio, una cultura y una comunidad que trabaja para construir nuevas oportunidades. COLBREW™ busca conectar esas historias con personas que creen en el valor del café como motor de desarrollo."
          primaryButtonText="Conocer nuestros territorios"
          primaryButtonLink="#territorios-section"
          secondaryButtonText="Solicitar información"
        />

      </main>
      <Footer />
    </div>
  );
}
