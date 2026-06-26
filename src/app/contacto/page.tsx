import { TopNavBar } from "@/components/TopNavBar";
import { Footer } from "@/components/Footer";
import { ConversationalForm } from "@/components/ConversationalForm";
import { Reveal } from "@/components/Reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | COLBREW™",
  description: "Ponte en contacto con el equipo de COLBREW™. Estamos aquí para responder tus preguntas, explorar colaboraciones y compartir más sobre el café colombiano.",
};

export default function ContactoPage() {
  return (
    <div className="bg-[#F8F7F2] min-h-screen font-inter text-[#4a4a4a] flex flex-col">
      <TopNavBar />
      
      <main className="flex-grow pt-32 pb-24 px-6 md:px-16 flex items-center justify-center">
        <div className="w-full max-w-[1400px] mx-auto">
          
          <div className="text-center mb-16">
            <Reveal>
              <p className="font-inter text-[#b4843b] text-sm md:text-base tracking-[0.15em] uppercase font-bold mb-4">
                Hablemos de café
              </p>
              <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a281d] leading-[1.1] mb-6">
                Estamos para escucharte
              </h1>
              <p className="font-inter text-lg text-[#4a4a4a] leading-relaxed max-w-2xl mx-auto">
                Ya sea que quieras saber más sobre nuestros orígenes, explorar una alianza o simplemente conversar sobre buen café, nos encantaría conocerte.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <ConversationalForm />
          </Reveal>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
