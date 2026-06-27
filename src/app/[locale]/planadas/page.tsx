import { TopNavBar } from "@/components/TopNavBar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planadas | COLBREW™ - Esperanza y Transformación",
  description: "Conoce nuestro café de Planadas, Tolima. Donde el café se convierte en esperanza y transformación territorial.",
};

export default function PlanadasPage() {
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
                P
              </span>
              
              <Reveal>
                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <div className="w-8 h-[2px] bg-[#b4843b]"></div>
                  <span className="font-montserrat text-[#b4843b] font-bold tracking-[0.2em] uppercase text-xs">
                    Tolima · Colombia
                  </span>
                </div>
                <h1 className="font-montserrat text-[56px] md:text-[72px] lg:text-[88px] font-black text-[#1a281d] leading-[0.95] mb-8 relative z-10">
                  Planadas
                </h1>
                <p className="font-montserrat text-xl md:text-2xl font-medium text-[#1a281d] leading-snug mb-6 max-w-md relative z-10">
                  Donde el café se convierte en esperanza y transformación.
                </p>
                <div className="font-inter text-base md:text-lg text-[#4a4a4a] leading-relaxed max-w-lg relative z-10 space-y-4">
                  <p>
                    Ubicado en el sur del departamento del Tolima, Planadas es uno de los territorios cafeteros más reconocidos de Colombia. Sus montañas, la dedicación de sus productores y el compromiso de sus comunidades han convertido a esta región en un referente del café de especialidad y en un ejemplo de transformación territorial.
                  </p>
                  <p>
                    Para COLBREW™, Planadas representa la capacidad del café para construir oportunidades, fortalecer comunidades y proyectar el talento colombiano hacia el mundo.
                  </p>
                </div>
              </Reveal>
            </div>
            {/* Right: Image — slightly wider to break symmetry */}
            <div className="w-full lg:w-[55%] relative min-h-[400px] lg:min-h-full">
              <div className="absolute inset-0">
                <img src="/planadas.webp" alt="Paisaje cafetero de Planadas, Tolima" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 1: Un territorio cafetero — with giant background number */}
        <section className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
          {/* Giant decorative initial */}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 font-montserrat text-[200px] md:text-[400px] font-black text-[#1a281d]/[0.02] leading-none select-none pointer-events-none translate-x-1/4">
            SUR
          </span>
          
          <div className="max-w-3xl mx-auto px-6 md:px-16 text-center relative z-10">
            <Reveal>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d] mb-4">
                Ubicación
              </h2>
              <h3 className="font-montserrat text-3xl md:text-4xl font-bold text-[#b4843b] mb-8">
                En el sur del Tolima, entre montañas cafeteras
              </h3>
              <div className="w-16 h-[2px] bg-[#b4843b] mx-auto mb-10"></div>
              <p className="text-lg md:text-xl leading-relaxed text-[#4a4a4a] mb-6">
                Planadas se encuentra en la cordillera Central de los Andes colombianos, al sur del departamento del Tolima. Su geografía montañosa, las condiciones climáticas y la riqueza de sus suelos crean un entorno ideal para el cultivo de cafés de alta calidad.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[#4a4a4a]">
                Durante las últimas décadas, este territorio ha logrado consolidarse como uno de los principales referentes del café de especialidad en Colombia.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="mt-12 md:mt-16 w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border-4 border-white bg-white">
                <Image src="/mapa-planadas.webp" alt="Mapa de ubicación de Planadas" width={800} height={800} className="w-full h-auto object-cover" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* FULL WIDTH IMAGE BREAK */}
        <section className="w-full h-[40vh] md:h-[50vh] relative">
          <div className="absolute inset-0">
             <img src="/planadas2.webp" alt="Manos sosteniendo café" className="w-full h-full object-cover" />
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
                    <img src="/planadas-3.webp" alt="Caficultora" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              {/* Text block with left accent border */}
              <div className="w-full md:w-[45%] order-1 md:order-2 flex flex-col justify-center py-8 md:py-16">
                <Reveal>
                  <div className="border-l-[3px] border-[#b4843b] pl-8">
                    <h2 className="font-montserrat text-sm font-bold text-[#b4843b] uppercase tracking-wider mb-2">
                      ¿Por qué Planadas inspira a COLBREW™?
                    </h2>
                    <h3 className="font-montserrat text-3xl md:text-4xl font-bold text-[#1a281d] mb-6">
                      Un territorio que demuestra el poder de la transformación
                    </h3>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      La historia reciente de Planadas es también una historia de resiliencia.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Lo que durante muchos años fue una región marcada por las dificultades, hoy es reconocido por la calidad de sus cafés, la organización de sus productores y el compromiso de sus comunidades con el desarrollo de un futuro diferente.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a]">
                      COLBREW™ encuentra en Planadas un ejemplo de cómo el café puede convertirse en un motor de transformación social y territorial.
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
                    <img src="/planadas-4.webp" alt="Caficultor" className="w-full h-full object-cover" />
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
                      Una comunidad unida por el café
                    </h3>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      En Planadas, el café hace parte de la identidad de miles de familias.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Cada cosecha representa el trabajo colectivo de productores que han perfeccionado sus procesos y que hoy son reconocidos por ofrecer algunos de los cafés más destacados del país.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a]">
                      Más allá de la calidad de la taza, existe una comunidad que ha construido conocimiento, cooperación y sentido de pertenencia alrededor de este cultivo.
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
                      Un paisaje que protege la calidad del café
                    </h3>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      Las montañas, bosques y fuentes hídricas de Planadas forman parte del ecosistema que da origen a sus cafés.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a] mb-6">
                      La relación entre naturaleza, producción responsable y conservación del territorio es fundamental para mantener la calidad que hoy distingue a esta región en mercados nacionales e internacionales.
                    </p>
                    <p className="text-lg leading-relaxed text-[#4a4a4a]">
                      Para COLBREW™, proteger estos paisajes también significa proteger el futuro de las comunidades que viven de ellos.
                    </p>
                  </div>
                </Reveal>
              </div>
              {/* Image on the right */}
              <div className="w-full md:w-[55%]">
                <div className="relative w-full h-[400px] md:h-full min-h-[500px] rounded-sm overflow-hidden">
                  <div className="absolute inset-0">
                    <img src="/planadas-5.webp" alt="Naturaleza de Planadas" className="w-full h-full object-cover" />
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
                <span className="text-white/40">Transformación</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Comunidad</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Resiliencia</span>
                <span className="text-[#b4843b] mx-6">·</span>
                <span className="text-white/40">Planadas</span>
                <span className="text-[#b4843b] mx-6">·</span>
              </span>
            ))}
          </div>
        </section>

        {/* SECCIÓN 4: Cultura que inspira — Parallax banner */}
        <section 
          className="relative py-20 md:py-28 flex items-center justify-center bg-fixed bg-center bg-cover" 
          style={{ backgroundImage: "url('/planadas-6.webp')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
            <Reveal>
              <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Cultura y juventud
              </h2>
              <h3 className="font-montserrat text-xl md:text-2xl text-[#d4a860] mb-8 font-medium">
                Nuevas generaciones que construyen futuro
              </h3>
              <div className="w-12 h-[2px] bg-[#b4843b] mx-auto mb-8"></div>
              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-6">
                El desarrollo de Planadas también depende de las oportunidades que tengan sus jóvenes.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-6">
                La educación, la cultura, el emprendimiento y el fortalecimiento del tejido comunitario son elementos fundamentales para garantizar que las nuevas generaciones continúen construyendo un territorio próspero.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-white/90">
                COLBREW™ cree que el café puede convertirse en un puente para impulsar estas oportunidades y conectar el talento local con nuevas posibilidades.
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
