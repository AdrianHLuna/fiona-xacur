import { Symptom } from "@/types/schema";

export const symptoms: Symptom[] = [
  {
    "id": "symp-ojo-rojo",
    "slug": "ojo-rojo",
    "name": "Ojo Rojo",
    "description": "El enrojecimiento ocular ocurre cuando los vasos sanguíneos en la superficie del ojo (conjuntiva/esclera) se dilatan o se rompen. Puede acompañarse de dolor, comezón, secreción o lagrimeo.",
    "causes": [
      "Conjuntivitis alérgica o infecciosa",
      "Pterigión inflamado (carnosidad)",
      "Blefaritis y ojo seco severo",
      "Queratitis o úlcera corneal (emergencia)"
    ],
    "whyConsult": "Debes consultar de inmediato si el ojo rojo se acompaña de dolor ocular moderado a severo, si disminuye tu visión, si presentas sensibilidad extrema a la luz (fotofobia), o si notas una mancha blanquecina en la córnea.",
    "relatedConditions": [
      "cond-pterigion",
      "cond-ojo-seco",
      "cond-ulceras-y-queratitis",
      "cond-retinopatia"
    ],
    "image": "/sintomas/ojo-rojo.png",
    "seo": {
      "title": "Causas de Ojo Rojo Ocular Mérida | Dra. Fiona Xacur",
      "description": "¿Ojo rojo y dolor? Conoce las causas comunes como conjuntivitis, carnosidad o queratitis. Consulta de especialidad en Mérida con la Dra. Fiona Xacur.",
      "keywords": [
        "ojo rojo Mérida",
        "ojo irritado causas",
        "carnosidad inflamada Mérida",
        "urgencias oftalmólogo Mérida"
      ]
    }
  },
  {
    "id": "symp-vision-borrosa",
    "slug": "vision-borrosa",
    "name": "Visión Borrosa",
    "description": "Pérdida de la nitidez visual que dificulta ver los detalles finos de los objetos. Puede ser a distancia lejana (miopía), cercana (presbicia) o en ambas (astigmatismo, catarata).",
    "causes": [
      "Errores refractivos (miopía, astigmatismo, hipermetropía, presbicia)",
      "Catarata progresiva",
      "Ojo seco severo que altera el enfoque"
    ],
    "whyConsult": "Se recomienda acudir a consulta si notas una disminución visual progresiva que afecta tu capacidad de lectura, conducción o trabajo digital, o si el empañamiento visual ocurre de manera súbita.",
    "relatedConditions": [
      "cond-miopia-y-astigmatismo",
      "cond-hipermetropia-y-presbicia",
      "cond-cataratas",
      "cond-queratocono"
    ],
    "image": "/sintomas/vision-borrosa.png",
    "seo": {
      "title": "Visión Borrosa Causas y Tratamiento Mérida | Dra. Fiona",
      "description": "Causas comunes de la visión borrosa como miopía, astigmatismo o cataratas. Agenda tu examen de la vista en Mérida con la Dra. Fiona Carolina Xacur.",
      "keywords": [
        "ver borroso Mérida",
        "visión borrosa de lejos Mérida",
        "vista cansada Mérida",
        "examen de la vista Mérida"
      ]
    }
  },
  {
    "id": "symp-carnosidad-ojo",
    "slug": "carnosidad-ojo",
    "name": "Carnosidad en el Ojo",
    "description": "Aparición de un tejido membranoso de color rosado o blanquecino que se extiende desde la parte blanca del ojo (esclera) y avanza sobre la córnea, causando irritación constante.",
    "causes": [
      "Desarrollo de un pterigión debido a la radiación solar",
      "Exposición crónica al polvo, viento y resequedad (común en Yucatán)"
    ],
    "whyConsult": "Acude a valoración si la carnosidad está enrojecida y te causa ardor persistente, si sientes que interfiere con tu visión o si estéticamente notas que avanza hacia el centro del ojo.",
    "relatedConditions": [
      "cond-pterigion"
    ],
    "image": "/sintomas/carnosidad.png",
    "seo": {
      "title": "Carnosidad en el Ojo (Pterigión) Mérida | Dra. Fiona",
      "description": "Síntomas y opciones de tratamiento para la carnosidad en el ojo (pterigión) en Mérida con la Dra. Fiona Carolina Xacur García.",
      "keywords": [
        "carnosidad en el ojo Mérida",
        "pterigión síntomas",
        "ojo irritado sol Mérida",
        "oftalmólogo Mérida"
      ]
    }
  },
  {
    "id": "symp-resequedad-ocular",
    "slug": "resequedad-ocular",
    "name": "Resequedad Ocular",
    "description": "Falta de lubricación adecuada en el ojo, manifestada por ardor, irritación y un lagrimeo reflejo intermitente, agravada por el uso de pantallas y aire acondicionado.",
    "causes": [
      "Síndrome de Ojo Seco evaporativo o acuodeficiente",
      "Blefaritis posterior (glándulas de Meibomio obstruidas)",
      "Clima caluroso o uso excesivo de aire acondicionado"
    ],
    "whyConsult": "Consulta si el ardor y la irritación ocular son diarios y te dificultan el trabajo frente a computadoras, o si el ojo lagrimea constantemente sin causa aparente.",
    "relatedConditions": [
      "cond-ojo-seco"
    ],
    "image": "/sintomas/resequedad.png",
    "seo": {
      "title": "Resequedad y Ardor en los Ojos Mérida | Dra. Fiona Xacur",
      "description": "Alivia el ojo seco. Diagnóstico y tratamiento de la resequedad ocular en Mérida con la Dra. Fiona Carolina Xacur García.",
      "keywords": [
        "ojo seco Mérida",
        "ardor en los ojos Mérida",
        "compresas para blefaritis",
        "lágrimas artificiales Mérida"
      ]
    }
  },
  {
    "id": "symp-dolor-ocular",
    "slug": "dolor-ocular",
    "name": "Dolor Ocular",
    "description": "Sensación dolorosa, punzante o de presión en la superficie del ojo o en su interior. Puede estar asociado a enrojecimiento, fotofobia o pérdida visual.",
    "causes": [
      "Úlceras corneales o queratitis (infección en la córnea)",
      "Glaucoma de ángulo cerrado (presión intraocular muy alta)",
      "Uveítis anterior o fatiga visual severa"
    ],
    "whyConsult": "El dolor ocular agudo e intenso es una emergencia médica. Debes acudir con el oftalmólogo inmediatamente si el dolor se acompaña de náuseas, visión de arcoíris o pérdida súbita de la visión.",
    "relatedConditions": [
      "cond-ulceras-y-queratitis",
      "cond-glaucoma",
      "cond-retinopatia"
    ],
    "image": "/sintomas/dolor-ocular.png",
    "seo": {
      "title": "Urgencias por Dolor Ocular Mérida | Dra. Fiona Xacur",
      "description": "Atención especializada para dolor en el ojo en Mérida. Descarte queratitis, úlceras o glaucoma con la Dra. Fiona Carolina Xacur García.",
      "keywords": [
        "dolor de ojo Mérida",
        "presión en el ojo Mérida",
        "oftalmólogo de urgencia Mérida",
        "dolor ocular causas"
      ]
    }
  },
  {
    "id": "symp-sensacion-basura",
    "slug": "sensacion-basura",
    "name": "Sensación de Basura en los Ojos",
    "description": "Incomodidad o molestia que hace sentir al paciente que tiene un cuerpo extraño, arenilla o pestaña dentro del ojo, provocando frotado continuo.",
    "causes": [
      "Ojo seco y blefaritis",
      "Pterigión inflamado",
      "Presencia real de un cuerpo extraño (rebaba, polvo, insecto) o pestaña invertida"
    ],
    "whyConsult": "Acude a consulta si la sensación persiste por más de 24 horas, si el ojo se enrojece intensamente, o si sospechas de la presencia de un cuerpo extraño incrustado para evitar una úlcera corneal.",
    "relatedConditions": [
      "cond-ojo-seco",
      "cond-pterigion",
      "cond-ulceras-y-queratitis"
    ],
    "image": "/sintomas/sensacion-cuerpo-extrano.png",
    "seo": {
      "title": "Sensación de Cuerpo Extraño en el Ojo Mérida | Dra. Fiona",
      "description": "Qué hacer ante la sensación de basura o arenilla en los ojos. Consulta de oftalmología en Mérida con la Dra. Fiona Carolina Xacur García.",
      "keywords": [
        "basura en el ojo Mérida",
        "arenilla en los ojos",
        "extracción de cuerpo extraño ojo",
        "oftalmólogo Mérida"
      ]
    }
  },
  {
    "id": "symp-vision-distorsionada",
    "slug": "vision-distorsionada",
    "name": "Visión Distorsionada u Ondulada",
    "description": "Alteración en la percepción visual donde los objetos deforman su aspecto o las líneas rectas (como los marcos de las puertas o columnas) se aprecian torcidas u onduladas.",
    "causes": [
      "Astigmatismo irregular alto debido a queratocono",
      "Daño macular en la retina (edema macular, degeneración macular)"
    ],
    "whyConsult": "Si notas que las líneas rectas se ven onduladas o si se deforma la visión central de manera repentina, debes someterte a un examen de fondo de ojo y topografía para diagnosticar queratocono o daño retiniano.",
    "relatedConditions": [
      "cond-queratocono",
      "cond-miopia-y-astigmatismo",
      "cond-retinopatia"
    ],
    "image": "/sintomas/distorsionada.png",
    "seo": {
      "title": "Visión Ondulada u Deformada Mérida | Dra. Fiona Xacur",
      "description": "Diagnóstico de visión distorsionada u ondulada en Mérida. Descarte queratocono o daño en la mácula con la Dra. Fiona Carolina Xacur García.",
      "keywords": [
        "ver líneas onduladas Mérida",
        "visión distorsionada Mérida",
        "queratocono astigmatismo irregular",
        "retinólogo Mérida"
      ]
    }
  },
  {
    "id": "symp-lagrimeo",
    "slug": "lagrimeo",
    "name": "Lagrimeo Constante",
    "description": "Producción excesiva y continua de lágrimas que puede desbordarse por las mejillas. A menudo es una respuesta de irritación refleja o de una obstrucción en el drenaje del sistema lagrimal.",
    "causes": [
      "Síndrome de Ojo Seco (lagrimeo reflejo por mala calidad de lágrima)",
      "Obstrucción de la vía lagrimal (frecuente en adultos mayores)",
      "Conjuntivitis alérgica o infecciosa e irritación por polvo o viento"
    ],
    "whyConsult": "Consulta de inmediato si el lagrimeo excesivo se acompaña de dolor ocular, pus o secreciones verdosas, visión borrosa que no mejora al parpadear, o una protuberancia dolorosa cerca del lagrimal.",
    "relatedConditions": [
      "cond-ojo-seco",
      "cond-pterigion",
      "cond-conjuntivitis-y-alergias"
    ],
    "image": "/sintomas/lagrimeo.png",
    "seo": {
      "title": "Causas de Lagrimeo Constante en los Ojos Mérida | Dra. Fiona",
      "description": "¿Ojos llorosos todo el tiempo? Conoce causas como ojo seco o conductos obstruidos. Consulta con la Dra. Fiona Carolina Xacur García en Mérida.",
      "keywords": [
        "lagrimeo constante Mérida",
        "ojos llorosos causas",
        "obstrucción lagrimal Mérida",
        "oftalmólogo Mérida"
      ]
    }
  },
  {
    "id": "symp-comezon-ojos",
    "slug": "comezon-ojos",
    "name": "Comezón en los Ojos",
    "description": "Sensación de comezón, picazón o prurito ocular que genera una urgencia persistente por frotar los ojos. Típicamente indica alergias o inflamaciones de los párpados.",
    "causes": [
      "Conjuntivitis alérgica por polen, polvo o caspa de mascotas",
      "Blefaritis (inflamación e infección grasa en el borde palpebral)",
      "Uso de cosméticos irritantes o falta de lubricación (ojo seco)"
    ],
    "whyConsult": "Frotarte vigorosamente los ojos puede debilitar y deformar la córnea permanentemente, causando queratocono. Consulta al especialista para recibir gotas antialérgicas seguras.",
    "relatedConditions": [
      "cond-conjuntivitis-y-alergias",
      "cond-ojo-seco",
      "cond-queratocono"
    ],
    "image": "/sintomas/comezon.png",
    "seo": {
      "title": "Comezón y Picazón en los Ojos Mérida | Dra. Fiona Xacur",
      "description": "¿Tienes comezón en los ojos de manera constante? Descarta conjuntivitis alérgica y blefaritis. Tratamiento especializado en Mérida con la Dra. Fiona Xacur.",
      "keywords": [
        "comezón en los ojos Mérida",
        "picazón ocular causas",
        "ojo alérgico Mérida",
        "oftalmólogo especialista"
      ]
    }
  },
  {
    "id": "symp-halos-destellos",
    "slug": "halos-destellos",
    "name": "Halos y Destellos de Luz",
    "description": "Visualización de círculos coloreados alrededor de bombillas o faros (halos) o de destellos repentinos y centellas brillantes (destellos) en el campo visual.",
    "causes": [
      "Opacidad del cristalino (cataratas)",
      "Astigmatismo irregular o queratocono avanzado",
      "Tracción o desgarro en la retina (especialmente los destellos de inicio súbito)"
    ],
    "whyConsult": "La aparición repentina de destellos de luz (relámpagos) junto con manchas flotantes oscuras es una urgencia médica grave que requiere examen inmediato de fondo de ojo por desgarro o desprendimiento de retina.",
    "relatedConditions": [
      "cond-cataratas",
      "cond-queratocono",
      "cond-retinopatia",
      "cond-miopia-y-astigmatismo"
    ],
    "image": "/sintomas/halos.png",
    "seo": {
      "title": "Ver Halos de Luz y Destellos Mérida | Dra. Fiona Xacur",
      "description": "Causas de halos y destellos de luz. Descarte problemas de retina, cataratas o queratocono. Agenda tu consulta en Mérida con la Dra. Fiona Xacur.",
      "keywords": [
        "halos de luz en ojos Mérida",
        "destellos de luz en el ojo",
        "ver moscas flotantes Mérida",
        "oftalmólogo urgencias Mérida"
      ]
    }
  }
];
