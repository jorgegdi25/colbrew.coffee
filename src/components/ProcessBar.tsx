"use client";
import React from "react";
import { Reveal } from "./Reveal";

const processSteps = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b4843b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v2M14 2v2M6 8a6 6 0 0 1 12 0c0 7-6 12-6 12s-6-5-6-12z"></path>
      </svg>
    ),
    label: "Café de origen",
    description: "Seleccionamos cafés especiales con identidad territorial.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b4843b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 14c-3.31 0-6-2.69-6-6 0-3.31 2.69-6 6-6s6 2.69 6 6c0 3.31-2.69 6-6 6z"></path>
        <path d="M22 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <path d="M2 10h20"></path>
      </svg>
    ),
    label: "Productores y comunidades",
    description: "Trabajamos junto a regiones cafeteras comprometidas con la calidad.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b4843b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    ),
    label: "Cultura y juventud",
    description: "Apoyamos iniciativas culturales que fortalecen oportunidades para nuevas generaciones.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b4843b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"></path>
        <circle cx="6" cy="18" r="3"></circle>
        <circle cx="18" cy="16" r="3"></circle>
      </svg>
    ),
    label: "Consumidores conscientes",
    description: "Personas que valoran el origen y el impacto detrás de cada taza.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b4843b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
      </svg>
    ),
    label: "Futuro sostenible",
    description: "Construimos conexiones que generan valor para los territorios.",
  },
];

export function ProcessBar() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image & overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Paisaje de montañas cafeteras"
          src="/scenic-view-agricultural-field-against-sky.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a281d]/85" />
      </div>
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="mb-16">
            <h2 className="font-montserrat text-[32px] md:text-[42px] font-bold text-white mb-2">
              Del grano al impacto
            </h2>
            <p className="font-inter text-[#d4a860] md:text-[#b4843b] font-medium text-[16px] md:text-[18px] mb-6">
              Cómo funciona COLBREW™
            </p>
            <div className="w-[45px] h-[3px] bg-[#b4843b]" />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-wrap md:flex-nowrap items-start justify-between w-full">
            {processSteps.map((step, i) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center text-center w-full md:w-auto">
                  <div className="mb-4 text-[#b4843b]">
                    {step.icon}
                  </div>
                  <span className="font-inter text-[16px] text-white font-bold max-w-[140px] leading-snug mb-2">
                    {step.label}
                  </span>
                  <span className="font-inter text-[13px] text-white/80 max-w-[160px] leading-relaxed hidden md:block">
                    {step.description}
                  </span>
                </div>
                
                {i < processSteps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center text-white/40 mt-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
