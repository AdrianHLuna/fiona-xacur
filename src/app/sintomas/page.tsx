import Link from "next/link";
import { symptoms } from "@/data/symptoms";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import { FaShieldAlt } from "react-icons/fa";

export const metadata = {
  title: "Síntomas y Señales de Alerta Visual | Dra. Fiona Xacur",
  description: "Conoce los síntomas de alerta ocular (ojo rojo, visión borrosa, carnosidad o dolor en el ojo) que requieren valoración por la Dra. Fiona Xacur.",
};

export default function SintomasPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-32 pb-24 relative overflow-hidden">
      {/* Background SVG optics */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <svg className="absolute -left-10 -bottom-10 w-[350px] h-[350px] text-cyan-500/10 animate-spin-slow" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="90" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" strokeWidth="0.5" strokeDasharray="5 5" />
        </svg>
        <svg className="absolute right-0 top-1/4 w-[400px] h-[400px] text-amber-500/5 animate-float-slow" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="85" strokeWidth="0.5" strokeDasharray="20 10 5 10" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas" }]} />
        
        <FadeUp className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-8 mb-4 tracking-tight">
            Síntomas de Alerta Visual
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-3xl leading-relaxed">
            Identificar a tiempo señales de distorsión o anomalías en tu campo visual puede prevenir desgarros en la retina, glaucoma silencioso u otras complicaciones irreversibles.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {symptoms.map(sym => (
            <StaggerItem key={sym.id} className="h-full">
              <Link href={`/sintomas/${sym.slug}`} className="optical-card overflow-hidden flex flex-col h-full hover:border-amber-400/40 group">
                <div className="aspect-video relative overflow-hidden bg-slate-900 border-b border-amber-500/10">
                  <img 
                    src={sym.image} 
                    alt={sym.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                </div>
                <div className="p-8 pt-0 flex flex-col flex-grow">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-snug">{sym.name}</h2>
                  <p className="text-slate-400 text-xs md:text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">{sym.description}</p>
                  <span className="text-cyan-400 font-mono font-bold flex items-center gap-1.5 uppercase text-[10px] tracking-widest mt-auto group-hover:text-amber-400 transition-colors">
                    Analizar Causas <span className="group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
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

