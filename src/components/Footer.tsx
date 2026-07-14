import Link from "next/link";
import { doctor } from "@/data/doctor";
import { diseases } from "@/data/diseases";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEye } from "react-icons/fa";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-cyan-500/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Contacto y Métodos de pago */}
          <div>
            <Link href="/" className="block mb-6">
              <img 
                src="/images/logo-horizontal-white.png" 
                alt={`Logo ${doctor.title} ${doctor.name}`}
                className="h-20 w-auto object-contain hover:opacity-95 transition"
              />
            </Link>
            <div className="flex flex-col gap-4 mb-8 text-sm">
              <a href={whatsappUrl} className="flex items-center gap-3 hover:text-cyan-400 transition-colors"><FaWhatsapp className="text-cyan-400 text-lg"/> <span className="font-mono">{doctor.whatsapp}</span></a>
              <a href={`tel:${doctor.phone}`} className="flex items-center gap-3 hover:text-cyan-400 transition-colors"><FaPhone className="text-cyan-400 text-lg"/> <span className="font-mono">{doctor.phone}</span></a>
              <p className="flex items-start gap-3"><FaMapMarkerAlt className="text-cyan-400 text-lg mt-1 flex-shrink-0"/> <span className="leading-relaxed">{doctor.address}, {doctor.city}, {doctor.state}</span></p>
            </div>
            
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Métodos de Pago</h4>
            <div className="flex flex-wrap gap-2">
              {doctor.paymentMethods.map(method => (
                <span key={method} className="bg-slate-900 border border-slate-800 text-[10px] font-semibold px-2.5 py-1 rounded-md text-slate-300">{method}</span>
              ))}
            </div>
          </div>

          {/* Col 2: Padecimientos */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Padecimientos</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {diseases.map(d => (
                <li key={d.id}><Link href={`/enfermedades/${d.slug}`} className="hover:text-cyan-400 transition-colors">{d.name}</Link></li>
              ))}
              <li className="mt-2"><Link href="/enfermedades" className="text-cyan-400 font-bold text-xs tracking-wider uppercase hover:text-amber-400 transition-colors">Ver todos &rarr;</Link></li>
            </ul>
          </div>

          {/* Col 3: Servicios */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Procedimientos</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {services.map(s => (
                <li key={s.id}><Link href={`/servicios/${s.slug}`} className="hover:text-cyan-400 transition-colors">{s.name}</Link></li>
              ))}
              <li className="mt-2"><Link href="/servicios" className="text-cyan-400 font-bold text-xs tracking-wider uppercase hover:text-amber-400 transition-colors">Ver todos &rarr;</Link></li>
            </ul>
          </div>

          {/* Col 4: Síntomas y Legales */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Síntomas</h3>
            <ul className="flex flex-col gap-3 text-sm mb-8">
              {symptoms.slice(0,5).map(sym => (
                <li key={sym.id}><Link href={`/sintomas/${sym.slug}`} className="hover:text-cyan-400 transition-colors">{sym.name}</Link></li>
              ))}
            </ul>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Legal</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/aviso-de-privacidad" className="hover:text-white transition-colors">Aviso de Privacidad</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-cyan-500/10 pt-8 text-center text-xs flex flex-col gap-2 font-mono text-slate-500">
          <p>ced. prof: {doctor.cedula} | ced. esp: {doctor.cedulaEspecialidad} | COFEPRIS: {doctor.cofepris}</p>
          <p>© {new Date().getFullYear()} Todos los derechos reservados. Desarrollado bajo Arquitectura AISO v2.0.</p>
        </div>
      </div>
    </footer>
  );
}

