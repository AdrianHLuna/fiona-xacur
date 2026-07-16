import { diseases } from "@/data/diseases";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaCheckCircle, FaExclamationTriangle, FaStethoscope, FaEye } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export async function generateStaticParams() {
  return diseases.map((disease) => ({
    slug: disease.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const disease = diseases.find((d) => d.slug === resolvedParams.slug);
  if (!disease) return {};
  
  return {
    title: disease.seo.title,
    description: disease.seo.description,
    keywords: disease.seo.keywords,
  };
}

export default async function DiseasePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const disease = diseases.find((d) => d.slug === resolvedParams.slug);
  if (!disease) notFound();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      name: disease.name,
      description: disease.description,
      signOrSymptom: disease.symptoms.map(s => ({ "@type": "MedicalSignOrSymptom", name: s })),
      riskFactor: disease.riskFactors.map(r => ({ "@type": "MedicalRiskFactor", name: r })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: disease.faqs.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-32 pb-24 relative overflow-hidden">
      <StructuredData data={schemas} />

      {/* Background SVG decorative elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <svg className="absolute -right-16 top-[15%] w-[450px] h-[450px] text-cyan-500/10 animate-spin-slow" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="85" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="70" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="50" strokeWidth="0.5" />
        </svg>
        <svg className="absolute -left-10 bottom-[10%] w-[350px] h-[350px] text-amber-500/5 animate-float-slow" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="80" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" strokeWidth="0.5" strokeDasharray="10 5" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades", href: "/enfermedades" }, { label: disease.name }]} />
        
        {/* Hero Enfermedad */}
        <FadeUp className="flex flex-col lg:flex-row gap-8 mb-16 mt-8">
          <div className="lg:w-1/2 bg-gradient-to-br from-cyan-950/65 to-slate-900 border border-cyan-500/20 rounded-[2.5rem] p-8 lg:p-12 text-white relative overflow-hidden flex flex-col justify-center shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
            {disease.technicalName && (
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest mb-3">{disease.technicalName}</span>
            )}
            <h1 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight">{disease.name}</h1>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">{disease.description}</p>
          </div>
          <div className="lg:w-1/2 min-h-[300px] bg-slate-900 border border-cyan-500/10 rounded-[2.5rem] flex items-center justify-center shadow-xl relative overflow-hidden group">
             <img 
               src={disease.image} 
               alt={disease.name}
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/40 via-slate-900/60 to-transparent pointer-events-none" />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contenido Principal */}
          <StaggerContainer className="lg:col-span-2 space-y-12">
            
            <StaggerItem>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3 tracking-tight">
                <FaExclamationTriangle className="text-amber-400" /> Síntomas y Señales de Alarma
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {disease.symptoms.map(sym => (
                  <li key={sym} className="optical-card p-5 flex items-start gap-3 shadow-sm hover:border-cyan-500/30 group">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="font-semibold text-slate-200 text-xs md:text-sm leading-relaxed">{sym}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            <StaggerItem>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3 tracking-tight">
                <FaStethoscope className="text-cyan-400" /> Causas y Factores de Riesgo
              </h2>
              <div className="optical-card p-8 hover:border-cyan-500/20">
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3 text-white">Causas Principales</h3>
                  <ul className="list-disc list-inside text-slate-300 text-xs md:text-sm space-y-2 leading-relaxed">
                    {disease.causes.map(cause => <li key={cause} className="hover:text-cyan-400 transition-colors">{cause}</li>)}
                  </ul>
                </div>
                {disease.riskFactors && disease.riskFactors.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-white">Factores de Riesgo</h3>
                    <ul className="list-disc list-inside text-slate-300 text-xs md:text-sm space-y-2 leading-relaxed">
                      {disease.riskFactors.map(factor => <li key={factor} className="hover:text-cyan-400 transition-colors">{factor}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </StaggerItem>

            <StaggerItem>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3 tracking-tight">
                <FaCheckCircle className="text-emerald-400" /> Opciones de Tratamiento Clínico
              </h2>
              <div className="flex flex-wrap gap-3">
                {disease.treatments.map(treatment => (
                  <span key={treatment} className="bg-cyan-950/60 text-cyan-400 border border-cyan-500/20 px-5 py-2.5 rounded-full font-bold text-xs md:text-sm hover:border-cyan-400 hover:scale-105 transition-all cursor-default shadow-md">
                    {treatment}
                  </span>
                ))}
              </div>
            </StaggerItem>

            {/* FAQs */}
            <StaggerItem>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">Preguntas Frecuentes</h2>
              <div className="space-y-4">
                {disease.faqs.map((faq, index) => (
                  <div key={index} className="optical-card p-6 hover:border-cyan-500/20">
                    <h3 className="font-bold text-base md:text-lg text-white mb-2">{faq.question}</h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Sidebar CTA */}
          <FadeUp delay={0.2} className="lg:col-span-1">
            <div className="sticky top-32 bg-gradient-to-br from-cyan-950 to-slate-900 border border-cyan-500/30 rounded-3xl p-8 text-white shadow-2xl group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl pointer-events-none animate-pulse" />
               <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight">¿Tienes síntomas de {disease.name}?</h3>
               <p className="text-slate-400 text-xs md:text-sm mb-8 leading-relaxed">Una detección temprana y una valoración especializada a tiempo es clave. La {doctor.title} {doctor.name} puede ayudarte.</p>
               <a href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="block w-full text-center bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 font-extrabold py-4 rounded-xl hover:scale-105 transition-all shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25">
                 Agendar Valoración
               </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

