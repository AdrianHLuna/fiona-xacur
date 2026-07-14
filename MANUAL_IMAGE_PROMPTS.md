# Manual de Generación de Imágenes con IA — AISO v2.0

> **Versión:** 1.0  
> **Pertenece a:** Arquitectura AISO v2 — Extensión Visual  
> **Complementa:** Manual de Desarrollo Web Médico (arquitectura principal)  
> **Aplica a:** Todos los proyectos médicos derivados de esta plantilla

---

## Propósito

Este manual define el estándar completo para generar el archivo `IMAGE_PROMPTS.md` de cada proyecto médico. Cuando se solicite "genera los prompts de imágenes para el proyecto de [Doctor]", se debe seguir este manual sin necesidad de que el usuario vuelva a explicar el sistema.

---

## Regla de Oro

> Cada proyecto médico AISO v2 debe tener un archivo `IMAGE_PROMPTS.md` en su carpeta raíz con prompts individuales para **cada enfermedad, cada servicio y cada síntoma** definidos en los archivos de datos (`/src/data/`).

---

## 1. Rol y Tono del Generador de Imágenes

```
Rol: Experto en generación de imágenes para marketing médico premium.
Tono: Empático, esperanzador y de alta precisión clínica.
Estilo: Fotorrealismo puro.

PROHIBIDO: Estética futurista, ciencia ficción, hologramas, neones o
interfaces digitales tipo HUD. Las anatomías deben parecer ilustraciones
médicas de libros de texto de ultra-lujo o fotografías clínicas reales.

Limpieza Digital: Cero texto, letras, firmas o logotipos.
Iluminación: Luz blanca clínica brillante o luz natural suave de estudio.
Sin efectos de "brillo digital".
Restricción: Sin sangre ni contenido gráfico alarmante. Todo higienizado y seguro.
```

---

## 2. Estructura Obligatoria de Cada Prompt

Todo prompt individual debe seguir esta estructura exacta:

```
[Descripción Técnica de la Imagen]
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: [Paleta del proyecto — ver Sección 4], Brand Gold (HEX), Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI,
hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

## 3. Tipos de Imágenes por Categoría

Cada especialidad médica dicta el tipo visual predominante. La siguiente tabla define qué tipo de imagen va en cada categoría según el perfil clínico:

### 3.1 Enfermedades (`/public/images/diseases/`)

| Perfil de Especialidad | Tipo de imagen recomendado |
|---|---|
| Hematología / Oncología | Macros microscópicos de células sanguíneas, médula ósea, frotis (tipo atlas de patología) |
| Neurología | Imágenes cerebrales estilizadas, cortes anatómicos del SNC, sin hologramas |
| Traumatología / Ortopedia | Huesos, articulaciones, imágenes tipo rayos X de alta fidelidad estilizada |
| Dermatología | Close-up clínico de piel, lesiones higienizadas y no alarmantes |
| Cardiología | Corazón anatómico, vasos sanguíneos, cross-sections del miocardio |
| General / Pediatría | Contexto clínico empático: niño con médico, sala de consulta |

### 3.2 Servicios / Procedimientos (`/public/images/services/`)

| Tipo de Servicio | Tipo de imagen recomendado |
|---|---|
| Procedimiento diagnóstico (laboratorio) | Instrumentos médicos estériles sobre fondo blanco (product shot clínico) |
| Procedimiento quirúrgico | Instrumental quirúrgico en bandeja, sin manos, sin paciente |
| Consulta / Valoración | Médico con estetoscopio en consulta, ambiente limpio y cálido |
| Estudio de imagen (EEG, ECG, etc.) | Equipo médico real, elegante, no futurista |
| Terapia / Rehabilitación | Paciente (niño o adulto) en sesión con terapeuta, empático |

### 3.3 Síntomas (`/public/images/symptoms/`)

Siempre mostrar **contexto humano empático**: paciente (preferentemente pediátrico si aplica) en un ambiente de confianza, nunca imágenes alarmantes ni dramáticas.

| Tipo de Síntoma | Tipo de imagen recomendado |
|---|---|
| Síntoma físico visible (palidez, moretones) | Close-up clínico suave, iluminación natural, non-alarming |
| Síntoma funcional (fatiga, fiebre) | Paciente descansando con familiar/médico cerca, cálido y empático |
| Síntoma de laboratorio (biometría alterada) | Tubo de sangre + reporte impreso en superficie blanca clínica |
| Síntoma neurológico (tics, marcha) | Paciente en interacción con terapeuta o médico, ambiente clínico seguro |

---

## 4. Paletas de Color por Proyecto

Cada proyecto tiene su paleta base. Al crear `IMAGE_PROMPTS.md`, identificar la paleta del proyecto en su `globals.css` o en la documentación de diseño y aplicarla como `Color Palette` en cada prompt.

### Paleta Tipo: Hematología Pediátrica (Dra. Lizbeth)
```
Color Palette: Natural bone and tissue tones, Brand Gold (#b8aa82), Anthracite (#333333).
```

### Paleta Tipo: Neurología Pediátrica (Dra. Marisol)
```
Color Palette: Soft emerald greens, clinical white, warm pastel accents.
```

### Paleta Tipo: Genérico (si no se conoce la paleta)
```
Color Palette: Natural clinical whites, warm ivory tones, Brand Primary of the project,
Anthracite (#333333).
```

---

## 5. Formato de Archivo de Salida

### Nombre del archivo
```
IMAGE_PROMPTS.md
```

### Ubicación
```
[raíz del proyecto]/IMAGE_PROMPTS.md
```

### Estructura del documento

```markdown
# 🖼️ Image Prompts — [Nombre del Doctor] | [Especialidad]

> [Header con rol, tono, estilo y restricciones — copiar de Sección 1]
> Formato: WEBP 16:9 · `--ar 16:9 --v 6.0`

---

## 📐 Estructura Base de Prompt (Aplicar a todos)
[Copiar bloque de Sección 2]

---

## 🩸 [EMOJI] [CATEGORÍA] (`/public/images/[categoria]/`)

### `nombre-archivo.webp`
**[Condición / Servicio / Síntoma]:** [Nombre]
**Prompt:**
```
[Prompt completo siguiendo la estructura de Sección 2]
```

---

## 📋 Resumen de Archivos
[Tabla con: Categoría | Archivo | Nombre de la entidad]
```

---

## 6. Flujo de Trabajo para Generar IMAGE_PROMPTS.md

Cuando se reciba la instrucción de generar los prompts de imágenes para un proyecto, seguir **exactamente** este flujo:

```
1. Leer /src/data/diseases.ts   → Extraer: id, name, description, image (filename)
2. Leer /src/data/services.ts   → Extraer: id, name, description, type, image (filename)
3. Leer /src/data/symptoms.ts   → Extraer: id, name, description, image (filename)
4. Identificar la especialidad del médico en /src/data/doctor.ts
5. Consultar la tabla de Sección 3 para determinar el tipo de imagen por categoría
6. Identificar la paleta del proyecto (Sección 4)
7. Redactar un prompt para CADA entidad, siguiendo la estructura de Sección 2
8. Crear IMAGE_PROMPTS.md en la raíz del proyecto con la estructura de Sección 5
```

**NUNCA generar imágenes automáticamente.** El archivo `IMAGE_PROMPTS.md` es solo el documento de referencia para que el usuario genere las imágenes en su herramienta de IA preferida.

---

## 7. Herramientas de Generación Compatibles

Los prompts de este sistema son compatibles con las siguientes herramientas:

| Herramienta | Notas de uso |
|---|---|
| **Midjourney v6** | Usar `--ar 16:9 --v 6.0` al final. Mejor para fotorrealismo médico. |
| **DALL-E 3** | Omitir los flags `--ar` y `--v`. Agregar "16:9 aspect ratio" en el texto. |
| **Adobe Firefly** | Compatible directo. Especificar "Photo" como tipo de contenido. |
| **Stable Diffusion XL** | Agregar como negative prompt todo el bloque de Negative Prompt. |
| **Flux (Black Forest Labs)** | Alta fidelidad fotorrealista. Compatible directo. |

---

## 8. Reglas de Nombres de Archivo

Los nombres de archivo deben coincidir **exactamente** con la propiedad `image` definida en los archivos de datos (`.ts`), incluyendo extensión. No inventar nombres.

```typescript
// En diseases.ts
image: "/images/diseases/anemia-ferropenica.webp"
//              ↑ Este es el filename que va en IMAGE_PROMPTS.md
```

Formato de nombres:
- Minúsculas con guiones: `anemia-ferropenica.webp` ✅
- Sin espacios ni caracteres especiales: `anemia ferropénica.png` ❌
- Extensión preferida: **`.webp`** (mejor performance en Next.js)

---

## 9. Prompt de Coherencia Visual (Sesión Inicial)

Al iniciar una sesión de generación en cualquier herramienta, usar siempre este prompt de contexto antes de los prompts individuales:

```
All images in this set must follow a consistent luxury medical photorealism style.
No sci-fi, no holograms, no digital UI. Clean white or neutral clinical environments.
Natural tissue and instrument colors. [Brand color of the project] as accent.
8k resolution, unreal engine 5 photorealism, medical textbook quality.
```

---

## 10. Checklist de Entrega

Antes de entregar el archivo `IMAGE_PROMPTS.md`, verificar:

- [ ] Hay un prompt para **cada** enfermedad en `diseases.ts`
- [ ] Hay un prompt para **cada** servicio en `services.ts`
- [ ] Hay un prompt para **cada** síntoma en `symptoms.ts`
- [ ] Los nombres de archivo en los prompts coinciden con los `image:` en los `.ts`
- [ ] Cada prompt incluye: descripción técnica + Lighting + Color Palette + Composition + Mood + Suffixes + Negative Prompt
- [ ] El archivo incluye tabla de resumen al final
- [ ] El archivo está en la **raíz del proyecto** (no dentro de `/src`)
- [ ] NO se generó ninguna imagen automáticamente

---

## 11. Ejemplo de Referencia

Ver archivos de ejemplo implementados:

- `dra-lizbeth-hernandez/IMAGE_PROMPTS.md` — Hematología Pediátrica (microscopía + product shot clínico)
- `dra-marisol/IMAGE_PROMPTS.md` — Neurología Pediátrica (contexto humano empático + ilustración)
