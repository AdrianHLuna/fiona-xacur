import Link from "next/link";
import { services } from "@/data/services";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import { FaGlasses, FaEye, FaMicroscope } from "react-icons/fa";

export const metadata = {
  title: "Procedimientos y Estudios Oftalmológicos | Dra. Fiona Xacur",
  description: "Tratamientos avanzados en Mérida: adaptación de lentes esclerales, valoración para cirugía LASIK, catarata y queratocono con la Dra. Fiona Carolina Xacur García.",
};

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-32 pb-24 relative overflow-hidden">
      {/* Background SVG lens calibration lines */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <svg className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] text-cyan-500/10 animate-spin-slow" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="90" strokeWidth="0.5" strokeDasharray="2 10" />
          <circle cx="100" cy="100" r="80" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" strokeWidth="0.75" strokeDasharray="30 10 15 10" />
        </svg>
        <svg className="absolute left-[5%] bottom-[-10%] w-[350px] h-[350px] text-amber-500/5 animate-float-slow" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="85" strokeWidth="0.5" />
          <path d="M 0,100 Q 50,150 100,100 T 200,100" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]} />
        
        <FadeUp className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-8 mb-4 tracking-tight">
            Procedimientos y Cirugías Oculares
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-3xl leading-relaxed">
            Ofrecemos soluciones quirúrgicas y clínicas de vanguardia utilizando microtecnología láser para restaurar tu salud visual de forma segura y sin dolor.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map(service => (
            <StaggerItem key={service.id} className="h-full">
              <Link href={`/servicios/${service.slug}`} className="optical-card overflow-hidden flex flex-col sm:flex-row h-full group hover:border-cyan-500/30">
                <div className="sm:w-2/5 aspect-square sm:aspect-auto relative overflow-hidden bg-slate-900 border-b sm:border-b-0 sm:border-r border-cyan-500/10 flex-shrink-0">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                </div>
                <div className="sm:w-3/5 p-8 flex flex-col justify-center flex-grow">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/20 font-mono text-[8px] uppercase tracking-wider">{service.type}</span>
                    {service.duration && <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-900 font-mono text-[8px] uppercase tracking-wider">{service.duration}</span>}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors leading-snug">{service.name}</h2>
                  <p className="text-slate-400 text-xs md:text-sm line-clamp-3 mb-6 leading-relaxed">{service.description}</p>
                  <span className="text-cyan-400 font-mono font-bold transition-colors flex items-center gap-1.5 uppercase text-[10px] tracking-widest">
                    Ver Detalles Quirúrgicos <span className="group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}

