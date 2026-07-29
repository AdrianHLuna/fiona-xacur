import { MedicalService } from "@/types/schema";

export const services: MedicalService[] = [
  {
    "id": "serv-consulta-general",
    "slug": "consulta-oftalmologica-general",
    "name": "Consulta Oftalmológica General y Subsecuente",
    "description": "Evaluación clínica completa de la agudeza visual y la salud ocular, que incluye graduación de lentes, toma de presión intraocular , biomicroscopía y examen de fondo de ojo.",
    "longDescription": "La consulta oftalmológica general realizada por la Dra. Fiona Xacur evalúa minuciosamente el estado de salud de tus ojos. Incluye la medición digital de tu agudeza visual, examen con lámpara de hendidura de las estructuras del ojo (córnea, iris, conjuntiva), tonometría para medir la presión intraocular (previniendo el glaucoma), y la exploración bajo dilatación pupilar de tu retina y nervio óptico. Es vital para detectar de manera temprana padecimientos que ponen en riesgo tu visión.",
    "type": "consultorio",
    "anesthesiaType": "Gotas dilatadoras y anestésicas (si se requiere)",
    "duration": "30 a 45 minutos",
    "recoveryTime": "Inmediata (se sugiere llevar lentes de sol por la dilatación pupilar)",
    "isPainful": false,
    "benefits": [
      "Precisión en la graduación de tus lentes",
      "Detección y tratamiento oportuno de enfermedades oculares asintomáticas",
      "Descarte y control de presión intraocular elevada (glaucoma)",
      "Evaluación experta de la córnea y la superficie ocular"
    ],
    "postOpRecommendations": [
      "Traer lentes de sol para mitigar la luz solar a la salida de la consulta debido a las gotas dilatadoras.",
      "Evitar conducir vehículos en las siguientes 3 a 4 horas tras la dilatación de pupila.",
      "Presentar tus anteojos de uso habitual para comparar tu visión.",
      "Dentro de lo posible, acudir sin maquillaje en los ojos."
    ],
    "priceRange": "$1,000 MXN",
    "technicalSpecs": {
      "Equipos": "Autorefractómetro digital Nidek, Lámpara de hendidura con fotografía, Tonómetro de mínimo contacto icare",
      "Indicación": "Chequeo visual anual recomendado para niños, adultos y pacientes diabéticos"
    },
    "relatedConditions": [
      "cond-miopia-y-astigmatismo",
      "cond-hipermetropia-y-presbicia",
      "cond-cataratas",
      "cond-glaucoma",
      "cond-retinopatia"
    ],
    "image": "/servicios/consulta.png",
    "seo": {
      "title": "Consulta Oftalmológica en Mérida | Dra. Fiona Xacur",
      "description": "Agenda tu consulta oftalmológica integral en Mérida. Incluye examen de la vista, toma de presión y fondo de ojo. Costo: $1,000 MXN.",
      "keywords": [
        "oftalmólogo Mérida",
        "examen de la vista Mérida",
        "doctor de los ojos Mérida",
        "consulta de oftalmología costo"
      ]
    }
  },
  {
    "id": "serv-adaptacion-lentes-esclerales",
    "slug": "adaptacion-lentes-esclerales",
    "name": "Adaptación de Lentes de Contacto Esclerales",
    "description": "Estudio y adaptación personalizada de lentes esclerales rígidos permeables al gas, diseñados para mejorar la agudeza visual en queratocono o córneas irregulares.",
    "longDescription": "La adaptación de lentes esclerales es un procedimiento altamente especializado enfocado en pacientes con córneas sumamente irregulares, queratocono avanzado o sequedad ocular extrema. A diferencia de los lentes de contacto rígidos tradicionales, el lente escleral es más grande y se apoya en la esclera (la parte blanca del ojo), pasando por encima de la córnea sin tocarla. El espacio intermedio se llena con solución salina estéril, creando una superficie refractiva regular que proporciona una visión nítida excepcional y alivio de síntomas de ojo seco.",
    "type": "consultorio",
    "anesthesiaType": "Gotas anestésicas de tetracaína",
    "duration": "60 minutos",
    "recoveryTime": "Inmediata",
    "isPainful": false,
    "benefits": [
      "Calidad visual excepcional en córneas con queratocono o astigmatismos irregulares",
      "Excelente comodidad al no haber fricción directa con la córnea sensible",
      "Protección y humectación continua para pacientes con ojo seco severo",
      "Estabilidad superior en el ojo sin riesgo de salirse"
    ],
    "postOpRecommendations": [
      "La consulta incluye la manipulación con lentes de prueba en consultorio para evaluar la adaptación óptima.",
      "El costo cubre la consulta de adaptación y pruebas; no incluye el costo de fabricación de los lentes personalizados."
    ],
    "priceRange": "$1,000 MXN (Consulta de adaptación) + $2,000 (topografía de la córnea)",
    "technicalSpecs": {
      "Estudio": "Prueba de lentes esclerales de diagnóstico, mapeo topográfico corneal",
      "Material del lente": "Polímero rígido altamente permeable al oxígeno (gas permeable)"
    },
    "relatedConditions": [
      "cond-queratocono",
      "cond-ojo-seco",
      "cond-miopia-y-astigmatismo"
    ],
    "image": "/servicios/lentes-esclerales.png",
    "seo": {
      "title": "Adaptación de Lentes Esclerales Mérida | Dra. Fiona Xacur",
      "description": "Especialista en adaptación de lentes esclerales en Mérida para queratocono y ojo seco. Recupere su visión con la Dra. Fiona Xacur.",
      "keywords": [
        "lentes esclerales Mérida",
        "lentes para queratocono Mérida",
        "adaptación lentes de contacto rígidos",
        "oftalmólogo Mérida"
      ]
    }
  },
  {
    "id": "serv-valoracion-cirugia-lasik",
    "slug": "valoracion-cirugia-lasik",
    "name": "Valoración para Cirugía Refractiva Láser (LASIK)",
    "description": "Protocolo diagnóstico para determinar la candidatura del paciente a cirugía refractiva láser LASIK o PRK, que incluye topografía corneal avanzada y paquimetría.",
    "longDescription": "Antes de realizar una cirugía refractiva láser para corregir miopía, astigmatismo o hipermetropía, es indispensable realizar una valoración minuciosa de la córnea. Este servicio incluye una consulta clínica detallada, una topografía corneal digitalizada (para mapear el relieve, curvatura y regularidad de la córnea) y una paquimetría (medición del grosor corneal). Con estos estudios, la Dra. Fiona Xacur determina si la córnea del paciente tiene las condiciones ideales de grosor y forma para someterse a la remodelación con el láser excímer SCHWIND AMARIS 500E de forma 100% segura, descartando enfermedades como el queratocono subclínico.",
    "type": "consultorio",
    "anesthesiaType": "Anestesia tópica en gotas",
    "duration": "45 a 60 minutos",
    "recoveryTime": "Inmediata",
    "isPainful": false,
    "benefits": [
      "Descarte seguro de contraindicaciones anatómicas para cirugía láser",
      "Medición micrométrica del grosor de tu córnea",
      "Planificación personalizada del tratamiento láser guiada por topografía digital"
    ],
    "postOpRecommendations": [
      "Suspender el uso de lentes de contacto blandos al menos 7 a 10 días antes del estudio (15 días si son rígidos).",
      "Llevar lentes oscuros por la dilatación pupilar de la consulta."
    ],
    "priceRange": "Consulta de valoración con estudios incluidos $2,500-3,100",
    "technicalSpecs": {
      "Estudios incluidos": "Topografía corneal computarizada, Paquimetría de espesor corneal",
      "Tecnología Láser": "Láser Excímer SCHWIND AMARIS 500E",
      "Propósito": "Diagnóstico de idoneidad para cirugía láser refractiva (LASIK / PRK)"
    },
    "relatedConditions": [
      "cond-miopia-y-astigmatismo",
      "cond-hipermetropia-y-presbicia"
    ],
    "image": "/servicios/lasik.png",
    "seo": {
      "title": "Valoración para Cirugía Láser LASIK Mérida | Dra. Fiona Xacur",
      "description": "Estudio completo de valoración para cirugía láser de ojos en Mérida. Incluye topografía corneal y paquimetría. Dra. Fiona Xacur.",
      "keywords": [
        "valoración LASIK Mérida",
        "topografía corneal Mérida",
        "quitar lentes láser Mérida",
        "paquimetría corneal Mérida"
      ]
    }
  },
  {
    "id": "serv-valoracion-cirugia-catarata",
    "slug": "valoracion-cirugia-catarata",
    "name": "Valoración para Cirugía de Catarata",
    "description": "Estudio integral para planificar la cirugía de catarata, que incluye el cálculo del lente intraocular por interferometría óptica y el conteo de células endoteliales de la córnea.",
    "longDescription": "La valoración preoperatoria para cirugía de catarata es fundamental para garantizar el éxito visual. Este protocolo incluye el cálculo de precisión del lente intraocular (LIO) mediante interferometría, que determina la potencia del lente que reemplazará el cristalino dañado. Asimismo, se realiza un conteo celular endotelial por microscopía especular, que evalúa la salud y densidad de la capa interna de la córnea para asegurar que ésta tolere el procedimiento quirúrgico de facoemulsificación con la mayor seguridad y sin riesgos de descompensación posterior.",
    "type": "consultorio",
    "anesthesiaType": "Ninguna",
    "duration": "45 a 60 minutos",
    "recoveryTime": "Inmediata",
    "isPainful": false,
    "benefits": [
      "Cálculo matemático de alta precisión para el lente intraocular monofocal o multifocal",
      "Evaluación de la salud de las células de la córnea (conteo endotelial) para una cirugía segura",
      "Planificación personalizada del procedimiento quirúrgico por facoemulsificación"
    ],
    "postOpRecommendations": [
      "No requiere preparación previa especial.",
      "Traer recetas previas de anteojos y estudios generales si cuenta con ellos."
    ],
    "priceRange": "Consulta de valoración con cálculo de lente intraocular por interferometría y conteo celular endotelial por microscopía especular $3,800-5,300",
    "technicalSpecs": {
      "Estudios incluidos": "Biometría ocular por interferometría láser, Conteo celular endotelial (Microscopía especular)",
      "Tecnología": "Cálculo de lente intraocular de última generación"
    },
    "relatedConditions": [
      "cond-cataratas"
    ],
    "image": "/servicios/catarata.png",
    "seo": {
      "title": "Cálculo de Lente Intraocular y Valoración Catarata Mérida",
      "description": "Estudio de valoración de cataratas en Mérida. Incluye cálculo de lente intraocular por interferometría y conteo celular. Dra. Fiona Xacur.",
      "keywords": [
        "valoración catarata Mérida",
        "cálculo lente intraocular Mérida",
        "conteo celular endotelial",
        "cirujano de catarata Mérida"
      ]
    }
  },
  {
    "id": "serv-valoracion-queratocono",
    "slug": "valoracion-queratocono",
    "name": "Valoración y Monitoreo de Queratocono",
    "description": "Protocolo especializado para diagnosticar, evaluar y monitorear la progresión del queratocono, incluyendo topografía corneal digital de elevación y paquimetría.",
    "longDescription": "El queratocono requiere un monitoreo sumamente riguroso debido a su naturaleza progresiva. La valoración integral consta de la topografía corneal digital de elevación para evaluar el relieve anterior y posterior de la córnea y la paquimetría para medir el grosor corneal tridimensional. Esto permite estadificar la enfermedad, evaluar la idoneidad para crosslinking corneal, colocación de anillos intracorneales o adaptación de lentes esclerales, garantizando un manejo óptimo para frenar el daño visual.",
    "type": "consultorio",
    "anesthesiaType": "Ninguna",
    "duration": "45 minutos",
    "recoveryTime": "Inmediata",
    "isPainful": false,
    "benefits": [
      "Diagnóstico precoz del queratocono antes de que dañe severamente la visión",
      "Detección exacta de la progresión de la ectasia corneal comparando estudios previos",
      "Determinación del tratamiento óptimo (lentes esclerales, crosslinking, anillos o trasplante de córnea)"
    ],
    "postOpRecommendations": [
      "En caso de usar lentes de contacto, suspender su uso antes de la cita según indicación médica.",
      "Asistir con estudios topográficos previos para poder realizar análisis comparativos de progresión."
    ],
    "priceRange": "Consulta de valoración especializada con topografía y paquimetría $1,000-$3000",
    "technicalSpecs": {
      "Estudios incluidos": "Topografía corneal digitalizada, Paquimetría de mapa corneal",
      "Indicación": "Pacientes diagnosticados o con sospecha de queratocono por astigmatismo irregular"
    },
    "relatedConditions": [
      "cond-queratocono"
    ],
    "image": "/servicios/queratocono.png",
    "seo": {
      "title": "Valoración de Queratocono en Mérida | Dra. Fiona Xacur",
      "description": "Consulta especializada en queratocono en Mérida. Incluye mapeo corneal topográfico y paquimetría. Especialista en córnea Dra. Fiona Xacur.",
      "keywords": [
        "valoración queratocono Mérida",
        "topografía de elevación Mérida",
        "mapeo corneal Mérida",
        "oftalmólogo especialista queratocono"
      ]
    }
  }
];
