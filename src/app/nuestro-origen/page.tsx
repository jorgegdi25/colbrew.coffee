import { TopNavBar } from "@/components/TopNavBar";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Coffee, MapPin, Sprout, Music, Users } from "lucide-react";
import { CtaSection } from "@/components/CtaSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestro Origen | La Historia de COLBREW™",
  description: "Conoce la historia detrás de COLBREW, cómo nace nuestro compromiso social y por qué elegimos los mejores cafés de especialidad de Colombia.",
};


export default function NuestroOrigenPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen font-inter text-[#4a4a4a]">
      <TopNavBar />
      
      <main>
        
        {/* SECCIÓN 1: HERO (Restaurado al diseño original) */}
        <section className="relative w-full">
          <div className="absolute inset-0">
             <Image src="/brand-4.webp" alt="Caficultor" fill className="object-cover" />
             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 w-full pt-28 pb-20 md:pt-40 md:pb-32">
            <div className="max-w-2xl">
              <Reveal>
                <h1 className="font-montserrat text-[48px] md:text-[72px] font-bold text-white leading-[1.1] mb-6">
                  Más que una <br /> marca de café.
                </h1>
                <div className="w-16 h-1 bg-[#b4843b] mb-8"></div>
                <p className="font-inter text-[16px] md:text-[20px] text-white/90 leading-relaxed font-medium">
                  COLBREW™ nace con la convicción de que el café colombiano puede convertirse en una herramienta para fortalecer comunidades, impulsar la cultura y generar nuevas oportunidades para las futuras generaciones.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: ¿Qué es COLBREW? */}
        <section className="bg-[#F8F7F2] py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2 order-2 lg:order-1 h-[400px] lg:h-[500px]">
                <Reveal>
                  <Image src="/brand-5.webp" alt="Cultivo de café" fill className="object-cover rounded-sm" />
                </Reveal>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <Reveal delay={0.2}>
                  <h2 className="font-montserrat text-4xl lg:text-5xl font-bold text-[#1a281d] mb-8">
                    ¿Por qué nació COLBREW?
                  </h2>
                  <div className="space-y-6 text-lg leading-relaxed text-[#4a4a4a]">
                    <p>
                      Mientras Colombia produce algunos de los cafés más reconocidos del mundo, muchas comunidades rurales continúan enfrentando desafíos relacionados con oportunidades económicas, acceso a programas culturales y desarrollo para las nuevas generaciones.
                    </p>
                    <p>
                      COLBREW™ surge como una iniciativa para conectar café, territorio, cultura y comunidad a través de una visión de impacto positivo.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: Nuestros Valores */}
        <section className="py-24 bg-[#FDFBF7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 text-center">
            <Reveal>
              <h2 className="font-montserrat text-3xl font-bold text-[#1a281d] mb-16">
                Nuestros valores
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <Reveal delay={0.1}>
                <div className="flex flex-col items-center">
                  <MapPin size={32} className="text-[#b4843b] mb-6" strokeWidth={1.5} />
                  <h3 className="font-montserrat text-xl font-bold text-[#1a281d] mb-3">
                    Transparencia
                  </h3>
                  <p className="text-base leading-relaxed text-[#4a4a4a] max-w-xs">
                    Conocemos cada finca y cada familia detrás de nuestros cafés, asegurando relaciones justas y a largo plazo.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex flex-col items-center">
                  <Music size={32} className="text-[#b4843b] mb-6" strokeWidth={1.5} />
                  <h3 className="font-montserrat text-xl font-bold text-[#1a281d] mb-3">
                    Cultura
                  </h3>
                  <p className="text-base leading-relaxed text-[#4a4a4a] max-w-xs">
                    Creemos en la música y la educación artística como catalizadores de cambio y desarrollo humano.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-col items-center">
                  <Sprout size={32} className="text-[#b4843b] mb-6" strokeWidth={1.5} />
                  <h3 className="font-montserrat text-xl font-bold text-[#1a281d] mb-3">
                    Futuro
                  </h3>
                  <p className="text-base leading-relaxed text-[#4a4a4a] max-w-xs">
                    Invertimos en el talento local para que los jóvenes encuentren oportunidades sostenibles dentro de sus territorios.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECCIÓN NUEVA: Cómo funciona COLBREW */}
        <section className="bg-[#1a281d] py-24 text-white">
          <div className="max-w-[1200px] mx-auto px-6 md:px-16 text-center">
            <Reveal>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-16 text-white">
                Cómo funciona COLBREW™
              </h2>
            </Reveal>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              {[
                { icon: Coffee, text: "Los consumidores descubren cafés de origen." },
                { icon: Users, text: "Los productores comparten sus historias y territorios." },
                { icon: Music, text: "Las comunidades culturales encuentran nuevas oportunidades." },
                { icon: Sprout, text: "Se fortalece el desarrollo local." },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full md:w-auto">
                  <Reveal delay={0.1 * idx}>
                    <div className="flex flex-col items-center max-w-[200px]">
                      <div className="w-16 h-16 rounded-full bg-[#b4843b] flex items-center justify-center text-[#1a281d] mb-6">
                        <step.icon size={28} strokeWidth={1.5} />
                      </div>
                      <p className="font-inter text-center text-[15px] leading-relaxed text-white/90">
                        {step.text}
                      </p>
                    </div>
                  </Reveal>
                  
                  {/* Arrow separator */}
                  {idx < 3 && (
                    <div className="hidden md:flex items-center text-[#b4843b]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  )}
                  {/* Down arrow for mobile */}
                  {idx < 3 && (
                    <div className="md:hidden flex items-center text-[#b4843b] my-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: CTA FINAL */}
        <CtaSection 
          title={
            <>
              Cada taza puede <br className="hidden sm:block" /> generar <span className="text-[#b4843b]">oportunidades</span>
            </>
          }
          description="Detrás de cada origen existen personas, comunidades, proyectos culturales y nuevas generaciones que trabajan para construir un mejor futuro en las regiones cafeteras de Colombia. COLBREW™ busca conectar esas historias con consumidores que valoran el impacto detrás de cada taza."
          primaryButtonText="Conoce nuestros territorios"
          primaryButtonLink="/comunidad"
          secondaryButtonText=""
        />

      </main>
      
      <Footer />
    </div>
  );
}
