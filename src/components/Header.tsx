"use client";

import Link from "next/link";
import { doctor } from "@/data/doctor";
import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaEye } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50">
      <header className="w-full bg-slate-950/85 backdrop-blur-xl border border-cyan-500/20 rounded-3xl shadow-2xl shadow-cyan-950/40 px-4 md:px-6 py-2 overflow-hidden">
        {/* Credentials Top Bar */}
        <div className="border-b border-cyan-500/10 pb-1.5 mb-1.5 flex justify-between items-center text-[10px] md:text-xs text-slate-400 font-mono tracking-wide">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>ced. prof: {doctor.cedula}</span>
            <span>ced. esp: {doctor.cedulaEspecialidad}</span>
            <span>COFEPRIS: {doctor.cofepris}</span>
          </div>
          <div className="hidden sm:block text-cyan-400 font-sans font-bold uppercase tracking-widest text-[9px]">
            {doctor.city}, {doctor.state}
          </div>
        </div>

        {/* Main Nav */}
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center select-none">
            <img 
              src="/images/logo-horizontal-white.png" 
              alt={`Logo ${doctor.title} ${doctor.name}`}
              className="h-14 w-auto object-contain hidden sm:block hover:opacity-95 transition"
            />
            <img 
              src="/images/logo-vertical-white.png" 
              alt={`Logo Icon ${doctor.title} ${doctor.name}`}
              className="h-10 w-auto object-contain sm:hidden hover:opacity-95 transition"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
            <Link href="/enfermedades" className="hover:text-cyan-400 transition-colors">Enfermedades</Link>
            <Link href="/servicios" className="hover:text-cyan-400 transition-colors">Servicios</Link>
            <Link href="/sintomas" className="hover:text-cyan-400 transition-colors">Síntomas</Link>
            <Link href="/contacto" className="hover:text-cyan-400 transition-colors">Contacto</Link>
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 px-5 py-2 rounded-2xl text-sm font-extrabold transition-all duration-300 shadow-lg shadow-cyan-500/20 active:scale-95"
          >
            <FaWhatsapp size={16} /> Agendar Cita
          </a>

          {/* Mobile Toggle */}
          <button
            aria-label="Menu"
            className="lg:hidden w-10 h-10 rounded-xl border border-cyan-500/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="lg:hidden border-t border-cyan-500/10 mt-3 pt-3 flex flex-col gap-2.5 font-bold text-slate-300">
            <Link href="/" onClick={() => setIsOpen(false)} className="py-2 px-3 rounded-xl hover:bg-cyan-950/30 hover:text-cyan-400 transition">Inicio</Link>
            <Link href="/enfermedades" onClick={() => setIsOpen(false)} className="py-2 px-3 rounded-xl hover:bg-cyan-950/30 hover:text-cyan-400 transition">Enfermedades</Link>
            <Link href="/servicios" onClick={() => setIsOpen(false)} className="py-2 px-3 rounded-xl hover:bg-cyan-950/30 hover:text-cyan-400 transition">Servicios</Link>
            <Link href="/sintomas" onClick={() => setIsOpen(false)} className="py-2 px-3 rounded-xl hover:bg-cyan-950/30 hover:text-cyan-400 transition">Síntomas</Link>
            <Link href="/contacto" onClick={() => setIsOpen(false)} className="py-2 px-3 rounded-xl hover:bg-cyan-950/30 hover:text-cyan-400 transition">Contacto</Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 py-3 rounded-2xl font-extrabold"
            >
              <FaWhatsapp size={18} /> Agendar Cita
            </a>
          </nav>
        )}
      </header>
    </div>
  );
}
