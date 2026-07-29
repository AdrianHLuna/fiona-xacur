import { MedicalCondition } from "@/types/schema";

export const diseases: MedicalCondition[] = [
  {
    "id": "cond-miopia-y-astigmatismo",
    "slug": "miopia-y-astigmatismo",
    "name": "Miopía y Astigmatismo",
    "technicalName": "Ametropías Refractivas Oculares",
    "description": "Los errores de refracción ocurren cuando la forma del ojo impide que la luz se enfoque directamente sobre la retina. La miopía provoca que los objetos lejanos se vean borrosos debido a un globo ocular alargado. El astigmatismo se debe a una curvatura irregular de la córnea, lo que causa visión distorsionada o desenfocada a cualquier distancia. Son corregibles mediante anteojos, lentes de contacto o cirugía láser LASIK.",
    "symptoms": [
      "Visión borrosa al mirar objetos lejanos",
      "Visión distorsionada, doble o estirada a cualquier distancia",
      "Dolores de cabeza frecuentes y fatiga visual tras usar pantallas",
      "Entrecerrar los ojos constantemente para enfocar"
    ],
    "causes": [
      "Factores genéticos y antecedentes familiares directos",
      "Longitud axial del ojo mayor a lo normal (miopía)",
      "Curvatura corneal asimétrica u ovalada (astigmatismo)"
    ],
    "riskFactors": [
      "Padres con graduaciones altas de miopía o astigmatismo",
      "Poco tiempo al aire libre durante el desarrollo infantil"
    ],
    "mexicoStats": "La miopía y el astigmatismo son los trastornos visuales más comunes en México, afectando a más del 55% de la población joven y en edad escolar.",
    "complications": [
      "Fatiga visual crónica y bajo rendimiento escolar o laboral",
      "Riesgo de miopía degenerativa con propensión a desgarros de retina si es muy elevada"
    ],
    "treatments": [
      "Anteojos graduados y lentes de contacto convencionales",
      "Cirugía refractiva láser (LASIK o PRK) de alta precisión",
      "Lentes intraoculares fáquicos (ICL) para graduaciones extremas"
    ],
    "faqs": [
      {
        "question": "P: ¿A qué edad es recomendable la cirugía láser para dejar de usar lentes?",
        "answer": "Se recomienda realizarla a partir de los 18 años, siempre que la graduación se haya mantenido estable durante al menos un año y los estudios de topografía corneal descarten riesgos."
      },
      {
        "question": "P: ¿El astigmatismo puede curarse con gotas?",
        "answer": "No, las gotas oftálmicas o ejercicios visuales no pueden cambiar la forma física de la córnea. La corrección definitiva requiere anteojos, lentes de contacto o cirugía láser."
      },
      {
        "question": "P: ¿La cirugía refractiva es dolorosa?",
        "answer": "El grado de dolor o molestia en un procedimiento es muy variable de acuerdo a la anatomía y el umbral del dolor de cada paciente. Si bien se utiliza anestesia local en gotas para minimizar las molestias, no es correcto afirmar que es totalmente indoloro para todos. Sin embargo, destaca por tener una recuperación rápida y altas tasas de precisión y seguridad."
      }
    ],
    "sources": [],
    "relatedServices": [
      "serv-cirugia-lasik",
      "serv-adaptacion-lentes-esclerales"
    ],
    "relatedSymptoms": [
      "symp-vision-borrosa",
      "symp-dolor-ocular"
    ],
    "image": "/enfermedades/miopia-astigmatismo.png",
    "seo": {
      "title": "Cirugía Láser de Miopía y Astigmatismo Mérida | Dra. Fiona Xacur",
      "description": "Deshazte de los lentes. Especialista en cirugía refractiva láser LASIK en Mérida. Dra. Fiona Xacur. Consulta de valoración.",
      "keywords": [
        "cirugía LASIK Mérida",
        "quitar lentes láser",
        "oftalmólogo Mérida",
        "miopía astigmatismo precio"
      ]
    }
  },
  {
    "id": "cond-hipermetropia-y-presbicia",
    "slug": "hipermetropia-y-presbicia",
    "name": "Hipermetropía y Presbicia",
    "technicalName": "Hipermetropía y Presbicia (Vista Cansada)",
    "description": "La hipermetropía es un error de enfoque donde la luz se proyecta detrás de la retina (generalmente porque el ojo es más corto), haciendo que los objetos cercanos se vean borrosos. La presbicia, o vista cansada, es la pérdida gradual y natural de la capacidad de enfoque del ojo para ver de cerca, la cual se manifiesta típicamente a partir de los 40 años debido al endurecimiento fisiológico del cristalino.",
    "symptoms": [
      "Dificultad clara para leer letras pequeñas o usar el teléfono de cerca",
      "Necesidad de alejar los textos para poder enfocarlos",
      "Dolor ocular, fatiga y dolor de cabeza al realizar trabajo cercano",
      "Visión borrosa transitoria al cambiar el enfoque de cerca a lejos"
    ],
    "causes": [
      "Longitud del globo ocular más corta de lo normal (hipermetropía)",
      "Pérdida natural de la flexibilidad y elasticidad del cristalino por la edad (presbicia)"
    ],
    "riskFactors": [
      "Edad mayor a 40 años (factor determinante para la presbicia)",
      "Factores genéticos e historial familiar de hipermetropía",
      "Condiciones médicas subyacentes como la diabetes"
    ],
    "mexicoStats": "Prácticamente el 100% de la población mayor de 45 años en México desarrolla algún grado de presbicia o vista cansada de forma natural.",
    "complications": [
      "Dificultad severa para realizar tareas cotidianas como leer o escribir sin auxilio óptico",
      "Cefalea tensional crónica por esfuerzo constante de acomodación"
    ],
    "treatments": [
      "Lentes graduados de lectura, bifocales o progresivos",
      "Lentes de contacto multifocales",
      "Cirugía refractiva con láser monovisión o recambio de cristalino por lente intraocular multifocal"
    ],
    "faqs": [
      {
        "question": "P: ¿La presbicia se puede prevenir?",
        "answer": "No se puede prevenir, ya que es parte del proceso de envejecimiento natural del ojo. Sin embargo, su diagnóstico oportuno permite corregirla de inmediato para recuperar una calidad de vida excelente."
      },
      {
        "question": "P: ¿Si tengo hipermetropía desarrollaré presbicia más rápido?",
        "answer": "Los pacientes hipermétropes suelen notar los síntomas de la presbicia antes que los pacientes con visión normal, ya que su ojo ya realiza un esfuerzo extra para enfocar de cerca."
      }
    ],
    "sources": [],
    "relatedServices": [
      "serv-cirugia-lasik"
    ],
    "relatedSymptoms": [
      "symp-vision-borrosa",
      "symp-dolor-ocular"
    ],
    "image": "/enfermedades/hipermetropia-presbicia.png",
    "seo": {
      "title": "Tratamiento de Presbicia y Vista Cansada Mérida | Dra. Fiona",
      "description": "Soluciones modernas para la vista cansada e hipermetropía en Mérida. Recupere su visión de lectura con la Dra. Fiona Xacur.",
      "keywords": [
        "vista cansada Mérida",
        "hipermetropía ginecólogo",
        "lentes progresivos Mérida",
        "oftalmología Mérida"
      ]
    }
  },
  {
    "id": "cond-pterigion",
    "slug": "pterigion",
    "name": "Pterigión (Carnosidad Ocular)",
    "technicalName": "Pterigión y Pinguécula",
    "description": "El pterigión es un crecimiento anormal, benigno y de consistencia carnosa de la conjuntiva (la membrana transparente que recubre el ojo) sobre la córnea. Suele tener forma triangular y desarrollarse en el lado nasal del ojo. Es causado por la exposición crónica a la radiación solar ultravioleta, el viento, el polvo y la sequedad, lo que lo hace sumamente prevalente en Yucatán debido a su clima tropical.",
    "symptoms": [
      "Presencia de una telita o carnosidad rojiza o blanquecina en el ojo",
      "Sensación constante de arenilla, basura o cuerpo extraño",
      "Ojo rojo, ardor, comezón y lagrimeo frecuente",
      "Disminución de la visión si la carnosidad crece ya que puede inducir astigmatismo aun antes de cubrir la pupila"
    ],
    "causes": [
      "Exposición prolongada e intensa a la luz solar ultravioleta (UV)",
      "Irritación constante por factores ambientales (polvo, viento, arena y calor)",
      "Sequedad ocular crónica"
    ],
    "riskFactors": [
      "Vivir en climas cálidos y soleados (como la península de Yucatán)",
      "Trabajar al aire libre o realizar actividades exteriores frecuentemente sin lentes de sol",
      "No usar protección ocular con filtro UV"
    ],
    "mexicoStats": "El pterigión es una de las patologías oculares más comunes en el sureste mexicano, afectando principalmente a adultos y jóvenes expuestos al sol de manera constante.",
    "complications": [
      "Astigmatismo inducido por la tracción del tejido sobre la córnea",
      "Obstrucción de la visión central si invade la pupila",
      "Inflamación dolorosa recurrente"
    ],
    "treatments": [
      "Uso de lubricantes oculares (lágrimas artificiales) y antiinflamatorios en gotas",
      "Cirugía de pterigión con autoinjerto conjuntival (para evitar que vuelva a crecer)",
      "Uso mandatorio de lentes con filtro UV-400 para prevenir recurrencias"
    ],
    "faqs": [
      {
        "question": "P: ¿La carnosidad en el ojo puede volver a salir tras la cirugía?",
        "answer": "Sí puede volver a salir. Por ello, la Dra. Fiona Xacur realiza la técnica moderna con autoinjerto conjuntival y adhesivo tisular, lo que reduce la probabilidad de reaparición a 5-10%."
      },
      {
        "question": "P: ¿Cuándo es necesario operar un pterigión?",
        "answer": "Se opera si causa irritación constante que no cede con gotas, por cuestiones estéticas, si altera la graduación corneal causando astigmatismo, o si amenaza con cubrir el eje visual."
      }
    ],
    "sources": [],
    "relatedServices": [
      "serv-consulta-general"
    ],
    "relatedSymptoms": [
      "symp-carnosidad-ojo",
      "symp-ojo-rojo",
      "symp-sensacion-basura"
    ],
    "image": "/enfermedades/pterigion.png",
    "seo": {
      "title": "Cirugía de Carnosidad Ocular (Pterigión) Mérida | Dra. Fiona",
      "description": "Tratamiento definitivo para pterigión en Mérida. Cirugía moderna con autoinjerto para evitar recurrencias por la Dra. Fiona Xacur.",
      "keywords": [
        "carnosidad en el ojo Mérida",
        "cirugía de pterigión Mérida",
        "ojo rojo constante Mérida",
        "oftalmólogo Mérida"
      ]
    }
  },
  {
    "id": "cond-cataratas",
    "slug": "cataratas",
    "name": "Cataratas Oculares",
    "technicalName": "Catarata Senil, Metabólica y Congénita",
    "description": "La catarata es la opacidad del cristalino, el lente natural del ojo. Al opacarse, impide el paso limpio de la luz hacia la retina, provocando una pérdida visual progresiva e indolora. Es la principal causa de ceguera tratable a nivel mundial y está estrechamente ligada al envejecimiento o a enfermedades como la diabetes. La cirugía moderna permite extraer este cristalino dañado e implantar un lente intraocular para restaurar la nitidez visual.",
    "symptoms": [
      "Visión borrosa, nublada o como si se mirara a través de un vidrio empañado",
      "Dificultad progresiva para ver de noche o con poca iluminación",
      "Sensibilidad molesta al resplandor y halos alrededor de las luces",
      "Los colores se perciben opacos, amarillentos o apagados",
      "Cambios muy frecuentes en la graduación de anteojos"
    ],
    "causes": [
      "Envejecimiento natural y desnaturalización de las proteínas del cristalino",
      "Golpes, traumatismos o cirugías previas en el ojo",
      "Enfermedades sistémicas mal controladas como la diabetes",
      "Uso prolongado de corticoides orales, intranasales u oftálmicos"
    ],
    "riskFactors": [
      "Edad superior a los 60 años",
      "Diabetes mellitus mal controlada",
      "Exposición prolongada al sol sin lentes con filtro UV",
      "Tabaquismo y obesidad",
      "Uso crónico de corticoides"
    ],
    "mexicoStats": "Se estima que las cataratas afectan a más de 350,000 personas al año en México, siendo la cirugía de catarata el procedimiento quirúrgico más seguro y realizado del país.",
    "complications": [
      "Pérdida casi total de la visión útil (ceguera reversible)",
      "Glaucoma secundario por aumento del volumen del cristalino opaco",
      "Disminución de la calidad de vida y aumento del riesgo de caídas"
    ],
    "treatments": [
      "Cirugía de catarata por Facoemulsificación (ultrasonido de mínima incisión)",
      "Implante de Lente Intraocular (LIO) Monofocal, Foco extendido o Multifocal de última generación"
    ],
    "faqs": [
      {
        "question": "P: ¿La catarata puede regresar después de operada?",
        "answer": "No, la catarata no vuelve a salir. Lo que puede ocurrir es que la cápsula que sostiene el lente intraocular se vuelva opaca con los meses o años, lo cual se soluciona en consultorio de manera rápida e indolora con un rayo láser YAG."
      },
      {
        "question": "P: ¿La cirugía es segura para adultos mayores?",
        "answer": "Sí, es uno de los procedimientos quirúrgicos más seguros del mundo. Se realiza bajo anestesia tópica (gotas) y de forma ambulatoria, lo que permite al paciente regresar a casa el mismo día."
      }
    ],
    "sources": [],
    "relatedServices": [
      "serv-cirugia-catarata"
    ],
    "relatedSymptoms": [
      "symp-vision-borrosa",
      "symp-halos-destellos"
    ],
    "image": "/enfermedades/cataratas.png",
    "seo": {
      "title": "Cirugía de Catarata en Mérida | Dra. Fiona Xacur",
      "description": "Recupere su visión nítida. Especialista en cirugía de catarata con implante de lente intraocular en Mérida. Dra. Fiona Xacur.",
      "keywords": [
        "operación de cataratas Mérida",
        "lente intraocular costo Mérida",
        "cirujano de catarata",
        "oftalmólogo Mérida"
      ]
    }
  },
  {
    "id": "cond-queratocono",
    "slug": "queratocono",
    "name": "Queratocono",
    "technicalName": "Ectasia Corneal Bilateral y Progresiva",
    "description": "El queratocono es una enfermedad degenerativa y progresiva de la córnea en la que ésta se adelgaza y adopta una forma cónica irregular. Esta deformación altera la forma en que la luz entra al ojo, provocando una distorsión visual severa, miopía progresiva y astigmatismo irregular alto. Siendo especialista en Córnea, la Dra. Fiona Xacur ofrece un espectro completo de opciones desde adaptación de lentes esclerales hasta crosslinking corneal, anillos intracorneales y trasplante de córnea.",
    "symptoms": [
      "Visión borrosa y muy distorsionada a cualquier distancia",
      "Aumento constante y rápido de la graduación de astigmatismo",
      "Halos o destellos molestos alrededor de las luces, especialmente de noche",
      "Sensibilidad extrema a la luz (fotofobia) e irritación ocular"
    ],
    "causes": [
      "Debilitamiento del colágeno de la estructura corneal",
      "Tallado o frotado constante y vigoroso de los ojos",
      "Factores genéticos (antecedentes familiares de queratocono)"
    ],
    "riskFactors": [
      "Frotarse los ojos constantemente por alergias oculares (como conjuntivitis alérgica)",
      "Antecedentes de queratocono en la familia",
      "Enfermedades del tejido conectivo (como síndrome de Down o síndrome de Marfan)"
    ],
    "mexicoStats": "El queratocono suele manifestarse en la adolescencia o juventud temprana (entre los 12 y 25 años) y es una de las causas principales de trasplante de córnea en pacientes jóvenes en México.",
    "complications": [
      "Astigmatismo irregular severo que no se corrige con anteojos convencionales",
      "Opacidad o cicatrices en la córnea (hidrops corneal) que requieren trasplante de córnea"
    ],
    "treatments": [
      "Adaptación especializada de Lentes de Contacto Esclerales o rígidos gas permeables",
      "Crosslinking Corneal (CXL) para detener el avance de la deformación",
      "Implante de Anillos o Segmentos Intracorneales para aplanar la córnea",
      "Trasplante de Córnea (Queratoplastia) en etapas muy avanzadas"
    ],
    "faqs": [
      {
        "question": "P: ¿Cómo ayudan los lentes esclerales en el queratocono?",
        "answer": "Los lentes esclerales no tocan la córnea enferma; se apoyan en la esclera (la parte blanca del ojo) y crean una bóveda de líquido sobre la córnea, regularizando el paso de la luz y proporcionando una visión excelente que no se logra con lentes normales."
      },
      {
        "question": "P: ¿El queratocono se puede curar?",
        "answer": "No se cura del todo, pero actualmente existen tratamientos altamente efectivos como el Crosslinking que endurecen la córnea y frenan la progresión de la enfermedad, evitando la necesidad de un trasplante."
      }
    ],
    "sources": [],
    "relatedServices": [
      "serv-valoracion-queratocono",
      "serv-adaptacion-lentes-esclerales"
    ],
    "relatedSymptoms": [
      "symp-vision-distorsionada",
      "symp-lagrimeo",
      "symp-halos-destellos"
    ],
    "image": "/enfermedades/queratocono.png",
    "seo": {
      "title": "Especialista en Queratocono en Mérida | Dra. Fiona Xacur",
      "description": "Diagnóstico y tratamiento avanzado para queratocono en Mérida. Adaptación de lentes esclerales y crosslinking. Dra. Fiona Xacur.",
      "keywords": [
        "tratamiento de queratocono Mérida",
        "lentes esclerales Mérida",
        "crosslinking corneal Mérida",
        "oftalmólogo especialista córnea"
      ]
    }
  },
  {
    "id": "cond-ojo-seco",
    "slug": "ojo-seco",
    "name": "Ojo Seco y Blefaritis",
    "technicalName": "Síndrome de Ojo Seco por Disfunción Lagrimal",
    "description": "El ojo seco es una condición crónica y multifactorial caracterizada por una deficiencia en la cantidad o la calidad de las lágrimas, lo que provoca falta de lubricación en la superficie ocular. Frecuentemente se asocia con la blefaritis, que es la inflamación de los párpados y la obstrucción de las glándulas de Meibomio (encargadas de producir la capa grasa de la lágrima), acelerando su evaporación.",
    "symptoms": [
      "Sensación de ardor, quemazón o picazón en los ojos",
      "Sensación de tener arenilla o basura dentro del ojo",
      "Ojo rojo persistente e irritación",
      "Visión borrosa intermitente que mejora al parpadear",
      "Lagrimeo reflejo excesivo (el ojo lagrimea intentando compensar la sequedad)"
    ],
    "causes": [
      "Envejecimiento natural y cambios hormonales (menopausia)",
      "Factores ambientales (aire acondicionado, calor extremo, viento y polvo)",
      "Uso prolongado de pantallas y computadoras (se parpadea hasta un 50% menos)",
      "Disfunción de las glándulas de Meibomio (blefaritis)",
      "Enfermedades sistémicas autoinmunes como enfermedad tiroidea, artritis reumatoide, síndrome de Sjögren, entre otros"
    ],
    "riskFactors": [
      "Vivir o trabajar en climas muy secos o con aire acondicionado constante",
      "Uso prolongado de lentes de contacto",
      "Enfermedades autoinmunes como el síndrome de Sjögren, artritis o lupus",
      "Rosácea ocular"
    ],
    "mexicoStats": "El ojo seco afecta a cerca del 30% de la consulta oftalmológica en México, incrementándose notablemente en áreas urbanas debido al uso constante de dispositivos digitales.",
    "complications": [
      "Microlesiones o queratitis en la superficie de la córnea",
      "Mayor propensión a infecciones oculares debido a la falta de la barrera defensiva lagrimal",
      "Cicatrices corneales y perforaciones en casos extremos de sequedad grave"
    ],
    "treatments": [
      "Lágrimas artificiales libres de conservadores y geles lubricantes",
      "Higiene de párpados y compresas tibias para blefaritis",
      "Tapones lagrimales (Punctum Plugs) para retener las lágrimas en el ojo",
      "Medicamentos antiinflamatorios locales en gotas",
      "Gotas de suero autólogo",
      "Tratamiento de luz pulsada intensa",
      "Barreras mecánicas como lente de contacto terapéutico o lentes tipo gogle"
    ],
    "faqs": [
      {
        "question": "P: ¿Por qué me lloran los ojos si me dicen que tengo ojo seco?",
        "answer": "Es una respuesta refleja. Al estar la superficie del ojo irritada y seca, el cerebro envía una señal de emergencia para producir lágrimas abundantes, pero estas lágrimas son de mala calidad (agua pura sin grasa) y se evaporan rápido, dejando el ojo seco de nuevo."
      },
      {
        "question": "P: ¿El ojo seco se cura?",
        "answer": "Es una condición crónica que se controla. Con el tratamiento adecuado, modificando hábitos y manteniendo lubricados los ojos, los síntomas desaparecen y se protege la salud de la córnea."
      }
    ],
    "sources": [],
    "relatedServices": [
      "serv-consulta-general"
    ],
    "relatedSymptoms": [
      "symp-resequedad-ocular",
      "symp-sensacion-basura",
      "symp-comezon-ojos",
      "symp-ojo-rojo"
    ],
    "image": "/enfermedades/ojoseco.png",
    "seo": {
      "title": "Tratamiento de Ojo Seco y Blefaritis Mérida | Dra. Fiona",
      "description": "Alivia el ardor y la resequedad ocular. Especialista en diagnóstico y tratamiento integral de ojo seco en Mérida. Dra. Fiona Xacur.",
      "keywords": [
        "ojo seco Mérida",
        "ardor en los ojos Mérida",
        "tratamiento blefaritis",
        "lágrimas artificiales oftalmólogo"
      ]
    }
  },
  {
    "id": "cond-ulceras-y-queratitis",
    "slug": "ulceras-y-queratitis",
    "name": "Úlceras Corneales y Queratitis",
    "technicalName": "Queratopatías Infecciosas e Inflamatorias",
    "description": "La queratitis es la inflamación de la córnea (la ventana transparente del ojo). Si no se trata a tiempo, esta inflamación puede ulcerarse, creando una herida abierta o úlcera corneal. Puede ser causada por bacterias, virus (como el Herpes), hongos o amebas (común en usuarios de lentes de contacto). Al ser la córnea un tejido vital para la visión, estas condiciones representan emergencias oftalmológicas que requieren diagnóstico rápido para evitar secuelas visuales permanentes.",
    "symptoms": [
      "Dolor ocular severo y punzante que aparece rápidamente",
      "Sensibilidad extrema a la luz (fotofobia) que impide abrir el ojo",
      "Enrojecimiento ocular severo y lagrimeo abundante",
      "Secreción ocular espesa, amarillenta o verdosa",
      "Visión borrosa y mancha blanca visible sobre la córnea"
    ],
    "causes": [
      "Infecciones bacterianas, virales (Herpes Simple/Zóster) o micóticas",
      "Mal uso, falta de higiene o dormir con lentes de contacto",
      "Rasguños, golpes o cuerpos extraños que lesionan el epitelio corneal",
      "Queratitis neurotrófica (pérdida de sensibilidad de la córnea)"
    ],
    "riskFactors": [
      "Usar lentes de contacto de forma prolongada o nadar con ellos",
      "Tener un sistema inmunológico debilitado",
      "Padecer sequedad ocular severa o rosácea ocular",
      "Uso inapropiado de gotas con cortisona sin indicación médica"
    ],
    "mexicoStats": "Las úlceras corneales infecciosas son una de las principales causas de opacidad corneal y pérdida severa de visión en jóvenes, fuertemente asociadas a la falta de higiene en lentes de contacto.",
    "complications": [
      "Perforación ocular (pérdida del globo ocular)",
      "Cicatrices permanentes en la córnea (leucoma corneal) que obstruyen la visión",
      "Infección intraocular severa (endoftalmitis)"
    ],
    "treatments": [
      "Gotas oftálmicas antibióticas, antivirales o antimicóticas fortificadas",
      "Medicamentos ciclopléjicos para mitigar el dolor",
      "Recubrimiento conjuntival o trasplante de córnea de urgencia en caso de perforación"
    ],
    "faqs": [
      {
        "question": "P: ¿Qué debo hacer si sospecho de una úlcera corneal?",
        "answer": "Debes acudir a urgencias de oftalmología de inmediato. Retira cualquier lente de contacto y no te apliques gotas automedicadas (especialmente corticoides, que pueden agravar la infección severamente)."
      },
      {
        "question": "P: ¿Una úlcera corneal deja cicatriz?",
        "answer": "Si la úlcera es profunda y se ubica en el centro de la córnea, al sanar suele dejar una cicatriz blanca (leucoma). Dependiendo de su tamaño, puede requerir una cirugía posterior o trasplante de córnea para recuperar la visión."
      }
    ],
    "sources": [],
    "relatedServices": [
      "serv-consulta-general"
    ],
    "relatedSymptoms": [
      "symp-dolor-ocular",
      "symp-ojo-rojo",
      "symp-sensacion-basura",
      "symp-lagrimeo"
    ],
    "image": "/enfermedades/ulceras.png",
    "seo": {
      "title": "Urgencias de Úlceras Corneales y Queratitis Mérida | Dra. Fiona",
      "description": "Atención inmediata para úlceras de córnea e infecciones oculares en Mérida. Cuidado especializado por la Dra. Fiona Xacur.",
      "keywords": [
        "úlcera corneal Mérida",
        "dolor de ojo agudo",
        "infección córnea lentes de contacto",
        "urgencia oftalmología Mérida"
      ]
    }
  },
  {
    "id": "cond-glaucoma",
    "slug": "glaucoma",
    "name": "Glaucoma",
    "technicalName": "Glaucoma de Ángulo Abierto y Cerrado",
    "description": "El glaucoma es un desgaste progresivo del nervio óptico. Al dañar las fibras nerviosas que transmiten las imágenes al cerebro, provoca una pérdida progresiva de la visión periférica. Puede acompañarse de presión intraocular elevada. Se le conoce como el 'ladrón silencioso de la vista' porque no causa dolor ni síntomas evidentes en sus inicios, y la pérdida visual es irreversible.",
    "symptoms": [
      "Pérdida gradual de la visión periférica o lateral (visión en túnel)",
      "Dolor ocular agudo repentino (en crisis de glaucoma de ángulo cerrado)",
      "Enrojecimiento del ojo, dolor de cabeza e incluso náuseas",
      "Visión borrosa o halos de arcoíris alrededor de las luces"
    ],
    "causes": [
      "Falla en el sistema de drenaje natural del ojo (humor acuoso)",
      "Elevación de la presión intraocular",
      "Mala perfusión o flujo sanguíneo deficiente al nervio óptico"
    ],
    "riskFactors": [
      "Presión intraocular elevada",
      "Edad mayor a los 40 años",
      "Antecedentes familiares directos de glaucoma",
      "Miopía o hipermetropía alta, o diabetes mellitus",
      "Traumatismos oculares previos"
    ],
    "mexicoStats": "El glaucoma es la segunda causa de ceguera irreversible en México. Se calcula que más del 50% de quienes lo padecen no están diagnosticados por falta de chequeos anuales.",
    "complications": [
      "Pérdida permanente e irreversible del campo visual periférica",
      "Ceguera total si no se controla adecuadamente"
    ],
    "treatments": [
      "Gotas hipotensoras oculares de uso diario continuo",
      "Procedimientos láser (iridotomía o trabeculoplastia)",
      "Cirugía filtrante tradicional o implante de válvulas de drenaje"
    ],
    "faqs": [
      {
        "question": "P: ¿El glaucoma se puede curar?",
        "answer": "No tiene cura y la visión perdida no se recupera, pero se puede controlar con gran éxito mediante gotas o cirugía para detener el avance y preservar la visión restante."
      },
      {
        "question": "P: ¿Cómo se detecta?",
        "answer": "Se detecta mediante una consulta completa donde se mide la presión del ojo (tonometría), se revisa el nervio óptico bajo dilatación de pupila y se realizan campos visuales y tomografía del nervio (OCT)."
      }
    ],
    "sources": [],
    "relatedServices": [
      "serv-consulta-general"
    ],
    "relatedSymptoms": [
      "symp-vision-borrosa",
      "symp-dolor-ocular"
    ],
    "image": "/enfermedades/glaucoma.png",
    "seo": {
      "title": "Diagnóstico y Control de Glaucoma en Mérida | Dra. Fiona Xacur",
      "description": "Protege tu visión del ladrón silencioso. Diagnóstico preciso y tratamiento oportuno de glaucoma en Mérida con la Dra. Fiona Xacur.",
      "keywords": [
        "glaucoma Mérida",
        "presión del ojo alta",
        "tonometría Mérida",
        "oftalmólogo Mérida"
      ]
    }
  },
  {
    "id": "cond-retinopatia",
    "slug": "retinopatia",
    "name": "Retinopatía y Uveítis",
    "technicalName": "Retinopatía Diabética y Coroiditis/Uveítis Posterior",
    "description": "La retinopatía diabética es una complicación ocular de la diabetes causada por el daño a los vasos sanguíneos de la retina, pudiendo causar pérdida severa de visión o ceguera. La uveítis es la inflamación de la úvea (la capa media vascularizada del ojo) que afecta a la retina y al vítreo, a menudo vinculada a enfermedades autoinmunes o infecciones sistémicas. Ambas condiciones requieren un diagnóstico preciso para evitar secuelas.",
    "symptoms": [
      "Presencia de moscas volantes o manchas oscuras flotando en la visión",
      "Visión borrosa o fluctuante a lo largo del día",
      "Dolor ocular, enrojecimiento y sensibilidad a la luz (común en uveítis)",
      "Pérdida de la visión central o áreas oscuras en el campo visual"
    ],
    "causes": [
      "Daño microvascular retiniano causado por niveles crónicamente altos de glucosa (retinopatía) o de presión arterial",
      "Reacciones autoinmunes, infecciones (toxoplasmosis, tuberculosis) o traumas (uveítis)"
    ],
    "riskFactors": [
      "Padecer diabetes mellitus con muchos años de evolución y descontrol glucémico",
      "Enfermedades autoinmunes sistémicas (lupus, espondilitis, sarcoidosis)",
      "Hipertensión arterial y tabaquismo activo"
    ],
    "mexicoStats": "La retinopatía diabética es la principal causa de ceguera no reversible en adultos en edad productiva en México, afectando enormemente la calidad de vida.",
    "complications": [
      "Hemorragia vítrea y desprendimiento de retina traccional",
      "Glaucoma neovascular y catarata complicada",
      "Ceguera irreversible"
    ],
    "treatments": [
      "Control metabólico estricto de glucosa y presión arterial",
      "Inyecciones intravítreas de fármacos antiangiogénicos o corticoides de depósito",
      "Fotocoagulación con láser argón y vitrectomía en etapas avanzadas"
    ],
    "faqs": [
      {
        "question": "P: ¿Cada cuánto debe revisarse los ojos un paciente diabético?",
        "answer": "Todo paciente con diabetes debe someterse a una revisión de fondo de ojo con pupila dilatada al menos una vez al año, incluso si considera que ve perfectamente."
      },
      {
        "question": "P: ¿Qué es la uveítis?",
        "answer": "Es la inflamación interna del ojo. A diferencia de una conjuntivitis común, la uveítis compromete estructuras internas y puede causar daño severo permanente si no se trata con prontitud."
      }
    ],
    "sources": [],
    "relatedServices": [
      "serv-consulta-general"
    ],
    "relatedSymptoms": [
      "symp-vision-borrosa",
      "symp-ojo-rojo",
      "symp-halos-destellos"
    ],
    "image": "/enfermedades/retinopatia.png",
    "seo": {
      "title": "Tratamiento de Retinopatía Diabética Mérida | Dra. Fiona Xacur",
      "description": "Especialista en prevención y control de retinopatía diabética y uveítis en Mérida. Cuide su fondo de ojo con la Dra. Fiona Xacur.",
      "keywords": [
        "retinopatía diabética Mérida",
        "uveítis tratamiento Mérida",
        "fotocoagulación láser retina",
        "fondo de ojo diabéticos"
      ]
    }
  },
  {
    "id": "cond-conjuntivitis-y-alergias",
    "slug": "conjuntivitis-y-alergias",
    "name": "Conjuntivitis y Alergias Oculares",
    "technicalName": "Conjuntivitis Infecciosa y Alérgica",
    "description": "La conjuntivitis es la inflamación de la conjuntiva, la membrana transparente que recubre el interior de los párpados y la parte blanca del ojo. Al inflamarse, los vasos sanguíneos se hacen más visibles, dando al ojo un aspecto rojo o rosa. Puede deberse a infecciones virales o bacterianas altamente contagiosas, o bien a reacciones alérgicas producidas por el polen, ácaros del polvo o el pelo de mascotas, muy comunes en climas cálidos.",
    "symptoms": [
      "Enrojecimiento en uno o ambos ojos acompañado de lagrimeo constante",
      "Comezón, picazón o ardor intenso en los ojos (típico de alergias)",
      "Secreción ocular transparente, blanquecina o amarillenta que forma costras en las pestañas",
      "Sensación de arenilla o cuerpo extraño y ligera sensibilidad a la luz"
    ],
    "causes": [
      "Infecciones virales (frecuentemente asociadas a resfriados y altamente contagiosas)",
      "Infecciones bacterianas por transferencia de microorganismos a los ojos",
      "Reacciones de hipersensibilidad a alérgenos ambientales como polen, polvo o caspa animal"
    ],
    "riskFactors": [
      "Exposición a alérgenos estacionales o irritantes como el humo y cosméticos",
      "Falta de higiene de manos o compartir toallas y objetos personales",
      "Uso prolongado, inadecuado o dormir con lentes de contacto sin desinfección"
    ],
    "mexicoStats": "La conjuntivitis representa uno de los diez motivos principales de consulta en el sistema de salud pública en México, con un aumento significativo en épocas de polinización y calor.",
    "complications": [
      "Afectación de la córnea (queratitis) en casos bacterianos graves no tratados",
      "Infección crónica por el frotamiento persistente que puede dañar la córnea",
      "Disminución temporal de la visión si la secreción ocular es abundante",
      "Cicatrices en la conjuntiva y en la córnea"
    ],
    "treatments": [
      "Uso de lubricantes oculares (lágrimas artificiales) frías para aliviar la irritación",
      "Gotas antihistamínicas y estabilizadoras de mastocitos para conjuntivitis alérgicas",
      "Gotas antibióticas o antiinflamatorias específicas recetadas por el oftalmólogo"
    ],
    "faqs": [
      {
        "question": "P: ¿Cómo puedo evitar contagiar la conjuntivitis a mi familia?",
        "answer": "Lávate las manos frecuentemente con agua y jabón, no te frotes los ojos, utiliza toallas y fundas de almohada individuales y cámbialas a diario. Suspende temporalmente el uso de maquillaje y lentes de contacto."
      },
      {
        "question": "P: ¿Cuál es la diferencia entre la conjuntivitis alérgica y la infecciosa?",
        "answer": "La alérgica produce una comezón intensa y secreción acuosa o hialina. La infecciosa puede empezar en un solo ojo, suele acompañarse de secreción espesa amarillenta o verdosa (lagañas) y es muy contagiosa."
      },
      {
        "question": "P: ¿Es bueno usar gotas de manzanilla para la conjuntivitis?",
        "answer": "No se recomienda el uso de remedios caseros como té de manzanilla, ya que no son estériles y pueden introducir bacterias, hongos o partículas de plantas al ojo, empeorando la inflamación o causando una infección secundaria grave."
      }
    ],
    "sources": [],
    "relatedServices": [
      "serv-consulta-general"
    ],
    "relatedSymptoms": [
      "symp-ojo-rojo",
      "symp-comezon-ojos",
      "symp-lagrimeo"
    ],
    "image": "/enfermedades/conjuntivitis.png",
    "seo": {
      "title": "Tratamiento de Conjuntivitis y Alergias Oculares Mérida | Dra. Fiona",
      "description": "Alivio para ojos rojos y comezón. Diagnóstico y tratamiento de conjuntivitis alérgica e infecciosa en Mérida con la Dra. Fiona Xacur.",
      "keywords": [
        "conjuntivitis Mérida",
        "ojo rojo con lagañas Mérida",
        "alergia en los ojos tratamiento",
        "oftalmólogo Mérida"
      ]
    }
  }
];
