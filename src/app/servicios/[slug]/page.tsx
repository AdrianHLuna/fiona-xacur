import { services } from "@/data/services";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaCheckCircle, FaInfoCircle, FaCalendarCheck, FaEye } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) return {};
  
  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.longDescription,
    procedureType: service.type === "ambulatorio" ? "NoninvasiveProcedure" : "SurgicalProcedure",
    howPerformed: service.description,
    preparation: service.anesthesiaType ? `Anestesia: ${service.anesthesiaType}` : undefined,
    performer: {
      "@type": "Physician",
      name: `${doctor.title} ${doctor.name}`,
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-32 pb-24 relative overflow-hidden">
      <StructuredData data={schema} />

      {/* Background SVG decorative elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <svg className="absolute -left-16 top-[15%] w-[450px] h-[450px] text-cyan-500/10 animate-spin-slow" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="85" strokeWidth="0.5" strokeDasharray="5 5" />
          <circle cx="100" cy="100" r="70" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="50" strokeWidth="0.5" />
        </svg>
        <svg className="absolute -right-10 bottom-[10%] w-[350px] h-[350px] text-amber-500/5 animate-float-slow" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="80" strokeWidth="0.5" />
          <path d="M 0,100 Q 50,150 100,100 T 200,100" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/servicios" }, { label: service.name }]} />
        
        {/* Hero Servicio */}
        <FadeUp className="flex flex-col lg:flex-row gap-8 mb-16 mt-8">
          <div className="lg:w-1/2 bg-gradient-to-br from-cyan-950/65 to-slate-900 border border-cyan-500/20 rounded-[2.5rem] p-8 lg:p-12 text-white relative overflow-hidden flex flex-col justify-center shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
            <div>
              <span className="inline-block px-4 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 font-mono text-[9px] font-bold uppercase tracking-wider mb-6">
                {service.type}
              </span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight">{service.name}</h1>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">{service.longDescription}</p>
          </div>
          <div className="lg:w-1/2 min-h-[300px] bg-slate-900 border border-cyan-500/10 rounded-[2.5rem] flex items-center justify-center shadow-xl relative overflow-hidden group">
             <img 
               src={service.image} 
               alt={service.name}
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
                <FaInfoCircle className="text-amber-400" /> Ficha Técnica del Procedimiento
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-900/40 border border-cyan-500/10 p-8 rounded-3xl backdrop-blur-md">
                <div className="border-b border-cyan-500/10 pb-4">
                  <dt className="text-xs font-bold text-slate-400 uppercase tracking-wide">Duración</dt>
                  <dd className="text-base font-semibold text-white mt-1">{service.duration || "Variable"}</dd>
                </div>
                <div className="border-b border-cyan-500/10 pb-4">
                  <dt className="text-xs font-bold text-slate-400 uppercase tracking-wide">Recuperación</dt>
                  <dd className="text-base font-semibold text-white mt-1">{service.recoveryTime || "Inmediata"}</dd>
                </div>
                <div className="border-b sm:border-0 border-cyan-500/10 pb-4 sm:pb-0">
                  <dt className="text-xs font-bold text-slate-400 uppercase tracking-wide">¿Es doloroso?</dt>
                  <dd className="text-base font-semibold text-white mt-1">{service.isPainful ? "Requiere anestesia especial" : "Completamente indoloro"}</dd>
                </div>
                {service.priceRange && (
                  <div>
                    <dt className="text-xs font-bold text-slate-400 uppercase tracking-wide">Costo Estimado</dt>
                    <dd className="text-base font-semibold text-white mt-1">{service.priceRange}</dd>
                  </div>
                )}
                
                {/* Custom Specs */}
                {service.technicalSpecs && Object.entries(service.technicalSpecs).map(([key, value]) => (
                  <div key={key} className="col-span-1 sm:col-span-2 border-t border-cyan-500/10 pt-4 mt-2">
                    <dt className="text-xs font-bold text-slate-400 uppercase tracking-wide">{key}</dt>
                    <dd className="text-base font-semibold text-white mt-1">{value}</dd>
                  </div>
                ))}
              </dl>
            </StaggerItem>

            <StaggerItem>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3 tracking-tight">
                <FaCheckCircle className="text-emerald-400" /> Beneficios Principales
              </h2>
              <ul className="grid grid-cols-1 gap-4">
                {service.benefits.map(benefit => (
                  <li key={benefit} className="optical-card p-5 flex items-start gap-3 hover:border-cyan-500/30 group">
                    <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-slate-200 text-xs md:text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            <StaggerItem>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">Cuidados y Recomendaciones Postoperatorias</h2>
              <div className="optical-card p-8 hover:border-cyan-500/20">
                <ul className="list-disc list-inside text-slate-300 text-xs md:text-sm space-y-3 leading-relaxed">
                  {service.postOpRecommendations.map(rec => <li key={rec} className="hover:text-cyan-400 transition-colors">{rec}</li>)}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Sidebar CTA */}
          <FadeUp delay={0.2} className="lg:col-span-1">
            <div className="sticky top-32 bg-gradient-to-br from-cyan-950 to-slate-900 border border-cyan-500/30 rounded-3xl p-8 text-white shadow-2xl group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl pointer-events-none animate-pulse" />
              <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight">¿Requiere este procedimiento?</h3>
              <p className="text-slate-400 text-xs md:text-sm mb-8 leading-relaxed">La especialista evaluará minuciosamente su caso clínico durante la consulta para determinar la aptitud y el tratamiento idóneo.</p>
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

