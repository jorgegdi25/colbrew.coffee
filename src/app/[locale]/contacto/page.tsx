import { TopNavBar } from "@/components/TopNavBar";
import { Footer } from "@/components/Footer";
import { ConversationalForm } from "@/components/ConversationalForm";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | COLBREW™",
  description: "Ponte en contacto con el equipo de COLBREW™. Estamos aquí para responder tus preguntas, explorar colaboraciones y compartir más sobre el café colombiano.",
};

export default function ContactoPage() {
  return (
    <div className="bg-[#F8F7F2] min-h-screen font-inter text-[#4a4a4a] flex flex-col">
      <TopNavBar />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[500px] flex items-center">
          <div className="absolute inset-0">
             <Image src="/brand-2.webp" alt="Contacto COLBREW" fill className="object-cover" />
             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 w-full py-20">
            <div className="max-w-2xl">
              <Reveal>
                <p className="font-inter text-[#b4843b] text-sm md:text-base tracking-[0.15em] uppercase font-bold mb-4">
                  Hablemos de café
                </p>
                <h1 className="font-montserrat text-[48px] md:text-[72px] font-bold text-white leading-[1.1] mb-6">
                  Estamos para <br /> escucharte.
                </h1>
                <div className="w-16 h-1 bg-[#b4843b] mb-8"></div>
                <p className="font-inter text-[16px] md:text-[20px] text-white/90 leading-relaxed font-medium">
                  Ya sea que quieras saber más sobre nuestros orígenes, explorar una alianza o simplemente conversar sobre buen café, nos encantaría conocerte.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FORM SECTION */}
        <section className="py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-16">


          <Reveal delay={0.2}>
            <ConversationalForm />
          </Reveal>
          
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
