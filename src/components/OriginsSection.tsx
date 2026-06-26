"use client";

import { Reveal } from "./Reveal";
import { ArrowRight, MapPin, Globe, Sprout, ChevronLeft, ChevronRight, Coffee, Music } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

import Link from "next/link";

const origins = [
  {
    image: "/apia-1.webp",
    location: "Apía, Risaralda",
    badgePosition: "bottom-left",
    title: "Apía, Risaralda",
    description: "Territorio cafetero reconocido por su tradición, sus paisajes andinos y el trabajo de familias que han construido una profunda cultura alrededor del café.",
    link: "/apia",
    notes: [
      { icon: Coffee, label: "Café" },
      { icon: Music, label: "Cultura" },
      { icon: Sprout, label: "Comunidad" }
    ]
  },
  {
    image: "/jardin-1.webp",
    location: "Jardín, Antioquia",
    badgePosition: "top-left",
    title: "Jardín, Antioquia",
    description: "Un origen donde la tradición cafetera, el patrimonio cultural y la riqueza natural hacen parte de la identidad del territorio.",
    link: "/jardin",
    notes: [
      { icon: Coffee, label: "Café" },
      { icon: Music, label: "Cultura" },
      { icon: Sprout, label: "Comunidad" }
    ]
  },
  {
    image: "/ciudad-bolivar.webp",
    location: "Ciudad Bolívar, Antioquia",
    badgePosition: "top-left",
    title: "Ciudad Bolívar, Antioquia",
    description: "Montañas, caficultura y comunidades que han encontrado en el café una oportunidad para preservar su identidad y construir futuro.",
    link: "/ciudad-bolivar",
    notes: [
      { icon: Coffee, label: "Café" },
      { icon: Music, label: "Cultura" },
      { icon: Sprout, label: "Comunidad" }
    ]
  },
  {
    image: "/planadas.webp",
    location: "Planadas, Tolima",
    badgePosition: "bottom-left",
    title: "Planadas, Tolima",
    description: "Un territorio reconocido por su resiliencia y cafés de especialidad, donde la comunidad construye futuro a través del café.",
    link: "/planadas",
    notes: [
      { icon: Coffee, label: "Café" },
      { icon: Music, label: "Cultura" },
      { icon: Sprout, label: "Comunidad" }
    ]
  }
];

export function OriginsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // 10px buffer to account for rounding errors on some displays
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Find the width of one card (using the first child)
      const firstChild = scrollContainerRef.current.firstElementChild as HTMLElement;
      const scrollAmount = firstChild ? firstChild.clientWidth + 32 : 400; // +32 for gap

      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      
      // Update arrows state after smooth scroll finishes
      setTimeout(checkScrollability, 400);
    }
  };

  return (
    <section id="origenes-section" className="w-full bg-[#FDFBF7] py-20 md:py-32 overflow-hidden text-[#1a281d]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
          {/* Left Header */}
          <div className="max-w-[700px]">
            <Reveal>
              <p className="font-inter text-[#b4843b] font-bold text-[14px] tracking-[0.15em] uppercase mb-4">
                ORÍGENES COLBREW™
              </p>
              <div className="w-12 h-[2px] bg-[#b4843b] mb-6"></div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-montserrat text-[40px] md:text-[56px] font-extrabold leading-[1.1] mb-6 text-[#1a281d] tracking-tight">
                Orígenes que inspiran, <br className="hidden md:block" /> cafés que transforman.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-inter text-[16px] md:text-[18px] text-[#4a4a4a] leading-relaxed">
                Descubre los territorios donde nacen las historias que inspiran a COLBREW™. <br className="hidden md:block" /> Cada origen representa una comunidad, una cultura y una visión de futuro construida alrededor del café.
              </p>
            </Reveal>
          </div>

          {/* Right Header */}
          <Reveal delay={0.3}>
            <div className="flex items-start gap-6 max-w-[400px]">
              <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full border border-[#b4843b] flex items-center justify-center text-[#b4843b]">
                <Sprout size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col items-start">
                <p className="font-inter text-[15px] text-[#4a4a4a] leading-relaxed mb-4">
                  Cada compra apoya programas de educación y música para niños y jóvenes en las regiones donde nace nuestro café.
                </p>
                <Link 
                  href="/comunidad" 
                  className="flex items-center gap-2 font-inter font-bold text-[#b4843b] hover:text-[#9a6f30] transition-colors group cursor-pointer"
                >
                  Conoce nuestro impacto
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-20">
          
          {/* Arrows */}
          <div className="absolute -left-6 lg:-left-8 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full bg-white border border-[#EBE7DD] shadow-lg text-[#1a281d] hover:bg-[#F8F7F2] transition-all duration-300 ${!canScrollLeft ? 'opacity-0 translate-x-4 pointer-events-none' : 'opacity-100 translate-x-0 hover:-translate-x-1'}`}
              aria-label="Anterior origen"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute -right-6 lg:-right-8 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full bg-white border border-[#EBE7DD] shadow-lg text-[#1a281d] hover:bg-[#F8F7F2] transition-all duration-300 ${!canScrollRight ? 'opacity-0 -translate-x-4 pointer-events-none' : 'opacity-100 translate-x-0 hover:translate-x-1'}`}
              aria-label="Siguiente origen"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Scrollable Track */}
          <div 
            ref={scrollContainerRef}
            onScroll={checkScrollability}
            className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 pt-4 px-4 -mx-4 [&::-webkit-scrollbar]:hidden"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {origins.map((origin, index) => (
              <div 
                key={origin.title} 
                className="snap-start flex-none w-[85vw] sm:w-[400px] lg:w-[calc(33.333%-1.5rem)]"
              >
                <Reveal delay={0.2 + (index * 0.1)}>
                  <Link href={origin.link} className="bg-[#F8F7F2] rounded-2xl overflow-hidden border border-[#EBE7DD] hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group cursor-pointer">
                    
                    {/* Card Image */}
                    <div className="relative h-[250px] w-full p-4 pb-0">
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image 
                          src={origin.image} 
                          alt={origin.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className={`absolute ${origin.badgePosition === 'top-left' ? 'top-3 left-3' : 'bottom-3 left-3'} bg-[#1a281d]/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex items-center gap-1.5`}>
                          <MapPin size={12} />
                          <span className="font-inter text-[12px] font-medium">Colombia</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-8 flex-grow flex flex-col">
                      <h3 className="font-montserrat text-[26px] font-bold text-[#1a281d] mb-3 tracking-tight group-hover:text-[#b4843b] transition-colors">
                        {origin.title}
                      </h3>
                      <p className="font-inter text-[15px] text-[#4a4a4a] leading-relaxed mb-8 flex-grow">
                        {origin.description}
                      </p>

                      <div className="mb-8">
                        {/* Notas de sabor removed per strategic change */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                          {origin.notes.map((note, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <note.icon size={20} className="text-[#8c6b45]" strokeWidth={1.5} />
                              <span className="font-inter text-[13px] font-medium text-[#1a281d]">{note.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 font-inter font-bold text-[#1a281d] transition-colors mt-auto w-fit border-b border-[#1a281d] pb-1 group-hover:text-[#b4843b] group-hover:border-[#b4843b]">
                        Explorar este origen
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <Reveal delay={0.6}>
          <div className="bg-[#FAF9F6] border border-[#EBE7DD] rounded-full py-5 px-8 md:px-12 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 shadow-sm mx-auto max-w-4xl">
            <div className="flex items-center gap-4 text-[#1a281d]">
              <Globe size={28} className="text-[#b4843b]" strokeWidth={1.5} />
              <p className="font-inter text-[15px] font-medium">
                Llevamos estos orígenes únicos a tu taza en cualquier parte del mundo.
              </p>
            </div>
            
            <div className="hidden md:block w-[1px] h-8 bg-[#EBE7DD]"></div>
            
            <Link 
              href="/nuestro-origen"
              className="flex items-center gap-2 font-inter font-bold text-[#b4843b] hover:text-[#9a6f30] transition-colors group whitespace-nowrap cursor-pointer"
            >
              Conoce nuestro origen
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
