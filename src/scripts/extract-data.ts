import { doctor } from "../data/doctor";
import { services } from "../data/services";
import { symptoms } from "../data/symptoms";
import { diseases } from "../data/diseases";
import * as fs from "fs";
import * as path from "path";

// Limpiar y conservar sólo las propiedades válidas de DoctorProfile
const cleanDoctor = {
  name: doctor.name,
  title: doctor.title,
  specialty: doctor.specialty,
  specialistTitle: doctor.specialistTitle || "",
  subspecialty: doctor.subspecialty || "",
  cedula: doctor.cedula,
  cedulaEspecialidad: doctor.cedulaEspecialidad || "",
  cofepris: doctor.cofepris || "",
  phone: doctor.phone,
  whatsapp: doctor.whatsapp,
  email: doctor.email,
  address: doctor.address,
  city: doctor.city,
  state: doctor.state,
  country: doctor.country,
  googleMapsUrl: doctor.googleMapsUrl,
  consultationPrice: doctor.consultationPrice,
  paymentMethods: doctor.paymentMethods,
  insurances: doctor.insurances || [],
  schedule: doctor.schedule,
  photo: doctor.photo || "/images/doctor.webp",
  bio: doctor.bio,
  philosophy: doctor.philosophy,
  experience: doctor.experience || [],
  certifications: doctor.certifications || [],
  education: doctor.education || [],
  sameAs: doctor.sameAs || [],
  ga4Id: doctor.ga4Id || ""
};

// Limpiar y conservar sólo las propiedades válidas de MedicalService
const cleanServices = services.map(s => ({
  id: s.id,
  slug: s.slug,
  name: s.name,
  description: s.description,
  longDescription: s.longDescription,
  type: s.type,
  anesthesiaType: s.anesthesiaType || "",
  duration: s.duration || "",
  recoveryTime: s.recoveryTime || "",
  isPainful: s.isPainful,
  benefits: s.benefits || [],
  postOpRecommendations: s.postOpRecommendations || [],
  priceRange: s.priceRange || "",
  technicalSpecs: s.technicalSpecs || {},
  relatedConditions: s.relatedConditions || [],
  image: s.image,
  seo: s.seo
}));

// Limpiar y conservar sólo las propiedades válidas de Symptom
const cleanSymptoms = symptoms.map(s => ({
  id: s.id,
  slug: s.slug,
  name: s.name,
  description: s.description,
  causes: s.causes || [],
  whyConsult: s.whyConsult,
  relatedConditions: s.relatedConditions || [],
  image: s.image,
  seo: s.seo
}));

// Limpiar y conservar sólo las propiedades válidas de MedicalCondition
const cleanDiseases = diseases.map(d => ({
  id: d.id,
  slug: d.slug,
  name: d.name,
  technicalName: d.technicalName || "",
  description: d.description,
  symptoms: d.symptoms || [],
  causes: d.causes || [],
  riskFactors: d.riskFactors || [],
  mexicoStats: d.mexicoStats || "",
  complications: d.complications || [],
  treatments: d.treatments || [],
  faqs: d.faqs || [],
  sources: d.sources || [],
  relatedServices: d.relatedServices || [],
  relatedSymptoms: d.relatedSymptoms || [],
  image: d.image,
  seo: d.seo
}));

// Aviso de Privacidad
const privacyPolicy = {
  title: "Aviso de Privacidad",
  intro: `Con fundamento en los artículos 15 y 16 de la Ley Federal de Protección de Datos Personales en Posesión de Particulares hacemos de su conocimiento que la ${cleanDoctor.title} ${cleanDoctor.name}, con domicilio en ${cleanDoctor.address}, ${cleanDoctor.city}, ${cleanDoctor.state} es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.`,
  sections: [
    {
      title: "Fines del tratamiento de datos personales",
      content: "Su información personal será utilizada para las siguientes finalidades: proveer los servicios y productos que ha solicitado; notificarle sobre nuevos servicios o productos que tengan relación con los ya contratados o adquiridos; comunicarle sobre cambios en los mismos; elaborar estudios y programas que son necesarios para determinar hábitos de consumo; realizar evaluaciones periódicas de nuestros productos y servicios a efecto de mejorar la calidad de los mismos; evaluar la calidad del servicio que brindamos, y en general, para dar cumplimiento a las obligaciones que hemos contraído con usted."
    },
    {
      title: "Datos recabados",
      content: "Para las finalidades antes mencionadas, requerimos obtener los siguientes datos personales:\n• Nombre completo\n• Teléfono fijo y/o celular\n• Correo electrónico\n• Antecedentes médicos (exclusivamente para la apertura de expediente clínico)"
    },
    {
      title: "Derechos ARCO",
      content: `Es importante informarle que usted tiene derecho al Acceso, Rectificación y Cancelación de sus datos personales, a Oponerse al tratamiento de los mismos o a revocar el consentimiento que para dicho fin nos haya otorgado. Para ello, es necesario que envíe la solicitud en los términos que marca la Ley en su Art. 29 a nuestro Departamento de Protección de Datos Personales, o bien, se comunique al teléfono ${cleanDoctor.phone}.`
    }
  ],
  lastUpdate: new Date().toLocaleDateString('es-MX')
};

// Compilar toda la información
const fullData = {
  doctor: cleanDoctor,
  services: cleanServices,
  symptoms: cleanSymptoms,
  diseases: cleanDiseases,
  privacyPolicy: privacyPolicy
};

// Escribir el archivo final data.json en la raíz del proyecto
const outputPath = path.resolve(__dirname, "../../data.json");
fs.writeFileSync(outputPath, JSON.stringify(fullData, null, 2), "utf8");

console.log(`[OK] Datos consolidados correctamente en: ${outputPath}`);
console.log(`- Perfil Doctor: 1`);
console.log(`- Servicios: ${cleanServices.length}`);
console.log(`- Síntomas: ${cleanSymptoms.length}`);
console.log(`- Enfermedades: ${cleanDiseases.length}`);
