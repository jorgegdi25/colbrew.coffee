"use client";

import { TopNavBar } from "@/components/TopNavBar";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";

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
                <div className="font-inter text-base md:text-lg text-[#4a4a4a] leading-relaxed max-w-lg relative z-10 space-y-4">
                  <p>
                    Jardín es uno de los territorios más representativos del suroeste antioqueño. Reconocido por su patrimonio arquitectónico, sus paisajes montañosos y su profunda cultura cafetera, este municipio refleja la riqueza humana y natural que caracteriza a las regiones productoras de café en Colombia.
                  </p>
                  <p>
                    Para COLBREW™, Jardín representa la conexión entre tradición, identidad y comunidad.
                  </p>
                </div>
              </Reveal>
            </div>
            {/* Right: Image — slightly wider to break symmetry */}
            <div className="w-full lg:w-[55%] relative min-h-[400px] lg:min-h-full">
              <Image src="/jardin-1.png" alt="Paisaje cafetero de Jardín, Antioquia" fill className="object-cover" />
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
                Ubicación
              </h2>
              <h3 className="font-montserrat text-3xl md:text-4xl font-bold text-[#b4843b] mb-8">
                En el corazón del Suroeste Antioqueño
              </h3>
              <div className="w-16 h-[2px] bg-[#b4843b] mx-auto mb-10"></div>
              <p className="text-lg md:text-xl leading-relaxed text-[#4a4a4a] mb-6">
                Ubicado al sur del departamento de Antioquia, Jardín forma parte de una de las regiones cafeteras más importantes del país.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[#4a4a4a]">
                Sus montañas, ríos y paisajes agrícolas han permitido el desarrollo de comunidades que durante generaciones han encontrado en el café una forma de vida y una expresión de su identidad territorial.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="mt-12 md:mt-16 w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border-4 border-white bg-white">
                <Image src="/mapa-jardin.png" alt="Mapa de ubicación de Jardín en Antioquia" width={800} height={800} className="w-full h-auto object-cover" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* FULL WIDTH IMAGE BREAK */}
        <section className="w-full h-[40vh] md:h-[50vh] relative">
          <Image src="/jardin-2.png" alt="Cerezas de café en las montañas de Jardín" fill className="object-cover" />
        </section>

        {/* SECCIÓN 2: Café y comunidad — Asymmetric layout */}
        <section className="py-24 md:py-32 bg-[#F8F7F2]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-stretch gap-0 md:gap-16">
              {/* Image takes up more space */}
              <div className="w-full md:w-[55%] order-2 md:order-1">
                <div className="relative w-full h-[400px] md:h-full min-h-[500px] rounded-sm overflow-hidden">
                  <Image src="/jardin-3.png" alt="Caficultora en Jardín" fill className="object-cover" />
                </div>
              </div>
              {/* Text block with left accent border */}
              <div className="w-full md:w-[45%] order-1 md:order-2 flex flex-col justify-center py-8 md:py-16">
                <Reveal>
                  <div className="border-l-[3px] border-[#b4843b] pl-8">
                    <h2 className="font-montserrat text-sm font-bold text-[#b4843b] uppercase tracking-wider mb-2">
                      ¿Por qué Jardín inspira a COLBREW™?
                    </h2>
                    <h3 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d] mb-6">
                      Un territorio que conserva su esencia
                    </h3>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Jardín demuestra que el desarrollo y la tradición pueden avanzar juntos.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Su comunidad ha logrado preservar costumbres, arquitectura, cultura y prácticas cafeteras que hoy hacen parte de la identidad del municipio.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a]">
                      COLBREW™ busca destacar territorios que entienden el valor de sus raíces y que continúan construyendo oportunidades sin perder aquello que los hace únicos.
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
                  <Image src="/jardin-4.png" alt="Tradición cafetera de Jardín" fill className="object-cover" />
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
                      Una tradición que une generaciones
                    </h3>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      El café ha acompañado la historia de Jardín durante décadas.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Detrás de cada finca existen familias que han transmitido conocimientos, experiencias y valores relacionados con la producción cafetera.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a]">
                      Más que una actividad económica, el café se ha convertido en un elemento que fortalece los vínculos entre las personas y mantiene viva la identidad rural del territorio.
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
                      Montañas que dan origen
                    </h3>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Las condiciones naturales de Jardín han permitido el desarrollo de una cultura cafetera profundamente conectada con el paisaje.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Sus montañas, bosques y fuentes de agua forman parte del entorno que hace posible la producción agrícola y el bienestar de las comunidades.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a]">
                      Para COLBREW™, cuidar estos territorios significa preservar el origen de las historias que queremos compartir con el mundo.
                    </p>
                  </div>
                </Reveal>
              </div>
              {/* Image on the right */}
              <div className="w-full md:w-[55%]">
                <div className="relative w-full h-[400px] md:h-full min-h-[500px] rounded-sm overflow-hidden">
                  <Image src="/jardin-5.png" alt="Paisajes montañosos de Jardín" fill className="object-cover" />
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
          style={{ backgroundImage: "url('/jardin-6.png')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
            <Reveal>
              <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Cultura y juventud
              </h2>
              <h3 className="font-montserrat text-xl md:text-2xl text-[#d4a860] mb-8 font-medium">
                Identidad que trasciende generaciones
              </h3>
              <div className="w-12 h-[2px] bg-[#b4843b] mx-auto mb-8"></div>
              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-6">
                Jardín es reconocido por su riqueza cultural, sus tradiciones y el fuerte sentido de pertenencia de su gente.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-6">
                Las expresiones artísticas, las celebraciones locales y las iniciativas comunitarias ayudan a fortalecer la identidad de nuevas generaciones que continúan construyendo el futuro del territorio.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-white/90">
                COLBREW™ cree que el café también puede ser una herramienta para visibilizar y apoyar estas iniciativas.
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
