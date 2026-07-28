"use client";

import { doctor } from "@/data/doctor";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import { diseases } from "@/data/diseases";
import { FaCalendarCheck, FaWhatsapp, FaAward, FaUniversity, FaCertificate, FaHospitalSymbol, FaMoneyBillWave, FaExchangeAlt, FaCreditCard, FaShieldAlt, FaCheckCircle, FaGlasses, FaMicroscope, FaEye } from "react-icons/fa";
import StructuredData from "@/components/StructuredData";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;
  const bioRef = useRef(null);
  const techRef = useRef(null);

  // Parallax effects
  const { scrollYProgress: bioScroll } = useScroll({
    target: bioRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: techScroll } = useScroll({
    target: techRef,
    offset: ["start end", "end start"]
  });

  const bioY1 = useTransform(bioScroll, [0, 1], [-60, 60]);
  const bioY2 = useTransform(bioScroll, [0, 1], [60, -60]);
  const bioRotate = useTransform(bioScroll, [0, 1], [0, 90]);

  const techY1 = useTransform(techScroll, [0, 1], [-80, 80]);
  const techRotate = useTransform(techScroll, [0, 1], [0, -45]);

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: `${doctor.title} ${doctor.name}`,
    description: doctor.bio,
    medicalSpecialty: doctor.specialty,
    telephone: doctor.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: doctor.city,
      addressRegion: doctor.state,
    },
    priceRange: `$${doctor.consultationPrice} MXN`,
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 pt-32">
      <StructuredData data={homeSchema} />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-128px)] flex items-center py-16 overflow-hidden">
        {/* Background optical rays / glow */}
        <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] animate-pulse-delicate" />
          <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[120px]" />
          
          {/* Rotating Focus rings SVGs */}
          <svg className="absolute right-[-10%] top-[5%] w-[600px] h-[600px] text-cyan-500/10 animate-spin-slow pointer-events-none" viewBox="0 0 200 200" fill="none" stroke="currentColor">
            <circle cx="100" cy="100" r="85" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="70" strokeWidth="1" strokeDasharray="40 10 15 10" />
            <circle cx="100" cy="100" r="50" strokeWidth="0.75" />
            <line x1="100" y1="5" x2="100" y2="195" strokeWidth="0.25" strokeDasharray="5 5" />
            <line x1="5" y1="100" x2="195" y2="100" strokeWidth="0.25" strokeDasharray="5 5" />
          </svg>

          <svg className="absolute left-[-5%] bottom-[-10%] w-[400px] h-[400px] text-amber-500/5 animate-spin-reverse-slow pointer-events-none" viewBox="0 0 200 200" fill="none" stroke="currentColor">
            <circle cx="100" cy="100" r="90" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="75" strokeWidth="0.5" strokeDasharray="10 30" />
            <circle cx="100" cy="100" r="60" strokeWidth="0.75" strokeDasharray="5 5" />
          </svg>
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Hero Copy */}
            <motion.div className="flex-1 text-center lg:text-left z-10" initial="hidden" animate="visible" variants={fadeUp}>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="inline-block px-5 py-2 rounded-full bg-cyan-950/60 text-cyan-400 font-mono text-xs mb-6 border border-cyan-500/30 shadow-lg shadow-cyan-950/50 tracking-widest uppercase cursor-default"
              >
                {doctor.specialty} • {doctor.subspecialty}
              </motion.span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight">
                Claridad y Precisión<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400">para recuperar tu visión.</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Microcirugía ocular avanzada y diagnóstico especializado con tecnología láser de última generación en Mérida, Yucatán.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="group px-8 py-4.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-slate-950 font-extrabold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/25 active:scale-95">
                  <FaCalendarCheck size={20} className="group-hover:rotate-12 transition-transform duration-300" /> Agendar Consulta
                </a>
              </div>
            </motion.div>

            {/* Right: Premium Interactive Doctor Portrait Frame */}
            <motion.div 
              className="flex-1 w-full max-w-md lg:max-w-lg h-[420px] lg:h-[520px] relative mt-10 lg:mt-0" 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Refractive background rings */}
              <div className="absolute inset-0 border border-cyan-500/10 rounded-full scale-105 animate-pulse-delicate pointer-events-none" />
              <div className="absolute inset-0 border border-amber-500/5 rounded-full scale-110 animate-float-slow pointer-events-none" />

              <motion.div 
                className="w-full h-full bg-slate-900/60 rounded-[3rem] border border-cyan-500/25 shadow-2xl flex items-center justify-center relative overflow-hidden group backdrop-blur-md"
                animate={{ y: [-6, 6, -6] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                <img 
                  src="/hero.webp" 
                  alt="Dra. Fiona Carolina Xacur García - Cirujana Oftalmóloga" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-cyan-950/20 pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/70 border border-cyan-500/20 backdrop-blur-md">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">{doctor.title} {doctor.name}</h3>
                  <p className="text-xs font-mono text-cyan-400 tracking-widest">{doctor.specialistTitle}</p>
                </div>
              </motion.div>

              {/* Floating Experience Badge */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-slate-900/90 border border-cyan-500/30 p-5 rounded-2xl shadow-2xl flex items-center gap-4 z-20 hover:scale-105 cursor-default transition-all duration-300"
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                  <FaAward size={24} />
                </div>
                <div>
                  <p className="font-extrabold text-white text-xl leading-none">+15 Años</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Experiencia Quirúrgica</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. EXTENSIVE ABOUT ME & CERTIFICATIONS (PARALLAX) */}
      <section ref={bioRef} className="py-28 bg-slate-900/40 border-y border-slate-900 relative overflow-hidden">
        {/* Parallax elements */}
        <motion.div 
          style={{ y: bioY1, rotate: bioRotate }}
          className="absolute right-[5%] top-[10%] w-24 h-24 text-cyan-500/10 pointer-events-none hidden md:block"
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="50" cy="50" r="40" strokeDasharray="5 5" />
            <path d="M50 10 L50 90 M10 50 L90 50" />
          </svg>
        </motion.div>
        
        <motion.div 
          style={{ y: bioY2 }}
          className="absolute left-[10%] bottom-[10%] w-32 h-32 text-amber-500/10 pointer-events-none hidden md:block"
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="30" strokeDasharray="10 5" />
          </svg>
        </motion.div>

        <div className="container mx-auto px-6">
          <motion.div 
            className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {/* Left: Interactive clinical frame */}
            <motion.div className="lg:w-1/3" variants={fadeUp}>
              <div className="aspect-[3/4] bg-slate-900 border border-cyan-500/20 rounded-[2.5rem] shadow-2xl flex items-center justify-center sticky top-32 group overflow-hidden relative">
                <img 
                  src="/aboutme.webp" 
                  alt="Dra. Fiona Carolina Xacur García - Especialista en Córnea y Cirugía Refractiva" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 backdrop-blur-md text-center">
                  <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest mb-1">Tecnología & Atención</p>
                  <p className="text-slate-100 font-bold text-sm">Dra. Fiona Carolina Xacur García</p>
                  <div className="w-12 h-[1px] bg-cyan-500/30 my-2 mx-auto" />
                  <p className="text-cyan-400 text-xs font-medium">Alta Especialidad en Córnea y Cirugía Refractiva</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Bio & Credentials */}
            <div className="lg:w-2/3 flex flex-col justify-center">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                {doctor.title} {doctor.name}
              </motion.h2>
              <motion.div variants={fadeUp} className="text-slate-300 text-base md:text-lg leading-relaxed mb-12 space-y-4">
                <p className="font-semibold text-cyan-400">"{doctor.philosophy}"</p>
                <p>{doctor.bio}</p>
              </motion.div>

              {/* Grid of Credentials */}
              <motion.h3 variants={fadeUp} className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-6 bg-cyan-500 rounded-full" /> Formación y Certificaciones
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <motion.div variants={fadeUp} className="optical-card p-6 flex flex-col gap-3 hover:-translate-y-1.5 cursor-default">
                  <FaUniversity className="text-cyan-400 text-3xl" />
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base">Médico Cirujano</h4>
                    <p className="text-slate-400 text-xs mt-1">Universidad Autónoma de Yucatán (UADY)</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeUp} className="optical-card p-6 flex flex-col gap-3 hover:-translate-y-1.5 cursor-default">
                  <FaHospitalSymbol className="text-cyan-400 text-3xl" />
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base">Especialidad en Oftalmología</h4>
                    <p className="text-slate-400 text-xs mt-1">Universidad Nacional Autónoma de México (UNAM) / Instituto Conde de Valenciana</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="optical-card p-6 md:col-span-2 flex flex-col gap-3 hover:-translate-y-1.5 cursor-default relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl" />
                  <FaCertificate className="text-amber-400 text-3xl relative z-10" />
                  <div className="relative z-10">
                    <h4 className="font-bold text-white text-sm md:text-base">Alta Especialidad en Córnea y Cirugía Refractiva</h4>
                    <p className="text-slate-400 text-xs mt-1">Cursada en el Instituto de Oftalmología Conde de Valenciana / UNAM</p>
                    <p className="mt-4 inline-flex bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1.5 rounded-lg text-xs font-bold text-cyan-400 font-mono uppercase tracking-wider">
                      Consejo Mexicano de Oftalmología Certificado (No. 2760)
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 3. DISEASES INDEX GRID (ASYMMETRIC CARDS) */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Padecimientos Visuales</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">Diagnóstico y tratamiento avanzado para proteger el nervio óptico, restaurar el cristalino y corregir tu graduación.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          >
            {diseases.slice(0, 5).map((disease, idx) => (
              <motion.div 
                key={disease.id} 
                variants={fadeUp} 
                className={`h-full ${idx % 2 === 1 ? 'lg:translate-y-4' : ''}`} // Asymmetric stagger in Y layout
              >
                <Link href={`/enfermedades/${disease.slug}`} className="optical-card overflow-hidden group flex flex-col h-full hover:border-cyan-400/40">
                  <div className="aspect-video relative overflow-hidden bg-slate-900 border-b border-cyan-500/10">
                    <img 
                      src={disease.image} 
                      alt={disease.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{disease.name}</h3>
                    <p className="text-slate-400 text-xs mb-6 flex-grow leading-relaxed">{disease.description.substring(0, 100)}...</p>
                    <span className="text-cyan-400 font-mono font-bold group-hover:text-amber-400 transition-colors flex items-center gap-2 uppercase text-[10px] tracking-widest mt-auto">
                      Ver Tratamientos <span className="group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. CLINICAL SERVICES (ALTERNATIN LAYOUT & TECHNOLOGY PARALLAX) */}
      <section ref={techRef} className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Parallax optical focus grid */}
        <motion.div 
          style={{ y: techY1, rotate: techRotate }}
          className="absolute right-[-10%] bottom-[5%] w-[500px] h-[500px] text-cyan-500/5 pointer-events-none hidden lg:block"
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
            <line x1="50" y1="0" x2="50" y2="100" strokeWidth="0.25" strokeDasharray="2 2" />
            <line x1="0" y1="50" x2="100" y2="50" strokeWidth="0.25" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="48" />
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="10" />
          </svg>
        </motion.div>

        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Procedimientos y Cirugías</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">Tratamientos quirúrgicos ambulatorios de alta especialidad con anestesia tópica sin dolor.</p>
          </motion.div>
          
          <div className="flex flex-col gap-10 max-w-5xl mx-auto">
            {services.slice(0, 5).map((service, idx) => (
              <motion.div 
                key={service.id}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              >
                <Link 
                  href={`/servicios/${service.slug}`} 
                  className={`optical-card p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center group ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border border-cyan-500/25 flex items-center justify-center shadow-lg shadow-cyan-950/50 flex-shrink-0">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="flex-grow text-center md:text-left">
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-2.5">
                      <span className="px-3 py-0.5 rounded-md bg-cyan-950 text-cyan-400 border border-cyan-500/20 font-mono text-[9px] uppercase tracking-wider">{service.type}</span>
                      {service.duration && <span className="px-3 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800 font-mono text-[9px] uppercase tracking-wider">{service.duration}</span>}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{service.name}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">{service.description}</p>
                    <span className="inline-flex text-cyan-400 font-mono font-bold uppercase text-[10px] tracking-widest items-center gap-1 group-hover:text-amber-400 transition-colors">
                      Ver Ficha Técnica <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SYMPTOMS LISTING GRID */}
      <section className="py-24 bg-slate-900/10 relative overflow-hidden border-t border-slate-900">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Señales de Alarma Visual</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">Síntomas clave que no deben omitirse y requieren revisión ocular inmediata.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          >
            {symptoms.slice(0, 5).map((sym) => (
              <motion.div key={sym.id} variants={fadeUp} className="h-full">
                <Link href={`/sintomas/${sym.slug}`} className="optical-card overflow-hidden flex flex-col h-full group hover:border-amber-400/30">
                  <div className="aspect-video relative overflow-hidden bg-slate-900 border-b border-amber-500/10">
                    <img 
                      src={sym.image} 
                      alt={sym.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{sym.name}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-6 flex-grow">{sym.description}</p>
                    <span className="text-cyan-400 font-mono font-bold flex items-center gap-1 uppercase text-[10px] tracking-widest group-hover:text-amber-400 transition-colors mt-auto">
                      Analizar Causas <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. PRICING & INSURANCES (GLASSMORPHISM BLOCK) */}
      <section className="py-28 relative overflow-hidden border-t border-slate-900">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Convenios y Costos</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">Transparencia en tarifas de consulta médica oftalmológica y coberturas de seguros.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          >
            
            {/* Left Block: Precio & Metodos (Spans 7 cols) */}
            <motion.div variants={fadeUp} className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Precio Box */}
              <div className="optical-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-cyan-400/30">
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-white mb-1">Consulta Oftalmológica Integral</h3>
                  <p className="text-slate-400 text-xs">Incluye refracción digital, tonometría y fondo de ojo.</p>
                </div>
                <div className="inline-flex items-baseline gap-1.5 bg-cyan-950/80 border border-cyan-500/30 px-6 py-3 rounded-2xl shadow-lg">
                  <span className="text-3xl font-extrabold text-cyan-400">${doctor.consultationPrice}</span>
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">MXN</span>
                </div>
              </div>

              {/* Métodos de Pago Box */}
              <div className="optical-card p-8 flex flex-col justify-center flex-grow">
                <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-6">Formas de Pago Aceptadas</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900 text-center hover:border-cyan-500/20 transition-all cursor-default group/pago">
                    <FaMoneyBillWave className="text-cyan-400 text-2xl mx-auto mb-2 group-hover/pago:scale-110 transition-transform duration-300" />
                    <span className="text-white font-bold text-xs">Efectivo</span>
                  </div>
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900 text-center hover:border-cyan-500/20 transition-all cursor-default group/pago">
                    <FaExchangeAlt className="text-cyan-400 text-2xl mx-auto mb-2 group-hover/pago:scale-110 transition-transform duration-300" />
                    <span className="text-white font-bold text-xs">Transfer</span>
                  </div>
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900 text-center hover:border-cyan-500/20 transition-all cursor-default group/pago">
                    <FaCreditCard className="text-cyan-400 text-2xl mx-auto mb-2 group-hover/pago:scale-110 transition-transform duration-300" />
                    <span className="text-white font-bold text-xs">Tarjetas</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Block: Seguros (Spans 5 cols) */}
            <motion.div variants={fadeUp} className="lg:col-span-5 bg-gradient-to-br from-cyan-950/80 to-slate-950 border border-cyan-500/30 rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="inline-flex items-center gap-2 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20 mb-6 cursor-default">
                  <FaShieldAlt className="text-cyan-400 text-xs" />
                  <span className="font-bold text-[9px] tracking-widest uppercase text-cyan-400">Pago Directo y Reembolso</span>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white">Aseguradoras Médicas</h3>
                <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                  Colaboramos con las principales compañías de seguros en México para facilitar el pago de tu cirugía o consulta.
                </p>

                <div className="bg-slate-950/50 rounded-xl p-4 border border-cyan-500/10 mb-6">
                  <ul className="grid grid-cols-2 gap-3 text-xs text-slate-300 font-bold">
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 text-xs" /> GNP Seguros</li>
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 text-xs" /> AXA Seguros</li>
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 text-xs" /> Monterrey</li>
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 text-xs" /> MetLife</li>
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 text-xs" /> Bupa</li>
                    <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 text-xs" /> Mapfre</li>
                  </ul>
                </div>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-slate-950 font-extrabold py-3.5 rounded-xl text-center transition-all duration-300 text-xs tracking-wider uppercase shadow-lg shadow-cyan-500/15 mt-4">
                Consultar Cobertura
              </a>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}
