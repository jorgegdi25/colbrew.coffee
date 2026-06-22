import { Reveal } from "./Reveal";

export function OriginSection() {
  return (
    <section className="py-40 mesh-gradient-section overflow-hidden">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="order-2 md:order-1">
          <Reveal>
            <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-inter font-bold tracking-widest uppercase mb-6">
              Ubicación Estratégica
            </div>
            <h3 className="font-montserrat text-headline-xl md:text-[64px] mb-8 font-extrabold leading-[1.1] text-primary">
              Apía, Risaralda. <br />
              <span className="text-secondary">El origen de nuestra historia.</span>
            </h3>
            <p className="font-inter text-body-lg text-on-surface-variant mb-12 leading-relaxed">
              Ubicado en el corazón del Eje Cafetero, Apía representa la esencia
              de COLBREW™. Aquí, la altitud, el clima y la dedicación de nuestra
              gente se fusionan para crear un perfil de sabor inigualable que hoy
              compartimos con el mundo.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-4 bg-secondary text-white px-8 py-4 rounded-full font-inter font-bold uppercase tracking-wider hover:bg-secondary-container hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 shadow-lg group"
            >
              <span className="material-symbols-outlined text-white">map</span>
              <span>Mapa del Origen</span>
              <span className="material-symbols-outlined text-white group-hover:translate-x-2 transition-transform">
                arrow_forward
              </span>
            </a>
          </Reveal>
        </div>
        
        <div className="order-1 md:order-2">
          <Reveal delay={0.2}>
            <div className="relative group">
              <div
                className="overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] aspect-[4/5] relative z-10"
                style={{ borderRadius: "120px 24px 120px 24px" }}
              >
                <img
                  alt="Paisaje de Apía, Risaralda"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                  src="https://images.unsplash.com/photo-1506544777-64cfbe1142df?auto=format&fit=crop&q=80"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              {/* Floating decorative shape */}
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] animate-pulse" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
