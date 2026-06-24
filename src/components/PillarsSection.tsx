"use client";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#b4843b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12"></path>
        <path d="M12 12C12 12 14.5 8 18 8C19.5 8 20 9.5 20 11C20 13 16 15 12 18"></path>
        <path d="M12 12C12 12 9.5 8 6 8C4.5 8 4 9.5 4 11C4 13 8 15 12 18"></path>
        <path d="M12 18C12 18 14 16 16 16C17 16 17.5 17 17.5 18C17.5 19 15 20 12 22"></path>
        <path d="M12 18C12 18 10 16 8 16C7 16 6.5 17 6.5 18C6.5 19 9 20 12 22"></path>
      </svg>
    ),
    title: "Café con propósito",
    description: "Promovemos cafés especiales colombianos que representan territorios, productores y comunidades.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#b4843b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: "Cultura y juventud",
    description: "Apoyamos iniciativas culturales y escuelas de música que fortalecen nuevas generaciones.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#b4843b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        <path d="M12 14v-4"></path>
        <path d="M10 12h4"></path>
      </svg>
    ),
    title: "Territorio e impacto",
    description: "Cada origen conecta café, identidad local y oportunidades para el desarrollo regional.",
  },
];

export function PillarsSection() {
  return (
    <section className="py-24 bg-[#F8F7F2] relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-[#e2dcd0]">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col items-center text-center px-4 md:px-12 py-8 md:py-0 w-full md:w-1/3"
              >
                <div className="mb-6 text-[#b4843b]">
                  {pillar.icon}
                </div>
                <h3 className="font-montserrat text-[22px] font-bold text-[#1a281d] mb-4">
                  {pillar.title}
                </h3>
                <p className="font-inter text-[15px] text-[#4a4a4a] leading-relaxed max-w-[280px]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
