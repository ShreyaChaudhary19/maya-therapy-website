
"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        className="border border-[#42594A] px-4 py-3 text-xs tracking-widest text-[#42594A]"
      >
        {isOpen ? "CLOSE ×" : "MENU ☰"}
      </button>

      {isOpen && (
        <nav
          aria-label="Mobile navigation"
          className="absolute right-0 top-full z-50 mt-3 w-56 border border-[#D8D9CF] bg-[#F5F0E8] p-3 shadow-lg"
        >
          <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-xs tracking-widest hover:bg-[#E7E8DE]">
            ABOUT
          </a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-xs tracking-widest hover:bg-[#E7E8DE]">
            SPECIALTIES
          </a>
          <a href="#approach" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-xs tracking-widest hover:bg-[#E7E8DE]">
            APPROACH
          </a>
          <a href="#faqs" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-xs tracking-widest hover:bg-[#E7E8DE]">
            FAQS
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-xs tracking-widest hover:bg-[#E7E8DE]">
            CONTACT
          </a>
        </nav>
      )}
    </div>
  );
}
