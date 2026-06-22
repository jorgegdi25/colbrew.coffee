"use client";

import { TopNavBar } from "@/components/TopNavBar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import { Coffee, Sprout, MapPin, Camera, Star, BookOpen } from "lucide-react";

export default function JardinPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen font-inter text-[#4a4a4a]">
      <TopNavBar />
      
      <main>
        
        {/* HERO — Asymmetric split with oversized typography */}
        <section className="relative w-full overflow-hidden bg-[#F8F7F2]">
          <div className="flex flex-col lg:flex-row min-h-[75vh]">
            {/* Left: Content */}
            <div className="w-full lg:w-[45%] p-8 md:p-16 lg:p-20 xl:p-24 flex flex-col justify-center relative">
              {/* Large decorative letter in background */}
              <span className="absolute -left-4 md:left-4 top-1/2 -translate-y-1/2 font-montserrat text-[220px] md:text-[320px] font-black text-[#1a281d]/[0.03] leading-none select-none pointer-events-none">
                J
              </span>
              
              <Reveal>
                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <div className="w-8 h-[2px] bg-[#b4843b]"></div>
                  <span className="font-montserrat text-[#b4843b] font-bold tracking-[0.2em] uppercase text-xs">
                    Antioquia · Colombia
                  </span>
                </div>
                <h1 className="font-montserrat text-[56px] md:text-[72px] lg:text-[88px] font-black text-[#1a281d] leading-[0.95] mb-8 relative z-10">
                  Jardín
                </h1>
                <p className="font-montserrat text-xl md:text-2xl font-medium text-[#1a281d] leading-snug mb-6 max-w-md relative z-10">
                  Donde la tradición cafetera florece entre montañas.
                </p>
                <p className="font-inter text-base md:text-lg text-[#4a4a4a] leading-relaxed max-w-lg relative z-10">
                  Ubicado en el Suroeste Antioqueño, Jardín es uno de los pueblos patrimoniales más reconocidos de Colombia. Rodeado por montañas, ríos y cafetales, este territorio combina una profunda tradición cafetera con una riqueza cultural y natural que lo convierte en uno de los destinos más emblemáticos del país.
                </p>
              </Reveal>
            </div>
            {/* Right: Image — slightly wider to break symmetry */}
            <div className="w-full lg:w-[55%] relative min-h-[400px] lg:min-h-full">
              <img 
                src="/scenic-view-agricultural-field-against-sky.jpg" 
                alt="Paisaje cafetero de Jardín, Antioquia" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* DATA STRIP — Horizontal stats bar */}
        <section className="bg-[#1a281d] py-10 md:py-12">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
              {[
                { number: "1.750", label: "m.s.n.m.", sub: "Altitud" },
                { number: "1863", label: "", sub: "Año de fundación" },
                { number: "Patrimonio", label: "", sub: "Pueblo patrimonial" },
                { number: "Suroeste", label: "", sub: "Antioqueño" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center px-4 md:px-8">
                  <span className="font-montserrat text-3xl md:text-4xl font-black text-white leading-none">
                    {stat.number}
                  </span>
                  {stat.label && (
                    <span className="text-[#b4843b] font-bold text-lg ml-1">{stat.label}</span>
                  )}
                  <p className="text-white/60 text-sm mt-2 font-inter">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN 1: Un territorio cafetero con identidad propia — with giant background number */}
        <section className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
          {/* Giant decorative year */}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 font-montserrat text-[200px] md:text-[400px] font-black text-[#1a281d]/[0.02] leading-none select-none pointer-events-none translate-x-1/4">
            1863
          </span>
          
          <div className="max-w-3xl mx-auto px-6 md:px-16 text-center relative z-10">
            <Reveal>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d] mb-4">
                Un territorio cafetero
              </h2>
              <h3 className="font-montserrat text-3xl md:text-4xl font-bold text-[#b4843b] mb-8">
                con identidad propia
              </h3>
              <div className="w-16 h-[2px] bg-[#b4843b] mx-auto mb-10"></div>
              <p className="text-lg md:text-xl leading-relaxed text-[#4a4a4a] mb-6">
                Jardín se encuentra a una altitud promedio cercana a los 1.750 metros sobre el nivel del mar. Su clima templado, la fertilidad de sus montañas y la abundancia de agua han creado condiciones ideales para el desarrollo de la cultura cafetera.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[#4a4a4a]">
                Fundado en 1863 y erigido como municipio en 1882, Jardín conserva gran parte de su arquitectura tradicional y de las costumbres que han acompañado a las familias cafeteras durante generaciones.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FULL WIDTH IMAGE BREAK */}
        <section className="w-full h-[40vh] md:h-[50vh] relative">
          <img 
            src="/raw-red-green-coffee-cherries-tree-branch-coffee-plantation-mountains-colombia.jpg" 
            alt="Cerezas de café en las montañas de Jardín" 
            className="w-full h-full object-cover"
          />
        </section>

        {/* SECCIÓN 2: Café y comunidad — Asymmetric layout */}
        <section className="py-24 md:py-32 bg-[#F8F7F2]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-stretch gap-0 md:gap-16">
              {/* Image takes up more space */}
              <div className="w-full md:w-[55%] order-2 md:order-1">
                <div className="w-full h-[400px] md:h-full min-h-[500px] rounded-sm overflow-hidden">
                  <img 
                    src="/adult-woman-picking-coffee-from-plantations.jpg" 
                    alt="Caficultora en Jardín" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Text block with left accent border */}
              <div className="w-full md:w-[45%] order-1 md:order-2 flex flex-col justify-center py-8 md:py-16">
                <Reveal>
                  <div className="border-l-[3px] border-[#b4843b] pl-8">
                    <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d] mb-6">
                      Café y comunidad
                    </h2>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      El café forma parte esencial de la economía y la identidad de Jardín. Las fincas cafeteras, muchas de ellas familiares, han contribuido al desarrollo de la región y a la preservación de conocimientos que se transmiten de generación en generación.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a]">
                      Más allá del cultivo, el café hace parte de la vida cotidiana de la comunidad y de las historias que conectan a productores, visitantes y habitantes de la región.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: Naturaleza y biodiversidad — Opposite direction */}
        <section className="py-24 md:py-32 bg-[#FDFBF7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-stretch gap-0 md:gap-16">
              {/* Text block on the left */}
              <div className="w-full md:w-[45%] flex flex-col justify-center py-8 md:py-16">
                <Reveal>
                  <div className="border-l-[3px] border-[#b4843b] pl-8">
                    <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d] mb-6">
                      Naturaleza y biodiversidad
                    </h2>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Jardín es reconocido por sus paisajes montañosos, su exuberante vegetación y la gran cantidad de ríos y quebradas que recorren el territorio. La región cuenta con diversos pisos térmicos y una biodiversidad excepcional que hace parte de su riqueza natural.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a]">
                      La relación entre montaña, agua y café ha contribuido a consolidar un entorno único para la producción cafetera.
                    </p>
                  </div>
                </Reveal>
              </div>
              {/* Image on the right */}
              <div className="w-full md:w-[55%]">
                <div className="w-full h-[400px] md:h-full min-h-[500px] rounded-sm overflow-hidden">
                  <img 
                    src="/low-angle-view-coffee-farm-hill-against-sky.jpg" 
                    alt="Paisajes montañosos de Jardín" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE — Animated text strip */}
        <section className="bg-[#1a281d] py-5 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="font-montserrat text-sm md:text-base font-bold tracking-[0.3em] uppercase mx-8">
                <span className="text-white/40">Café</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Tradición</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Patrimonio</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Montaña</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Comunidad</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Cultura</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Antioquia</span>
                <span className="text-[#b4843b] mx-6">·</span>
              </span>
            ))}
          </div>
        </section>

        {/* SECCIÓN 4: Cultura que inspira — Parallax banner */}
        <section 
          className="relative py-20 md:py-28 flex items-center justify-center bg-fixed bg-center bg-cover" 
          style={{ backgroundImage: "url('/latin-american-peruvian-man-working-with-coffee-with-jungle-forest-background.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
            <Reveal>
              <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
                Cultura que inspira
              </h2>
              <div className="w-12 h-[2px] bg-[#b4843b] mx-auto mb-8"></div>
              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-6">
                Jardín es también un referente cultural del Suroeste Antioqueño. Sus tradiciones, festivales, expresiones artísticas y el valor de su patrimonio arquitectónico hacen parte de una identidad que se mantiene viva a través de su gente.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-white/70 italic">
                Este vínculo entre cultura, territorio y comunidad conecta naturalmente con la visión de COLBREW™ de dar visibilidad a los orígenes que hacen posible cada café.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SECCIÓN 5: Lo que encontrarás próximamente */}
        <section className="py-24 md:py-32 bg-[#FDFBF7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d] mb-4">
                  Próximamente
                </h2>
                <p className="text-lg text-[#4a4a4a]">Lo que encontrarás en esta sección de Jardín</p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: Coffee, title: "Cafés de Jardín", text: "Cafés seleccionados de esta región." },
                { icon: BookOpen, title: "Historias de productores", text: "Relatos de quienes cultivan el café." },
                { icon: Camera, title: "Fotografías", text: "Imágenes reales de fincas y comunidades." },
                { icon: MapPin, title: "Trazabilidad", text: "Información detallada sobre cada origen." },
                { icon: Sprout, title: "Impacto social y cultural", text: "Proyectos que transforman la región." },
                { icon: Star, title: "Experiencias", text: "Actividades alrededor del café local." },
              ].map((item, idx) => (
                <Reveal key={idx} delay={0.08 * (idx + 1)}>
                  <div className="group p-8 border border-[#EBE7DD] rounded-sm bg-white hover:border-[#b4843b]/30 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <item.icon size={28} className="text-[#b4843b] mb-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <h3 className="font-montserrat text-lg font-bold text-[#1a281d] mb-2">{item.title}</h3>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed">{item.text}</p>
                  </div>
                </Reveal>
              ))}
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
