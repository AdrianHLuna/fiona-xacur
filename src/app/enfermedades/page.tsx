import Link from "next/link";
import { diseases } from "@/data/diseases";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import { FaEye } from "react-icons/fa";

export const metadata = {
  title: "Enfermedades y Padecimientos Visuales | Dra. Fiona Xacur",
  description: "Información médica sobre queratocono, cataratas, ojo seco, miopía y astigmatismo tratados por la Dra. Fiona Carolina Xacur García en Mérida.",
};

export default function EnfermedadesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-32 pb-24 relative overflow-hidden">
      {/* Background SVG optics */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <svg className="absolute -left-16 -top-16 w-[400px] h-[400px] text-cyan-500/10 animate-spin-slow" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="80" strokeWidth="0.5" strokeDasharray="5 5" />
          <circle cx="100" cy="100" r="60" strokeWidth="0.75" />
          <line x1="100" y1="0" x2="100" y2="200" strokeWidth="0.25" />
          <line x1="0" y1="100" x2="200" y2="100" strokeWidth="0.25" />
        </svg>
        <svg className="absolute -right-20 -bottom-20 w-[500px] h-[500px] text-amber-500/5 animate-spin-reverse-slow" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="90" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" strokeWidth="0.75" strokeDasharray="20 10" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades" }]} />
        
        <FadeUp className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-8 mb-4 tracking-tight">
            Enfermedades y Padecimientos Visuales
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-3xl leading-relaxed">
            Consulte información detallada y científicamente respaldada sobre las principales condiciones del ojo que diagnosticamos y tratamos con técnicas de vanguardia.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diseases.map(disease => (
            <StaggerItem key={disease.id} className="h-full">
              <Link href={`/enfermedades/${disease.slug}`} className="optical-card overflow-hidden flex flex-col h-full hover:border-cyan-500/30 group">
                <div className="aspect-video relative overflow-hidden bg-slate-900 border-b border-cyan-500/10 flex items-center justify-center p-4">
                  <div className="w-14 h-14 rounded-full border border-cyan-400/20 flex items-center justify-center relative">
                    <FaEye className="text-cyan-400/30 group-hover:text-cyan-400 transition-colors group-hover:scale-110 duration-500 text-2xl" />
                    <div className="absolute inset-0 bg-cyan-400/5 rounded-full blur-sm" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-snug">{disease.name}</h2>
                  <p className="text-slate-400 text-xs md:text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">{disease.description}</p>
                  <span className="text-cyan-400 font-mono font-bold group-hover:text-amber-400 transition-colors flex items-center gap-1.5 uppercase text-[10px] tracking-widest mt-auto">
                    Conocer Detalles <span className="group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
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

