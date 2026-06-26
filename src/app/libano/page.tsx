import { TopNavBar } from "@/components/TopNavBar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Líbano | COLBREW™ - Tradición Cafetera",
  description: "Conoce nuestro café de Líbano, Tolima. Donde la tradición cafetera ha unido generaciones.",
};

export default function LibanoPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen font-inter text-[#4a4a4a]">
      <TopNavBar />
      
      <main>
        
        {/* HERO — Asymmetric split with oversized typography */}
        <section className="relative w-full overflow-hidden bg-[#F8F7F2]">
          <div className="flex flex-col lg:flex-row min-h-[75vh]">
            {/* Left: Content */}
            <div className="w-full lg:w-[45%] p-8 md:p-16 lg:p-20 xl:p-24 flex flex-col justify-center relative">
              {/* Large decorative number in background */}
              <span className="absolute -left-4 md:left-4 top-1/2 -translate-y-1/2 font-montserrat text-[220px] md:text-[320px] font-black text-[#1a281d]/[0.03] leading-none select-none pointer-events-none">
                L
              </span>
              
              <Reveal>
                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <div className="w-8 h-[2px] bg-[#b4843b]"></div>
                  <span className="font-montserrat text-[#b4843b] font-bold tracking-[0.2em] uppercase text-xs">
                    Tolima · Colombia
                  </span>
                </div>
                <h1 className="font-montserrat text-[56px] md:text-[72px] lg:text-[88px] font-black text-[#1a281d] leading-[0.95] mb-8 relative z-10">
                  Líbano
                </h1>
                <p className="font-montserrat text-xl md:text-2xl font-medium text-[#1a281d] leading-snug mb-6 max-w-md relative z-10">
                  Donde la tradición cafetera ha unido generaciones.
                </p>
                <div className="font-inter text-base md:text-lg text-[#4a4a4a] leading-relaxed max-w-lg relative z-10 space-y-4">
                  <p>
                    Ubicado en el norte del Tolima, Líbano es uno de los municipios con mayor tradición cafetera de Colombia. Durante más de un siglo, el café ha acompañado el desarrollo de sus comunidades, convirtiéndose en parte esencial de su identidad, su economía y su cultura.
                  </p>
                  <p>
                    Para COLBREW™, Líbano representa el legado de miles de familias que han encontrado en el café una forma de preservar sus raíces y construir nuevas oportunidades para el futuro.
                  </p>
                </div>
              </Reveal>
            </div>
            {/* Right: Image — slightly wider to break symmetry */}
            <div className="w-full lg:w-[55%] relative min-h-[400px] lg:min-h-full">
              <div className="absolute inset-0">
                <img src="/libano.webp" alt="Paisaje cafetero de Líbano, Tolima" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 1: Un territorio cafetero — with giant background number */}
        <section className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
          {/* Giant decorative initial */}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 font-montserrat text-[200px] md:text-[400px] font-black text-[#1a281d]/[0.02] leading-none select-none pointer-events-none translate-x-1/4">
            NORTE
          </span>
          
          <div className="max-w-3xl mx-auto px-6 md:px-16 text-center relative z-10">
            <Reveal>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d] mb-4">
                Ubicación
              </h2>
              <h3 className="font-montserrat text-3xl md:text-4xl font-bold text-[#b4843b] mb-8">
                En el norte cafetero del Tolima
              </h3>
              <div className="w-16 h-[2px] bg-[#b4843b] mx-auto mb-10"></div>
              <p className="text-lg md:text-xl leading-relaxed text-[#4a4a4a] mb-6">
                Líbano se encuentra sobre la cordillera Central de los Andes colombianos, en una región reconocida por sus montañas, su clima favorable y sus excelentes condiciones para el cultivo del café.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[#4a4a4a]">
                Su ubicación estratégica y la experiencia acumulada por generaciones de productores han permitido consolidar una sólida tradición cafetera que hoy continúa siendo uno de los principales motores del municipio.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="mt-12 md:mt-16 w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border-4 border-white bg-white">
                <img src="/libano1.webp" alt="Mapa de ubicación de Líbano" className="w-full h-auto object-cover" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* FULL WIDTH IMAGE BREAK */}
        <section className="w-full h-[40vh] md:h-[50vh] relative">
          <div className="absolute inset-0">
             <img src="/libano2.webp" alt="Cultura cafetera en Líbano" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* SECCIÓN 2: Café y comunidad — Asymmetric layout */}
        <section className="py-24 md:py-32 bg-[#F8F7F2]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-stretch gap-0 md:gap-16">
              {/* Image takes up more space */}
              <div className="w-full md:w-[55%] order-2 md:order-1">
                <div className="relative w-full h-[400px] md:h-full min-h-[500px] rounded-sm overflow-hidden">
                  <div className="absolute inset-0">
                    <img src="/libano3.webp" alt="Caficultora en Líbano" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              {/* Text block with left accent border */}
              <div className="w-full md:w-[45%] order-1 md:order-2 flex flex-col justify-center py-8 md:py-16">
                <Reveal>
                  <div className="border-l-[3px] border-[#b4843b] pl-8">
                    <h2 className="font-montserrat text-sm font-bold text-[#b4843b] uppercase tracking-wider mb-2">
                      ¿Por qué Líbano inspira a COLBREW™?
                    </h2>
                    <h3 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d] mb-6">
                      Un legado construido alrededor del café
                    </h3>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Hablar de Líbano es hablar de una comunidad que ha crecido junto al café.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Durante décadas, las familias cafeteras han transmitido conocimientos, valores y experiencias que hoy hacen parte del patrimonio agrícola del municipio.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a]">
                      COLBREW™ reconoce en Líbano un territorio que demuestra cómo la tradición puede mantenerse viva mientras se abren nuevas oportunidades para las futuras generaciones.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2.5: Café que conecta personas (Image Left) */}
        <section className="py-24 md:py-32 bg-[#FDFBF7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-stretch gap-0 md:gap-16">
              {/* Image takes up more space */}
              <div className="w-full md:w-[55%] order-2 md:order-1">
                <div className="relative w-full h-[400px] md:h-full min-h-[500px] rounded-sm overflow-hidden">
                  <div className="absolute inset-0">
                    <img src="/libano4.webp" alt="Trabajo en comunidad en Líbano" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              {/* Text block with left accent border */}
              <div className="w-full md:w-[45%] order-1 md:order-2 flex flex-col justify-center py-8 md:py-16">
                <Reveal>
                  <div className="border-l-[3px] border-[#b4843b] pl-8">
                    <h2 className="font-montserrat text-sm font-bold text-[#b4843b] uppercase tracking-wider mb-2">
                      Café que conecta personas
                    </h2>
                    <h3 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d] mb-6">
                      Una historia compartida por generaciones
                    </h3>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      El café forma parte de la identidad de Líbano.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Cada finca representa el esfuerzo de familias que han dedicado su vida al cultivo responsable y a la búsqueda permanente de calidad.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a]">
                      Detrás de cada cosecha existen historias de trabajo, cooperación y compromiso con una actividad que continúa fortaleciendo el desarrollo del territorio.
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
                    <h2 className="font-montserrat text-sm font-bold text-[#b4843b] uppercase tracking-wider mb-2">
                      Territorio y Sostenibilidad
                    </h2>
                    <h3 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d] mb-6">
                      Un paisaje que protege el origen
                    </h3>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Las montañas, los bosques y las fuentes de agua que rodean Líbano crean un entorno privilegiado para el cultivo del café.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      La conservación de estos recursos naturales es fundamental para garantizar la calidad del café y preservar el equilibrio entre producción, comunidad y medio ambiente.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a]">
                      Para COLBREW™, proteger estos territorios significa proteger también el futuro de quienes los habitan.
                    </p>
                  </div>
                </Reveal>
              </div>
              {/* Image on the right */}
              <div className="w-full md:w-[55%]">
                <div className="relative w-full h-[400px] md:h-full min-h-[500px] rounded-sm overflow-hidden">
                  <div className="absolute inset-0">
                    <img src="/libano5.webp" alt="Naturaleza de Líbano" className="w-full h-full object-cover" />
                  </div>
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
                <span className="text-white/40">Tolima</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Generaciones</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Comunidad</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Tradición</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Líbano</span>
                <span className="text-[#b4843b] mx-6">·</span>
              </span>
            ))}
          </div>
        </section>

        {/* SECCIÓN 4: Cultura que inspira — Parallax banner */}
        <section 
          className="relative py-20 md:py-28 flex items-center justify-center bg-fixed bg-center bg-cover" 
          style={{ backgroundImage: "url('/libano.webp')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
            <Reveal>
              <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Cultura y juventud
              </h2>
              <h3 className="font-montserrat text-xl md:text-2xl text-[#d4a860] mb-8 font-medium">
                Tradición que inspira nuevas generaciones
              </h3>
              <div className="w-12 h-[2px] bg-[#b4843b] mx-auto mb-8"></div>
              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-6">
                La cultura cafetera de Líbano continúa evolucionando gracias al trabajo de nuevas generaciones que encuentran en el territorio oportunidades para emprender, innovar y mantener vivas las tradiciones de sus familias.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-white/90">
                COLBREW™ cree que fortalecer la identidad local también significa crear espacios donde la cultura, la educación y el café puedan seguir construyendo comunidad.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL GLOBAL */}
        <CtaSection />

      </main>
      <Footer />
    </div>
  );
}
