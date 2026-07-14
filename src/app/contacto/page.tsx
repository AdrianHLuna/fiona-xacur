import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export const metadata = {
  title: "Contacto y Ubicación | Dra. Fiona Carolina Xacur García",
  description: "Encuentra nuestros consultorios en Cliniteq y Medytec en Mérida, Yucatán, y agenda una valoración de oftalmología.",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-32 pb-24 relative overflow-hidden">
      {/* Background SVG decorative elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <svg className="absolute -left-10 top-[20%] w-[350px] h-[350px] text-cyan-500/10 animate-spin-slow" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="90" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" strokeWidth="0.5" strokeDasharray="5 5" />
        </svg>
        <svg className="absolute -right-16 bottom-[10%] w-[450px] h-[450px] text-amber-500/5 animate-float-slow" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="85" strokeWidth="0.5" strokeDasharray="20 10 5 10" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
        
        <FadeUp className="text-center mb-16 mt-8">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">Contacto y Ubicaciones</h1>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Consulte a la especialista en cualquiera de sus dos consultorios clínicos y quirúrgicos equipados con tecnología avanzada en Mérida, Yucatán.
          </p>
        </FadeUp>

        <div className="space-y-16 max-w-6xl mx-auto">
          {/* Consultorio 1: Cliniteq MID */}
          <FadeUp delay={0.2} className="optical-card overflow-hidden flex flex-col lg:flex-row border border-cyan-500/10 hover:border-cyan-500/20 shadow-2xl">
            {/* Mapa Cliniteq */}
            <div className="lg:w-1/2 min-h-[400px] bg-slate-900 relative overflow-hidden group">
              <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2678696803273!2d-89.63847292418579!3d20.98188178065476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56715b746816cf%3A0xb3deebc69229b4ec!2sCliniteq%20Mid!5e0!3m2!1ses-419!2smx!4v1710000000000!5m2!1ses-419!2smx"
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale invert group-hover:grayscale-0 group-hover:invert-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
              >
              </iframe>
            </div>
            
            {/* Info Cliniteq */}
            <div className="lg:w-1/2 p-10 flex flex-col justify-center bg-slate-950/60 relative z-20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-6 bg-cyan-500 rounded-full" /> Cliniteq MID
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group cursor-default">
                  <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Dirección</h4>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      Avenida 7 #310-A (entre Calle 50 y Calle 48), Col. García Ginerés, C.P. 97070, Mérida, Yucatán
                    </p>
                    <a href="https://maps.app.goo.gl/9Zp26" target="_blank" rel="noreferrer" className="text-cyan-400 font-mono font-bold text-[10px] mt-2.5 inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors">Abrir Google Maps &rarr;</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-default">
                  <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <FaClock size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Horarios de Consulta</h4>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      Lunes, miércoles y viernes: 8:00 - 13:00<br />
                      Lunes y jueves: 17:00 - 19:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Consultorio 2: Medytec */}
          <FadeUp delay={0.3} className="optical-card overflow-hidden flex flex-col lg:flex-row-reverse border border-cyan-500/10 hover:border-cyan-500/20 shadow-2xl">
            {/* Mapa Medytec */}
            <div className="lg:w-1/2 min-h-[400px] bg-slate-900 relative overflow-hidden group">
              <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.295489678129!2d-89.623412!3d20.979612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56715b7b9b1ab3%3A0xb1b2bc34567efbcd!2sCalle%2054%20364%2C%20Centro%2C%2097000%20M%C3%A9rida%2C%20Yuc.!5e0!3m2!1ses-419!2smx!4v1710000000000!5m2!1ses-419!2smx"
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale invert group-hover:grayscale-0 group-hover:invert-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
              >
              </iframe>
            </div>
            
            {/* Info Medytec */}
            <div className="lg:w-1/2 p-10 flex flex-col justify-center bg-slate-950/60 relative z-20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-6 bg-cyan-500 rounded-full" /> Medytec
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group cursor-default">
                  <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Dirección</h4>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      Calle 54 #364 L (entre Calle 33 y Calle 35), Col. Mérida Centro, C.P. 97000, Mérida, Yucatán
                    </p>
                    <a href="https://maps.app.goo.gl/9Zp26" target="_blank" rel="noreferrer" className="text-cyan-400 font-mono font-bold text-[10px] mt-2.5 inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors">Abrir Google Maps &rarr;</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-default">
                  <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <FaClock size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Horarios de Consulta</h4>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      Martes y jueves: 8:00 - 13:00<br />
                      Sábado: 9:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Contact Info Footer / Communication Bar */}
        <FadeUp delay={0.4} className="max-w-6xl mx-auto mt-16 bg-slate-900/60 border border-cyan-500/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Comunícate Directamente</h3>
            <p className="text-slate-400 text-xs md:text-sm">¿Tienes una urgencia ocular o deseas agendar tu cita telefónicamente?</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-mono">
            <div className="flex flex-col">
              <span className="text-slate-500 text-[10px] uppercase font-sans font-bold tracking-wider">WhatsApp</span>
              <span className="text-white font-extrabold">{doctor.whatsapp}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500 text-[10px] uppercase font-sans font-bold tracking-wider">Llamadas</span>
              <span className="text-white font-extrabold">{doctor.phone}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500 text-[10px] uppercase font-sans font-bold tracking-wider">Urgencias 24/7</span>
              <span className="text-rose-400 font-extrabold">9993222513</span>
            </div>
          </div>
          <a href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white px-8 py-4 rounded-2xl font-extrabold text-sm hover:scale-105 transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
            <FaWhatsapp size={18} /> Enviar Mensaje
          </a>
        </FadeUp>
      </div>
    </div>
  );
}

