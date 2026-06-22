import { TopNavBar } from "@/components/TopNavBar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Coffee, MapPin, Sprout } from "lucide-react";
import { CtaSection } from "@/components/CtaSection";

export default function NuestroOrigenPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen font-inter text-[#4a4a4a]">
      <TopNavBar />
      
      <main>
        
        {/* SECCIÓN 1: HERO (Restaurado al diseño original) */}
        <section className="relative w-full h-[380px] md:h-[450px] flex items-center">
          <div className="absolute inset-0">
             <img 
               src="/latin-american-peruvian-man-working-with-coffee-with-jungle-forest-background.jpg" 
               alt="Caficultor" 
               className="w-full h-full object-cover" 
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 w-full">
            <div className="max-w-2xl">
              <Reveal>
                <h1 className="font-montserrat text-[48px] md:text-[72px] font-bold text-white leading-[1.1] mb-6">
                  Nuestro <br /> Origen
                </h1>
                <div className="w-16 h-1 bg-[#b4843b] mb-8"></div>
                <p className="font-inter text-[16px] md:text-[20px] text-white/90 leading-relaxed font-medium">
                  COLBREW conecta comunidades cafeteras colombianas con consumidores que valoran la calidad, la trazabilidad y el impacto detrás de cada taza.
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
                  <img 
                    src="/low-angle-view-coffee-farm-hill-against-sky.jpg" 
                    alt="Cultivo de café" 
                    className="w-full h-full object-cover rounded-sm"
                  />
                </Reveal>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <Reveal delay={0.2}>
                  <h2 className="font-montserrat text-4xl lg:text-5xl font-bold text-[#1a281d] mb-8">
                    ¿Qué es COLBREW?
                  </h2>
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p>
                      COLBREW nace para conectar cafés especiales colombianos con consumidores que buscan algo más que una bebida.
                    </p>
                    <p>
                      Trabajamos junto a comunidades cafeteras para compartir historias, territorios y cafés con identidad propia.
                    </p>
                    <p>
                      Cada origen representa una región, una cultura y una comunidad.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: ¿Qué encontrarás aquí? (Limpio, sin tarjetas pesadas) */}
        <section className="py-24 bg-[#FDFBF7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 text-center">
            <Reveal>
              <h2 className="font-montserrat text-3xl font-bold text-[#1a281d] mb-16">
                ¿Qué encontrarás aquí?
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <Reveal delay={0.1}>
                <div className="flex flex-col items-center">
                  <Coffee size={32} className="text-[#b4843b] mb-6" strokeWidth={1.5} />
                  <h3 className="font-montserrat text-xl font-bold text-[#1a281d] mb-3">
                    Cafés de origen colombiano
                  </h3>
                  <p className="text-base leading-relaxed text-[#4a4a4a] max-w-xs">
                    Descubre cafés seleccionados de distintas regiones cafeteras.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex flex-col items-center">
                  <MapPin size={32} className="text-[#b4843b] mb-6" strokeWidth={1.5} />
                  <h3 className="font-montserrat text-xl font-bold text-[#1a281d] mb-3">
                    Territorios y comunidades
                  </h3>
                  <p className="text-base leading-relaxed text-[#4a4a4a] max-w-xs">
                    Conoce los municipios, paisajes y personas detrás de cada origen.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-col items-center">
                  <Sprout size={32} className="text-[#b4843b] mb-6" strokeWidth={1.5} />
                  <h3 className="font-montserrat text-xl font-bold text-[#1a281d] mb-3">
                    Impacto positivo
                  </h3>
                  <p className="text-base leading-relaxed text-[#4a4a4a] max-w-xs">
                    Historias que muestran cómo el café genera oportunidades en las comunidades.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: CTA FINAL */}
        <CtaSection />

      </main>
      
      <Footer />
    </div>
  );
}
