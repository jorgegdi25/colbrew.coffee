"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nuestro Origen", href: "/nuestro-origen" },
  { 
    label: "Comunidad", 
    href: "/comunidad",
    subItems: [
      { label: "Apía", href: "/apia" },
      { label: "Ciudad Bolívar", href: "/ciudad-bolivar" },
      { label: "Líbano", href: "/libano" },
      { label: "Planadas", href: "/planadas" },
    ]
  },
  { label: "Historias", href: "/historias" },
  { label: "Contacto", href: "/contacto" },
];

export function TopNavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={twMerge(
        clsx(
          "sticky top-0 w-full z-50 transition-all duration-300 bg-[#F8F7F2]",
          scrolled ? "py-4 shadow-md" : "py-6"
        )
      )}
    >
      <nav className="flex justify-between items-center w-full px-6 md:px-16 max-w-[1400px] mx-auto relative">
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
        
        {/* Desktop Navigation links & CTA */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          <div className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.subItems && item.subItems.some(sub => pathname === sub.href));
              
              if (item.subItems) {
                return (
                  <div key={item.label} className="relative group">
                    <Link
                      href={item.href}
                      className={`font-montserrat text-[14px] font-bold ${
                        isActive ? "text-[#1a281d]" : "text-[#1a281d] hover:text-[#b4843b]"
                      } transition-colors relative flex items-center gap-1`}
                    >
                      {item.label}
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      {isActive && (
                        <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#1a281d]" />
                      )}
                    </Link>
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-48 z-50">
                      <div className="bg-[#1a281d] rounded-md shadow-xl py-2 flex flex-col">
                        {item.subItems.map((subItem) => (
                          <Link key={subItem.href} href={subItem.href} className="px-4 py-2 font-inter text-sm text-white hover:bg-[#b4843b] hover:text-white transition-colors">
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

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

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#1a281d] p-2 focus:outline-none cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#F8F7F2] border-t border-gray-200/50 shadow-lg py-6 px-6 flex flex-col gap-6 z-40">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.subItems && item.subItems.some(sub => pathname === sub.href));
              
              return (
                <div key={item.label} className="flex flex-col">
                  <Link
                    href={item.href}
                    className={`font-montserrat text-[16px] font-bold ${
                      isActive && !item.subItems ? "text-[#b4843b]" : "text-[#1a281d] hover:text-[#b4843b]"
                    } transition-colors`}
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <div className="flex flex-col pl-4 mt-3 gap-3 border-l-2 border-gray-200 ml-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`font-montserrat text-[14px] font-medium ${
                            pathname === subItem.href ? "text-[#b4843b]" : "text-[#4a4a4a] hover:text-[#b4843b]"
                          } transition-colors`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <button className="bg-[#1a281d] text-white w-full py-3 rounded-sm font-inter text-[15px] font-semibold hover:bg-[#2c3d31] transition-colors shadow-sm">
            Únete
          </button>
        </div>
      )}
    </header>
  );
}

