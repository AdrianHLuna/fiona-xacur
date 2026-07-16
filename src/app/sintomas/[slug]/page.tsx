import { symptoms } from "@/data/symptoms";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaExclamationTriangle, FaCalendarCheck, FaEye } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export async function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const symptom = symptoms.find((s) => s.slug === resolvedParams.slug);
  if (!symptom) return {};
  
  return {
    title: symptom.seo.title,
    description: symptom.seo.description,
    keywords: symptom.seo.keywords,
  };
}

export default async function SymptomPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const symptom = symptoms.find((s) => s.slug === resolvedParams.slug);
  if (!symptom) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalSignOrSymptom",
    name: symptom.name,
    description: symptom.description,
    cause: symptom.causes.map(c => ({ "@type": "MedicalCause", name: c })),
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-32 pb-24 relative overflow-hidden">
      <StructuredData data={schema} />

      {/* Background SVG decorative elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <svg className="absolute -left-16 top-[15%] w-[450px] h-[450px] text-cyan-500/10 animate-spin-slow" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="85" strokeWidth="0.5" strokeDasharray="5 5" />
          <circle cx="100" cy="100" r="70" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="55" strokeWidth="0.5" />
        </svg>
        <svg className="absolute -right-10 bottom-[10%] w-[350px] h-[350px] text-amber-500/5 animate-float-slow" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="80" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" strokeWidth="0.5" strokeDasharray="10 5" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas", href: "/sintomas" }, { label: symptom.name }]} />
        
        {/* Hero Síntoma */}
        <FadeUp className="flex flex-col lg:flex-row gap-8 mb-16 mt-8">
          <div className="lg:w-1/2 bg-gradient-to-br from-cyan-950/65 to-slate-900 border border-cyan-500/20 rounded-[2.5rem] p-8 lg:p-12 text-white relative overflow-hidden flex flex-col justify-center shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
            <h1 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight">{symptom.name}</h1>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">{symptom.description}</p>
          </div>
          <div className="lg:w-1/2 min-h-[300px] bg-slate-900 border border-cyan-500/10 rounded-[2.5rem] flex items-center justify-center shadow-xl relative overflow-hidden group">
             <img 
               src={symptom.image} 
               alt={symptom.name}
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/40 via-slate-900/60 to-transparent pointer-events-none" />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contenido Principal */}
          <StaggerContainer className="lg:col-span-2 space-y-12">
            
            <StaggerItem>
              <div className="bg-amber-500/10 border border-amber-500/20 p-8 rounded-3xl group shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold text-amber-400 mb-4 flex items-center gap-3">
                  <FaExclamationTriangle className="group-hover:scale-110 transition-transform text-amber-400" /> ¿Por qué no debes ignorarlo?
                </h2>
                <p className="text-sm md:text-base text-amber-200 leading-relaxed">
                  {symptom.whyConsult}
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">Posibles Causas de este Síntoma</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {symptom.causes.map(cause => (
                  <li key={cause} className="optical-card p-6 font-semibold text-slate-300 text-xs md:text-sm hover:border-cyan-500/30 transition-all cursor-default leading-relaxed">
                    {cause}
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-slate-500 mt-4 italic font-mono">* Nota: Esta información es meramente descriptiva. Solo un oftalmólogo certificado puede diagnosticar de forma precisa la causa subyacente mediante mapeo de retina.</p>
            </StaggerItem>
          </StaggerContainer>

          {/* Sidebar CTA */}
          <FadeUp delay={0.2} className="lg:col-span-1">
            <div className="sticky top-32 bg-gradient-to-br from-cyan-950 to-slate-900 border border-cyan-500/30 rounded-3xl p-8 text-white shadow-2xl group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl pointer-events-none animate-pulse" />
              <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight">La Dra. Fiona Xacur atiende este síntoma</h3>
              <p className="text-slate-400 text-xs md:text-sm mb-8 leading-relaxed">Programe una revisión oftalmológica completa para diagnosticar de forma precisa la causa y recibir un tratamiento personalizado.</p>
              <a href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="block w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 font-extrabold py-4 rounded-xl hover:scale-105 transition-all shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25">
                <FaCalendarCheck className="group-hover:rotate-12 transition-transform" /> Agendar Valoración
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

