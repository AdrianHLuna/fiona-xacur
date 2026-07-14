import Breadcrumbs from "@/components/Breadcrumbs";
import { doctor } from "@/data/doctor";

export const metadata = {
  title: "Aviso de Privacidad",
  description: "Aviso de Privacidad y manejo de datos personales.",
};

export default function AvisoPrivacidadPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Aviso de Privacidad" }]} />
        
        <div className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-sm border border-slate-100 mt-8 max-w-4xl mx-auto prose prose-slate">
          <h1 className="text-4xl font-black text-slate-900 mb-8">Aviso de Privacidad</h1>
          
          <p>Con fundamento en los artículos 15 y 16 de la Ley Federal de Protección de Datos Personales en Posesión de Particulares hacemos de su conocimiento que la <strong>{doctor.title} {doctor.name}</strong>, con domicilio en <strong>{doctor.address}, {doctor.city}, {doctor.state}</strong> es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.</p>
          
          <h2>Fines del tratamiento de datos personales</h2>
          <p>Su información personal será utilizada para las siguientes finalidades: proveer los servicios y productos que ha solicitado; notificarle sobre nuevos servicios o productos que tengan relación con los ya contratados o adquiridos; comunicarle sobre cambios en los mismos; elaborar estudios y programas que son necesarios para determinar hábitos de consumo; realizar evaluaciones periódicas de nuestros productos y servicios a efecto de mejorar la calidad de los mismos; evaluar la calidad del servicio que brindamos, y en general, para dar cumplimiento a las obligaciones que hemos contraído con usted.</p>
          
          <h2>Datos recabados</h2>
          <p>Para las finalidades antes mencionadas, requerimos obtener los siguientes datos personales:</p>
          <ul>
            <li>Nombre completo</li>
            <li>Teléfono fijo y/o celular</li>
            <li>Correo electrónico</li>
            <li>Antecedentes médicos (exclusivamente para la apertura de expediente clínico)</li>
          </ul>
          
          <h2>Derechos ARCO</h2>
          <p>Es importante informarle que usted tiene derecho al Acceso, Rectificación y Cancelación de sus datos personales, a Oponerse al tratamiento de los mismos o a revocar el consentimiento que para dicho fin nos haya otorgado.</p>
          <p>Para ello, es necesario que envíe la solicitud en los términos que marca la Ley en su Art. 29 a nuestro Departamento de Protección de Datos Personales, o bien, se comunique al teléfono <strong>{doctor.phone}</strong>.</p>
          
          <p className="mt-12 text-sm text-slate-500">Última actualización: {new Date().toLocaleDateString('es-MX')}</p>
        </div>
      </div>
    </div>
  );
}
