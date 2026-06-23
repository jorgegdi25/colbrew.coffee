"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function TopNavBar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={twMerge(
        clsx(
          "sticky top-0 w-full z-50 transition-all duration-300 bg-[#F8F7F2]",
          scrolled ? "py-4 shadow-md" : "py-6"
        )
      )}
    >
      <nav className="flex justify-between items-center w-full px-6 md:px-16 max-w-[1400px] mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              alt="COLBREW™ Logo"
              className="h-10 w-auto"
              src="/colbrew-f.png"
            />
          </Link>
        </div>
        
        {/* Navigation links & CTA */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          <div className="flex items-center gap-8">
            {[
              { label: "Inicio", href: "/" },
              { label: "Nuestro Origen", href: "/nuestro-origen" },
              { label: "Comunidad", href: "/comunidad" },
              { label: "Historias", href: "/historias" },
              { label: "Contacto", href: "#" },
            ].map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-montserrat text-[14px] font-bold ${
                    isActive ? "text-[#1a281d]" : "text-[#1a281d] hover:text-[#b4843b]"
                  } transition-colors relative`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#1a281d]" />
                  )}
                </Link>
              );
            })}
          </div>
          
          {/* Únete Button */}
          <button className="bg-[#1a281d] text-white px-6 py-2.5 rounded-sm font-inter text-[14px] font-semibold hover:bg-[#2c3d31] transition-colors shadow-sm ml-4">
            Únete
          </button>
        </div>
      </nav>
    </header>
  );
}
