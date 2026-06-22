import { TopNavBar } from "@/components/TopNavBar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import { Coffee, MapPin, Sprout } from "lucide-react";

export default function NuestroOrigenPage() {
  return (
    <>
      <TopNavBar />
      <main className="bg-[#F8F7F2] min-h-screen">
        
        {/* Section 1: Hero */}
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

        {/* Section 2: Qué es COLBREW */}
        <section className="py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="w-full md:w-1/2">
                <Reveal>
                  <h2 className="font-montserrat text-[36px] md:text-[48px] font-bold text-[#1a281d] mb-6 tracking-tight">
                    ¿Qué es COLBREW?
                  </h2>
                  <div className="w-16 h-[3px] bg-[#b4843b] mb-10"></div>
                  
                  <div className="space-y-6 font-inter text-[16px] md:text-[18px] text-[#4a4a4a] leading-relaxed">
                    <p>
                      COLBREW nace para conectar cafés especiales colombianos con personas que buscan algo más que una bebida.
                    </p>
                    <p>
                      Trabajamos junto a comunidades cafeteras comprometidas con la calidad, el origen y el desarrollo de sus territorios.
                    </p>
                    <p>
                      Cada café tiene una historia, una región y una comunidad detrás.
                    </p>
                  </div>
                </Reveal>
              </div>
              
              <div className="w-full md:w-1/2">
                <Reveal delay={0.2}>
                  <img 
                    src="/closeup-shot-male-hand-picking-cherry-red-coffee-beans-tree.jpg" 
                    alt="Manos con granos de café" 
                    className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-xl"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Qué encontrarás aquí */}
        <section className="py-24 pb-32 bg-[#F8F7F2]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 text-center">
            <Reveal>
              <h2 className="font-montserrat text-[32px] md:text-[40px] font-bold text-[#1a281d] mb-6 tracking-tight">
                ¿Qué encontrarás aquí?
              </h2>
              <div className="w-16 h-[3px] bg-[#b4843b] mx-auto mb-20"></div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative">
              {/* Vertical separators for desktop */}
              <div className="hidden md:block absolute top-[10%] bottom-[10%] left-[33.33%] w-[1px] bg-[#EBE7DD]"></div>
              <div className="hidden md:block absolute top-[10%] bottom-[10%] left-[66.66%] w-[1px] bg-[#EBE7DD]"></div>

              <Reveal delay={0.1}>
                <div className="flex flex-col items-center px-6">
                  <Coffee size={48} className="text-[#b4843b] mb-8" strokeWidth={1.5} />
                  <h3 className="font-montserrat text-[22px] font-bold text-[#1a281d] mb-4 leading-snug">
                    Cafés de origen <br /> colombiano
                  </h3>
                  <p className="font-inter text-[#4a4a4a] leading-relaxed text-[15px]">
                    Descubre cafés especiales seleccionados en distintas regiones del país.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex flex-col items-center px-6">
                  <MapPin size={48} className="text-[#b4843b] mb-8" strokeWidth={1.5} />
                  <h3 className="font-montserrat text-[22px] font-bold text-[#1a281d] mb-4 leading-snug">
                    Trazabilidad <br /> y origen
                  </h3>
                  <p className="font-inter text-[#4a4a4a] leading-relaxed text-[15px]">
                    Conoce de dónde viene cada café y las comunidades que lo hacen posible.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-col items-center px-6">
                  <Sprout size={48} className="text-[#b4843b] mb-8" strokeWidth={1.5} />
                  <h3 className="font-montserrat text-[22px] font-bold text-[#1a281d] mb-4 leading-snug">
                    Impacto <br /> positivo
                  </h3>
                  <p className="font-inter text-[#4a4a4a] leading-relaxed text-[15px]">
                    Aprende cómo cada origen contribuye al desarrollo de su territorio.
                  </p>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* Cta Section */}
        <CtaSection />

      </main>
      <Footer />
    </>
  );
}
