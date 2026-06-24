"use client";
import { Reveal } from "./Reveal";

const articles = [
  {
    image: "/low-angle-view-coffee-farm-hill-against-sky.webp",
    badge: "Café Colombiano",
    title: "¿Qué hace especial al café colombiano?",
    excerpt: "Descubre las características únicas que hacen del café de Colombia uno de los mejores del mundo.",
  },
  {
    image: "/hands-holding-coffee-beans.webp",
    badge: "Preparación",
    title: "Cómo preparar un buen café frío en casa",
    excerpt: "Consejos y técnicas para disfrutar un cold brew delicioso y refrescante.",
  },
  {
    image: "/adult-woman-picking-coffee-from-plantations.webp",
    badge: "Historias",
    title: "El origen detrás de cada taza",
    excerpt: "Historias reales de familias cafeteras que trabajan con pasión y dedicación.",
  },
];

export function NewsSection() {
  return (
    <section className="py-24 bg-[#F8F7F2]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <Reveal>
          <div className="flex justify-between items-end mb-10 border-b border-[#e2dcd0] pb-4">
            <h2 className="font-montserrat text-[28px] font-bold text-[#1a281d]">
              Últimas historias
            </h2>
            <a href="#" className="font-inter text-[14px] font-semibold text-[#b4843b] hover:underline">
              Ver todas las historias →
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.title} className="flex flex-col bg-transparent group cursor-pointer">
                <div className="relative h-[240px] w-full mb-5 rounded-[1.5rem] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 bg-[#b4843b] text-white font-inter text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-wide shadow-md">
                    {article.badge}
                  </div>
                </div>
                <h3 className="font-montserrat text-[20px] font-bold text-[#1a281d] leading-snug mb-3 pr-4 group-hover:text-[#b4843b] transition-colors">
                  {article.title}
                </h3>
                <p className="font-inter text-[15px] text-[#4a4a4a] leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
