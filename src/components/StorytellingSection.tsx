import { Reveal } from "./Reveal";

export function StorytellingSection() {
  return (
    <section className="py-40 relative dim-mesh-gradient">
      <div className="blob-bg bottom-0 right-0 opacity-30" />
      
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center mb-24">
        <Reveal>
          <h2 className="font-montserrat text-[48px] md:text-display-lg max-w-5xl mx-auto mb-10 font-extrabold leading-[1.1] text-primary">
            No vendemos café. <br />
            <span className="text-secondary/40 italic">
              Conectamos territorios.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="w-24 h-2 bg-secondary mx-auto rounded-full opacity-60" />
        </Reveal>
      </div>
      
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <Reveal delay={0.4}>
          <div className="relative group">
            {/* The analysis requested large radii for masks */}
            <div className="w-full h-[70vh] overflow-hidden rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative z-10">
              <img
                alt="Panorámica del territorio cafetero"
                className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110"
                src="https://images.unsplash.com/photo-1518182170546-076616fdacaf?auto=format&fit=crop&w=1200&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-20 left-12 md:left-20 text-white max-w-xl">
                <p className="font-inter text-label-md font-bold tracking-[0.3em] uppercase mb-6 text-secondary">
                  Nuestro Paisaje
                </p>
                <h4 className="font-montserrat text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Respeto por la Tierra
                </h4>
                <p className="text-white/80 font-inter text-body-lg leading-relaxed">
                  Cada hectárea protegida es un legado para las futuras
                  generaciones de caficultores en toda Colombia.
                </p>
              </div>
            </div>
            
            {/* Glassmorphism decorative accent behind image */}
            <div className="absolute -top-12 -right-12 w-1/2 h-1/2 glass-card rounded-[4rem] -z-0 blur-sm opacity-30" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
