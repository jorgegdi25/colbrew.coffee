"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contacto-footer" className="bg-[#1a281d] pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1">
            <img src="/colbrewb.png" alt="COLBREW™" className="h-10 mb-6" />
            <p className="font-inter text-[14px] text-white/70 max-w-[220px]">
              Conectando comunidades cafeteras colombianas con el mundo.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-montserrat text-white font-bold mb-6">Enlaces</h4>
            <ul className="space-y-3 font-inter text-[14px] text-white/70">
              <li><Link href="/" className="hover:text-[#b4843b] transition-colors">Inicio</Link></li>
              <li><Link href="/nuestro-origen" className="hover:text-[#b4843b] transition-colors">Nuestro Origen</Link></li>
              <li><Link href="/comunidad" className="hover:text-[#b4843b] transition-colors">Cultura y Juventud</Link></li>
              <li><Link href="/historias" className="hover:text-[#b4843b] transition-colors">Historias</Link></li>
              <li><Link href="/contacto" className="hover:text-[#b4843b] transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-montserrat text-white font-bold mb-6">Síguenos</h4>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#b4843b] flex items-center justify-center text-[#1a281d] hover:bg-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#b4843b] flex items-center justify-center text-[#1a281d] hover:bg-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-montserrat text-white font-bold mb-6">Contáctanos</h4>
            <ul className="space-y-4 font-inter text-[14px] text-white/70">
              <li className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b4843b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:info@colbrew.com.co" className="hover:text-[#b4843b] transition-colors">info@colbrew.com.co</a>
              </li>
              <li className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b4843b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="tel:+573124567890" className="hover:text-[#b4843b] transition-colors">+57 312 456 7890</a>
              </li>
              <li className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b4843b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Apía, Risaralda, Colombia</span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom divider & Copyright */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-inter text-[13px] text-white/50">
            © {new Date().getFullYear()} COLBREW™. Todos los derechos reservados.
          </p>
          <div className="font-inter text-[13px] text-white/50 flex gap-4">
            <Link href="#" className="hover:text-[#b4843b] transition-colors">Política de Privacidad</Link>
            <span className="text-white/20">|</span>
            <Link href="#" className="hover:text-[#b4843b] transition-colors">Términos de Servicio</Link>
          </div>
        </div>

      </div>
      
      {/* Decorative leaf outline in footer background */}
      <svg className="absolute bottom-[-20%] right-[-5%] w-96 h-96 opacity-5 text-[#b4843b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
      </svg>
    </footer>
  );
}
