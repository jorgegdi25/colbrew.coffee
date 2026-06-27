
import { TopNavBar } from "@/components/TopNavBar";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ciudad Bolívar | COLBREW™ - Corazón Cafetero",
  description: "Explora Ciudad Bolívar, en el Suroeste Antioqueño. Familias productoras, montañas cafeteras y un compromiso firme con el progreso de las nuevas generaciones.",
};


export default function CiudadBolivarPage() {
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
              <span className="absolute -left-4 md:left-4 top-1/2 -translate-y-1/2 font-montserrat text-[200px] md:text-[280px] font-black text-[#1a281d]/[0.03] leading-none select-none pointer-events-none">
                CB
              </span>
              
              <Reveal>
                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <div className="w-8 h-[2px] bg-[#b4843b]"></div>
                  <span className="font-montserrat text-[#b4843b] font-bold tracking-[0.2em] uppercase text-xs">
                    Antioquia · Colombia
                  </span>
                </div>
                <h1 className="font-montserrat text-[44px] md:text-[60px] lg:text-[72px] font-black text-[#1a281d] leading-[0.95] mb-8 relative z-10">
                  Ciudad<br />Bolívar
                </h1>
                <p className="font-montserrat text-xl md:text-2xl font-medium text-[#1a281d] leading-snug mb-6 max-w-md relative z-10">
                  Donde el café une generaciones y construye territorio.
                </p>
                <div className="font-inter text-base md:text-lg text-[#4a4a4a] leading-relaxed max-w-lg relative z-10 space-y-4">
                  <p>
                    Ubicado en el corazón del Suroeste Antioqueño, Ciudad Bolívar es una comunidad profundamente ligada a la tradición cafetera colombiana. Sus montañas, sus familias productoras y su identidad rural han convertido al café en una parte esencial de la vida del municipio.
                  </p>
                  <p>
                    Para COLBREW™, Ciudad Bolívar representa el valor del trabajo colectivo, el arraigo territorial y el compromiso de las comunidades que han construido su futuro alrededor del café.
                  </p>
                </div>
              </Reveal>
            </div>
            {/* Right: Image */}
            <div className="w-full lg:w-[55%] relative min-h-[400px] lg:min-h-full">
              <Image src="/ciudad-bolivar.webp" alt="Paisaje cafetero de Ciudad Bolívar, Antioquia" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* DATA STRIP — Horizontal stats bar */}
        <section className="bg-[#1a281d] py-10 md:py-12">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
              {[
                { number: "1.200", label: "m.s.n.m.", sub: "Altitud" },
                { number: "Suroeste", label: "", sub: "Antioqueño" },
                { number: "Arriero", label: "", sub: "Tradición arriera" },
                { number: "Café", label: "", sub: "Vocación cafetera" },
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

        {/* SECCIÓN 1: Un territorio cafetero con identidad propia */}
        <section className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
          <span className="absolute right-0 top-1/2 -translate-y-1/2 font-montserrat text-[200px] md:text-[400px] font-black text-[#1a281d]/[0.02] leading-none select-none pointer-events-none translate-x-1/4">
            1200
          </span>
          
          <div className="max-w-3xl mx-auto px-6 md:px-16 text-center relative z-10">
            <Reveal>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d] mb-4">
                Ubicación
              </h2>
              <h3 className="font-montserrat text-3xl md:text-4xl font-bold text-[#b4843b] mb-8">
                En una de las regiones cafeteras más importantes de Antioquia
              </h3>
              <div className="w-16 h-[2px] bg-[#b4843b] mx-auto mb-10"></div>
              <p className="text-lg md:text-xl leading-relaxed text-[#4a4a4a] mb-6">
                Ciudad Bolívar se encuentra en el Suroeste Antioqueño, una región reconocida por su tradición agrícola y por la calidad de sus cafés de montaña.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[#4a4a4a]">
                La ubicación privilegiada del municipio, junto con sus condiciones naturales y la experiencia de sus productores, ha permitido consolidar una fuerte cultura cafetera que continúa siendo motor de desarrollo para muchas familias.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="mt-12 md:mt-16 w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border-4 border-white bg-white">
                <Image src="/mapa-ciudad-bolivar.webp" alt="Mapa de ubicación de Ciudad Bolívar en Antioquia" width={800} height={800} className="w-full h-auto object-cover" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* FULL WIDTH IMAGE BREAK */}
        <section className="w-full h-[40vh] md:h-[50vh] relative">
          <Image src="/ciudad-bolivar-2.webp" alt="Cerezas de café en Ciudad Bolívar" fill className="object-cover" />
        </section>

        {/* SECCIÓN 2: Café y comunidad */}
        <section className="py-24 md:py-32 bg-[#F8F7F2]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-stretch gap-0 md:gap-16">
              <div className="w-full md:w-[55%] order-2 md:order-1">
                <div className="relative w-full h-[400px] md:h-full min-h-[500px] rounded-sm overflow-hidden">
                  <Image src="/ciudad-bolivar-3.webp" alt="Caficultora en Ciudad Bolívar" fill className="object-cover" />
                </div>
              </div>
              <div className="w-full md:w-[45%] order-1 md:order-2 flex flex-col justify-center py-8 md:py-16">
                <Reveal>
                  <div className="border-l-[3px] border-[#b4843b] pl-8">
                    <h2 className="font-montserrat text-sm font-bold text-[#b4843b] uppercase tracking-wider mb-2">
                      ¿Por qué Ciudad Bolívar inspira a COLBREW™?
                    </h2>
                    <h3 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d] mb-6">
                      Una comunidad construida alrededor del café
                    </h3>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Ciudad Bolívar refleja la relación que existe entre el café y el desarrollo de los territorios rurales.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Aquí el café no solamente genera actividad económica. También forma parte de las historias familiares, de las tradiciones locales y de la identidad que comparten quienes han crecido en esta región.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a]">
                      COLBREW™ busca visibilizar comunidades que demuestran cómo el café puede convertirse en un puente entre tradición, oportunidades y futuro.
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
                  <Image src="/ciudad-bolivar-4.webp" alt="Tradición cafetera de Ciudad Bolívar" fill className="object-cover" />
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
                      Familias que mantienen viva una tradición
                    </h3>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Generaciones de productores han dedicado su trabajo al cultivo del café en las montañas de Ciudad Bolívar.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Detrás de cada cosecha existen conocimientos, experiencias y valores transmitidos de padres a hijos, fortaleciendo el vínculo entre las personas y el territorio que habitan.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a]">
                      Estas historias son parte fundamental de lo que COLBREW™ desea compartir con consumidores que valoran el origen de cada taza.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: Naturaleza y biodiversidad */}
        <section className="py-24 md:py-32 bg-[#FDFBF7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-stretch gap-0 md:gap-16">
              <div className="w-full md:w-[45%] flex flex-col justify-center py-8 md:py-16">
                <Reveal>
                  <div className="border-l-[3px] border-[#b4843b] pl-8">
                    <h2 className="font-montserrat text-sm font-bold text-[#b4843b] uppercase tracking-wider mb-2">
                      Territorio y Sostenibilidad
                    </h2>
                    <h3 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d] mb-6">
                      Montañas que hacen posible el café
                    </h3>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Los paisajes montañosos del Suroeste Antioqueño forman parte del entorno natural que ha permitido el desarrollo de la actividad cafetera en Ciudad Bolívar.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      La relación entre tierra, agua, biodiversidad y comunidad es un elemento fundamental para comprender la importancia de proteger estos territorios para las futuras generaciones.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a]">
                      Para COLBREW™, la sostenibilidad comienza reconociendo el valor de los lugares donde nace el café.
                    </p>
                  </div>
                </Reveal>
              </div>
              <div className="w-full md:w-[55%]">
                <div className="relative w-full h-[400px] md:h-full min-h-[500px] rounded-sm overflow-hidden">
                  <Image src="/ciudad-bolivar-5.webp" alt="Montañas de Ciudad Bolívar" fill className="object-cover" />
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
                <span className="text-white/40">Arraigo</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Tradición</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Montaña</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Comunidad</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Arriero</span>
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
          style={{ backgroundImage: "url('/ciudad-bolivar-2.webp')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
            <Reveal>
              <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Cultura y juventud
              </h2>
              <h3 className="font-montserrat text-xl md:text-2xl text-[#d4a860] mb-8 font-medium">
                Tradición que mira hacia el futuro
              </h3>
              <div className="w-12 h-[2px] bg-[#b4843b] mx-auto mb-8"></div>
              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-6">
                Las nuevas generaciones tienen un papel fundamental en la continuidad de la cultura cafetera.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-6">
                Ciudad Bolívar es un ejemplo de cómo la identidad local puede fortalecerse a través de iniciativas comunitarias, espacios culturales y proyectos que generan nuevas oportunidades para niños y jóvenes.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-white/90">
                COLBREW™ cree que el café puede convertirse en una herramienta para impulsar estas oportunidades y fortalecer el arraigo de las comunidades a su territorio.
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
