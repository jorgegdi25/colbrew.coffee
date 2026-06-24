"use client";

import { TopNavBar } from "@/components/TopNavBar";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";

export default function ApiaPage() {
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
                A
              </span>
              
              <Reveal>
                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <div className="w-8 h-[2px] bg-[#b4843b]"></div>
                  <span className="font-montserrat text-[#b4843b] font-bold tracking-[0.2em] uppercase text-xs">
                    Risaralda · Colombia
                  </span>
                </div>
                <h1 className="font-montserrat text-[56px] md:text-[72px] lg:text-[88px] font-black text-[#1a281d] leading-[0.95] mb-8 relative z-10">
                  Apía
                </h1>
                <p className="font-montserrat text-xl md:text-2xl font-medium text-[#1a281d] leading-snug mb-6 max-w-md relative z-10">
                  Donde el café impulsa comunidad, cultura y oportunidades.
                </p>
                <div className="font-inter text-base md:text-lg text-[#4a4a4a] leading-relaxed max-w-lg relative z-10 space-y-4">
                  <p>
                    Apía es uno de los territorios que inspiran la visión de COLBREW™. Ubicado en el corazón del Paisaje Cultural Cafetero Colombiano, este municipio reúne tradición cafetera, riqueza natural y una profunda conexión con la cultura y la comunidad.
                  </p>
                  <p>
                    Más que un origen cafetero, Apía representa el potencial que tienen los territorios cuando el café se convierte en una herramienta para construir futuro.
                  </p>
                </div>
              </Reveal>
            </div>
            {/* Right: Image — slightly wider to break symmetry */}
            <div className="w-full lg:w-[55%] relative min-h-[400px] lg:min-h-full">
              <Image src="/paisaje-apia.png" alt="Paisaje cafetero de Apía, Risaralda" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* DATA STRIP — Horizontal stats bar */}
        <section className="bg-[#1a281d] py-10 md:py-12">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
              {[
                { number: "1.630", label: "m.s.n.m.", sub: "Altitud" },
                { number: "1883", label: "", sub: "Año de fundación" },
                { number: "UNESCO", label: "", sub: "Patrimonio Mundial" },
                { number: "Tatamá", label: "", sub: "Parque Nacional" },
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

        {/* SECCIÓN 1: Un territorio cafetero — with giant background number */}
        <section className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
          {/* Giant decorative year */}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 font-montserrat text-[200px] md:text-[400px] font-black text-[#1a281d]/[0.02] leading-none select-none pointer-events-none translate-x-1/4">
            1883
          </span>
          
          <div className="max-w-3xl mx-auto px-6 md:px-16 text-center relative z-10">
            <Reveal>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d] mb-4">
                Ubicación
              </h2>
              <h3 className="font-montserrat text-3xl md:text-4xl font-bold text-[#b4843b] mb-8">
                En el corazón del Paisaje Cultural Cafetero
              </h3>
              <div className="w-16 h-[2px] bg-[#b4843b] mx-auto mb-10"></div>
              <p className="text-lg md:text-xl leading-relaxed text-[#4a4a4a] mb-6">
                Apía se encuentra en el occidente del departamento de Risaralda, dentro del Paisaje Cultural Cafetero declarado Patrimonio Mundial por la UNESCO.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[#4a4a4a]">
                Rodeado de montañas andinas y cercano al Parque Nacional Natural Tatamá, este territorio ha construido gran parte de su identidad alrededor del café y del trabajo de sus comunidades rurales.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="mt-12 md:mt-16 w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border-4 border-white bg-white">
                <Image src="/mapa-apia.png" alt="Mapa de ubicación de Apía en Risaralda" width={800} height={800} className="w-full h-auto object-cover" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* FULL WIDTH IMAGE BREAK */}
        <section className="w-full h-[40vh] md:h-[50vh] relative">
          <Image src="/apia-1.png" alt="Cerezas de café madurando en Apía" fill className="object-cover" />
        </section>

        {/* SECCIÓN 2: Café y comunidad — Asymmetric layout */}
        <section className="py-24 md:py-32 bg-[#F8F7F2]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-stretch gap-0 md:gap-16">
              {/* Image takes up more space */}
              <div className="w-full md:w-[55%] order-2 md:order-1">
                <div className="relative w-full h-[400px] md:h-full min-h-[500px] rounded-sm overflow-hidden">
                  <Image src="/apia-2.png" alt="Caficultora en Apía" fill className="object-cover" />
                </div>
              </div>
              {/* Text block with left accent border */}
              <div className="w-full md:w-[45%] order-1 md:order-2 flex flex-col justify-center py-8 md:py-16">
                <Reveal>
                  <div className="border-l-[3px] border-[#b4843b] pl-8">
                    <h2 className="font-montserrat text-sm font-bold text-[#b4843b] uppercase tracking-wider mb-2">
                      ¿Por qué Apía inspira a COLBREW™?
                    </h2>
                    <h3 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d] mb-6">
                      Un territorio que conecta tradición y futuro
                    </h3>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      COLBREW™ nace con la convicción de que el café puede generar algo más que desarrollo económico.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Apía representa esa visión porque aquí conviven productores, familias, jóvenes, iniciativas culturales y una fuerte identidad territorial construida alrededor del café.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a]">
                      Es el tipo de comunidad que demuestra cómo el origen de una taza también puede convertirse en una oportunidad para fortalecer el tejido social y cultural de una región.
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
                  <Image src="/apia-3.png" alt="Expresiones culturales de Apía" fill className="object-cover" />
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
                      Música, cultura y tejido social
                    </h3>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      En Apía, el café no solo se cultiva; también se comparte como parte del tejido social y cultural del municipio.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      A través de iniciativas como la música, las familias y los jóvenes de la región encuentran en la caficultura un punto de unión, un espacio para el aprendizaje y un motor para la construcción de identidad.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a]">
                      COLBREW™ se asocia con el territorio de Apía para que cada taza apoye estas expresiones culturales, ayudando a crear un futuro donde el café sea sinónimo de oportunidades y comunidad.
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
                      Naturaleza que da origen
                    </h3>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Las montañas, bosques y fuentes hídricas que rodean Apía forman parte del ecosistema que hace posible la producción cafetera.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      La cercanía con el Parque Nacional Natural Tatamá convierte a este territorio en una de las regiones con mayor riqueza natural del país.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a]">
                      Para COLBREW™, proteger estos entornos es también proteger las comunidades que dependen de ellos.
                    </p>
                  </div>
                </Reveal>
              </div>
              {/* Image on the right */}
              <div className="w-full md:w-[55%]">
                <div className="relative w-full h-[400px] md:h-full min-h-[500px] rounded-sm overflow-hidden">
                  <Image src="/apia-4.png" alt="Naturaleza de Apía y el Cerro Tatamá" fill className="object-cover" />
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
                <span className="text-white/40">Cultura</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Comunidad</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Montaña</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Biodiversidad</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Tradición</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Risaralda</span>
                <span className="text-[#b4843b] mx-6">·</span>
              </span>
            ))}
          </div>
        </section>

        {/* SECCIÓN 4: Cultura que inspira — Parallax banner */}
        <section 
          className="relative py-20 md:py-28 flex items-center justify-center bg-fixed bg-center bg-cover" 
          style={{ backgroundImage: "url('/apia-5.png')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
            <Reveal>
              <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Cultura y juventud
              </h2>
              <h3 className="font-montserrat text-xl md:text-2xl text-[#d4a860] mb-8 font-medium">
                Café, música e identidad
              </h3>
              <div className="w-12 h-[2px] bg-[#b4843b] mx-auto mb-8"></div>
              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-6">
                Apía es reconocido por su vida cultural y por las iniciativas que promueven el arte, la música y la participación de niños y jóvenes.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-6">
                Estas expresiones fortalecen el sentido de pertenencia y ayudan a construir oportunidades que trascienden la actividad agrícola.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-white/90">
                Por eso COLBREW™ busca destacar territorios donde el café también sirve como punto de encuentro para la cultura y el desarrollo comunitario.
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
