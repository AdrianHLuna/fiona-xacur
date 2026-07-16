# Catálogo de Prompts de Imágenes — Oftalmología ("Iris & Optics")

Este catálogo define los prompts específicos para la generación de imágenes con inteligencia artificial (Midjourney v6.0, DALL-E 3, etc.) para el sitio de la **Dra. Fiona Carolina Xacur García**.

---

## Estilo Visual General
- **Estilo:** Fotorrealismo clínico premium y representaciones científicas de alta definición.
- **Paleta de Colores:** Ocean Blue (#45a0cd), Deep Slate Black (#070b12), Laser Gold (#d59704), Seafoam Green (#6cb3ad).
- **Prohibido:** Hologramas futuristas, interfaces de ciencia ficción tipo HUD, neones de fantasía, texto, firmas y marcas de agua.

---

## 1. Perfil del Doctor

### Foto Principal (Hero & Biografía)
- **Ruta:** `/images/doctor.webp`
- **Prompt:**
  ```text
  A professional studio portrait of a 45-year-old Hispanic female ophthalmologist, warm and empathetic smile, short dark hair, wearing a professional clinical white coat over a dark blue blouse. Modern clinical studio background with subtle soft light, clean lighting, high resolution, realistic skin textures.
  Lighting: Clean, bright medical studio lighting, soft shadows.
  Color Palette: Ocean Blue (#45a0cd), Deep Slate Black (#070b12), Anthracite (#333333).
  Composition: Symmetrical scientific view, medium close-up.
  Mood: Trustworthy, professional, empathetic.
  Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 3:4 --v 6.0
  Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, text, words, letters, watermark, signature, male.
  ```

---

## 2. Padecimientos (Enfermedades)

### Miopía y Astigmatismo (Refracción)
- **Ruta:** `/images/diseases/refraccion.webp`
- **Prompt:**
  ```text
  An elegant conceptual physics illustration of light rays passing through a human cornea and focusing incorrectly relative to the retina. Clean optical lens diagrams, light refraction curves.
  Lighting: Optical laboratory clean lighting, focused light beams.
  Color Palette: Deep Slate (#070b12), Ocean Blue (#45a0cd) laser beams, soft gold refraction points.
  Composition: Symmetrical physics diagram view.
  Mood: Scientific, educational, clean.
  Suffixes: realistic medical CGI, 8k, photorealistic textures, vector ray tracing style --ar 16:9 --v 6.0
  Negative Prompt: sci-fi, spaceship, cyberpunk, glowing digital UI, hud, data rings, text, words, watermark.
  ```

### Hipermetropía y Presbicia
- **Ruta:** `/images/diseases/hipermetropia.webp`
- **Prompt:**
  ```text
  A medical illustration showing light rays entering a short eyeball and focusing behind the retina, with a corrective biconvex lens in front of the cornea restoring the focus.
  Lighting: Clean laboratory diagram lighting, glowing optical path lines.
  Color Palette: Deep Slate (#070b12), Ocean Blue (#45a0cd), Seafoam Green (#6cb3ad).
  Composition: Side-view scientific cross-section diagram of the human eye.
  Mood: Educational, precise.
  Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
  Negative Prompt: sci-fi, hologram, hud, glowing digital UI, text, watermark.
  ```

### Pterigión (Carnosidad Ocular)
- **Ruta:** `/images/diseases/pterigion.webp`
- **Prompt:**
  ```text
  A high-quality clinical macro photograph of a human eye showing a mild pterygium, a benign triangular growth of conjunctival tissue onto the cornea.
  Lighting: Clean medical macro flash, sharp detail on iris fibers and sclera vessels.
  Color Palette: Natural eye tones, soft pinkish tissue, deep blue background shadow.
  Composition: Close-up macro of the ocular surface.
  Mood: Clinical, accurate.
  Suffixes: authentic medical photography, 8k, razor sharp focus --ar 16:9 --v 6.0
  Negative Prompt: sci-fi, futuristic, drawing, CGI, cartoon, 3D, neon, watermark, text.
  ```

### Cataratas Oculares
- **Ruta:** `/images/diseases/cataratas.webp`
- **Prompt:**
  ```text
  A detailed scientific medical illustration of a human eye with a cataract, showing the cloudy and opaque lens behind the pupil. Clean anatomical model perspective, detailed structures of the iris and sclera.
  Lighting: Clinical bright white lighting, clean soft shadows.
  Color Palette: Deep Slate (#070b12), Cloudy Gray, Brand Gold (#d59704).
  Composition: Focused clinical macro of the eye anterior segment.
  Mood: Informative, clear, educational.
  Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style --ar 16:9 --v 6.0
  Negative Prompt: hologram, sci-fi, futuristic, cyberpunk, neon, glowing digital UI, hud, text, words, letters, watermark, signature.
  ```

### Queratocono
- **Ruta:** `/images/diseases/queratocono.webp`
- **Prompt:**
  ```text
  A high-end 3D medical visualization of a human cornea thinning and bulging outward into a conical shape (keratoconus). Symmetrical profile view of the anterior chamber showing structural changes.
  Lighting: High-contrast scientific laboratory illumination, detailed light paths.
  Color Palette: Deep Slate Black (#070b12), Ocean Blue (#45a0cd), Seafoam Green (#6cb3ad).
  Composition: Lateral profile of the eye dome.
  Mood: Scientific, diagnostic, expert.
  Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
  Negative Prompt: sci-fi, spaceship, neon, glowing digital UI, hud, text, watermark.
  ```

### Ojo Seco
- **Ruta:** `/images/diseases/ojoseco.webp`
- **Prompt:**
  ```text
  A conceptual macro rendering of the human cornea showing a dry and evaporating tear film surface, highlighting micro-cracks and lack of hydration.
  Lighting: Focused clinical light highlighting dry spots and reflections on the ocular surface.
  Color Palette: Deep Slate (#070b12), Ocean Blue (#45a0cd) representing dry patterns, gold highlights.
  Composition: Ultra macro of the corneal dome.
  Mood: Diagnostic, scientific.
  Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
  Negative Prompt: sci-fi, neon, drawing, hud, text, watermark.
  ```

### Úlceras Corneales y Queratitis
- **Ruta:** `/images/diseases/ulceras.webp`
- **Prompt:**
  ```text
  A high-quality clinical medical illustration of a human eye with a corneal ulcer, showing a localized inflammatory white lesion on the central cornea.
  Lighting: Precise clinical slit-lamp lighting, glowing beam highlighting the corneal layer.
  Color Palette: Natural iris tones, bright white-gray lesion, Deep Slate (#070b12) background.
  Composition: Slit-lamp biomicroscopy macro view.
  Mood: Diagnostic, emergency.
  Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
  Negative Prompt: cartoon, drawing, neon, hud, text, watermark.
  ```

### Glaucoma
- **Ruta:** `/images/diseases/glaucoma.webp`
- **Prompt:**
  ```text
  A high-quality 3D scientific cross-section of a human eye showing the pressure buildup in the anterior chamber and the path to the optic nerve. High definition medical modeling showing the circulation of aqueous humor.
  Lighting: Clean, bright medical studio lighting.
  Color Palette: Deep Slate (#070b12), Ocean Blue (#45a0cd) representing fluid pressure flow, soft gold accent.
  Composition: Scientific cross-section diagram view.
  Mood: Explanatory, precise, professional.
  Suffixes: realistic medical CGI, 8k, photorealistic textures, scientific illustration --ar 16:9 --v 6.0
  Negative Prompt: sci-fi, futuristic, spaceship, neon, glowing digital UI, hud, text, words, letters, watermark, signature.
  ```

### Retinopatía y Uveítis
- **Ruta:** `/images/diseases/retinopatia.webp`
- **Prompt:**
  ```text
  A clinical fundus photography view of a human retina showing microaneurysms and minor hemorrhages on the retina surface. Realistic ophthalmological imaging perspective.
  Lighting: Realistic camera flash fundoscopy lighting, accurate medical detail.
  Color Palette: Warm red-orange tones, Deep Slate Black (#070b12) boundary, Gold spots.
  Composition: Direct fundus camera view, circular optical framing.
  Mood: Clinical, accurate, medical study.
  Suffixes: authentic medical photography, 8k, photorealistic texture --ar 16:9 --v 6.0
  Negative Prompt: sci-fi, futuristic, hologram, digital UI, hud, data rings, drawings, cartoon, watermark, text.
  ```

### Conjuntivitis y Alergias Oculares
- **Ruta:** `/images/diseases/conjuntivitis.webp`
- **Prompt:**
  ```text
  A high-quality clinical macro illustration of a human eye showing conjunctival hyperemia (pink eye), representing conjunctivitis. Soft pinkish inflammation of the white part of the eye (sclera) with fine blood vessels, natural iris and pupil details.
  Lighting: Clean, bright medical studio lighting, soft shadows.
  Color Palette: Ocean Blue (#45a0cd) iris, soft pinkish sclera, Deep Slate Black (#070b12).
  Composition: Focused clinical macro of the eye.
  Mood: Informative, clear, professional.
  Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style --ar 16:9 --v 6.0
  Negative Prompt: hologram, sci-fi, futuristic, cyberpunk, neon, glowing digital UI, hud, text, words, letters, watermark, signature.
  ```

---

## 3. Procedimientos (Servicios)

### Consulta Oftalmológica
- **Ruta:** `/images/services/consulta.webp`
- **Prompt:**
  ```text
  A close-up of a modern ophthalmology slit-lamp biomicroscope in a dark examination room. The microscope's thin blue light beam is active, illuminating a clean diagnostic environment.
  Lighting: Low key clinical exam room lighting, glowing blue slit beam.
  Color Palette: Deep Slate Black (#070b12), Ocean Blue (#45a0cd) reflections, steel accents.
  Composition: Tight close-up of the medical instrument.
  Mood: Precise, professional, clinical.
  Suffixes: realistic CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
  Negative Prompt: person, doctor, patient, sci-fi, futuristic, spaceship, glowing digital UI, hud, text, watermark.
  ```

### Adaptación de Lentes Esclerales
- **Ruta:** `/images/services/lentes-esclerales.webp`
- **Prompt:**
  ```text
  A macro view of a large, high-permeability scleral contact lens being fitted onto a human eye, hovering slightly above the corneal surface showing the clear fluid reservoir.
  Lighting: Clean clinical studio lighting, highlights on lens transparency.
  Color Palette: Ocean Blue (#45a0cd) water reflections, Deep Slate (#070b12) shadow.
  Composition: Extreme close-up ocular surface.
  Mood: High precision, therapeutic.
  Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
  Negative Prompt: drawing, cartoon, sci-fi, neon, hud, text, watermark.
  ```

### Valoración para Cirugía Refractiva (LASIK)
- **Ruta:** `/images/services/lasik.webp`
- **Prompt:**
  ```text
  A macro view of a precision excimer laser system gently emitting a focused cold laser beam towards the cornea of a patient's eye. High technology medical grade laser clinical environment.
  Lighting: Clean clinical blue studio lighting, soft shadows.
  Color Palette: Deep Slate Black (#070b12), Ocean Blue (#45a0cd) laser glow.
  Composition: Close-up clinical macro.
  Mood: High-tech clinical precision, clean, safe.
  Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
  Negative Prompt: sci-fi, futuristic, spaceship, glowing digital UI, hud, text, words, watermark, blood, scary.
  ```

### Valoración para Cirugía de Catarata
- **Ruta:** `/images/services/catarata.webp`
- **Prompt:**
  ```text
  A high-tech optical biometer / laser interferometry machine in a modern clinical room, measuring eye length and calculating intraocular lens details.
  Lighting: Soft bright white clinical lighting.
  Color Palette: Clean white medical device, Ocean Blue (#45a0cd) details, Deep Slate (#070b12).
  Composition: Front-side perspective of the biometry device.
  Mood: Precise, technological, clean.
  Suffixes: realistic CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
  Negative Prompt: person, doctor, patient, sci-fi, futuristic, spaceship, glowing digital UI, hud, text, watermark.
  ```

### Valoración de Queratocono
- **Ruta:** `/images/services/queratocono.webp`
- **Prompt:**
  ```text
  A modern corneal topographer device showing a colorful digital elevation map of a human cornea on its integrated screen, clean clinical desk setting.
  Lighting: Soft medical office lighting, glowing colored display.
  Color Palette: Device white and black, colorful topography maps (blue, green, yellow, red), Deep Slate (#070b12) background.
  Composition: Close-up of the corneal topographer screen and chin rest.
  Mood: Diagnostic, scientific, accurate.
  Suffixes: realistic CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
  Negative Prompt: person, doctor, patient, sci-fi, neon, glowing digital UI, hud, text, watermark.
  ```

---

## 4. Señales de Alarma (Síntomas)

### Ojo Rojo
- **Ruta:** `/images/symptoms/ojo-rojo.webp`
- **Prompt:**
  ```text
  A warm, empathetic close-up photograph of a woman looking with a gentle expression, showing minor eye redness (dilated vessels on the white of the eye) in a soft, non-alarming way. Clean clinical daylight, calm environment.
  Lighting: Soft natural daylight, bright and clinical.
  Color Palette: Warm skin tones, Ocean Blue (#45a0cd) eyes, light gray, soft gold.
  Composition: Close-up face portrait focusing on the eyes.
  Mood: Empathetic, hopeful, comforting.
  Suffixes: authentic medical photography, 8k, razor sharp focus, realistic skin textures --ar 16:9 --v 6.0
  Negative Prompt: sci-fi, neon, glowing digital UI, hud, scary, blood, horror, text, watermark.
  ```

### Visión Borrosa
- **Ruta:** `/images/symptoms/vision-borrosa.webp`
- **Prompt:**
  ```text
  An artistic, non-alarming first-person perspective showing a slightly blurred and out-of-focus view of a warm, modern living room with clean, bright clinical lighting. Symmetrical perspective.
  Lighting: Soft, bright natural light.
  Color Palette: Ocean Blue (#45a0cd), Deep Slate (#070b12), warm beige, Gold (#d59704).
  Composition: First-person blurred focus perspective.
  Mood: Calm, informative, professional.
  Suffixes: realistic CGI, 8k, photorealistic textures, soft depth of field --ar 16:9 --v 6.0
  Negative Prompt: hologram, sci-fi, futuristic, spaceship, glowing digital UI, hud, text, watermark.
  ```

### Carnosidad en el Ojo
- **Ruta:** `/images/symptoms/carnosidad.webp`
- **Prompt:**
  ```text
  A clean, professional close-up photograph of a patient's eye with a small, early-stage pterygium growth on the sclera, presented in a non-scary, clean clinical context.
  Lighting: Bright white clinical studio lighting, soft shadows.
  Color Palette: Natural iris colors, light pink growth tissue, Deep Slate (#070b12) background.
  Composition: Macro focus on the eye surface.
  Mood: Clinical, reassuring, accurate.
  Suffixes: authentic medical photography, 8k, razor sharp focus --ar 16:9 --v 6.0
  Negative Prompt: sci-fi, cartoon, CGI, 3D, neon, watermark, text, scary, blood.
  ```

### Resequedad Ocular
- **Ruta:** `/images/symptoms/resequedad.webp`
- **Prompt:**
  ```text
  An empathetic close-up of a patient gently applying a single clear lubricating eye drop (artificial tear) into their eye, capturing the clear drop hovering above the eye. Clean, sterile clinical setting.
  Lighting: Bright, clean natural daylight.
  Color Palette: Ocean Blue (#45a0cd) water drop reflection, skin tones, Deep Slate Black (#070b12).
  Composition: Tight macro close-up.
  Mood: Reassuring, therapeutic, fresh.
  Suffixes: authentic medical photography, 8k, razor sharp focus --ar 16:9 --v 6.0
  Negative Prompt: sci-fi, futuristic, neon, drawings, cartoon, watermark, text.
  ```

### Dolor Ocular
- **Ruta:** `/images/symptoms/dolor-ocular.webp`
- **Prompt:**
  ```text
  An empathetic portrait of a woman gently touching her temple with a subtle look of discomfort, sitting in a warm, bright modern clinical office. Clean, comfortable atmosphere.
  Lighting: Soft, comforting natural studio lighting.
  Color Palette: Ocean Blue (#45a0cd), Seafoam Green (#6cb3ad), warm wooden tones, Anthracite (#333333).
  Composition: Medium close-up portrait.
  Mood: Empathetic, professional, patient-centered.
  Suffixes: authentic photography, 8k, photorealistic textures, soft depth of field --ar 16:9 --v 6.0
  Negative Prompt: scary, blood, horror, sci-fi, futuristic, neon, glowing digital UI, hud, text, watermark.
  ```

### Sensación de Basura en los Ojos
- **Ruta:** `/images/symptoms/sensacion-cuerpo-extrano.webp`
- **Prompt:**
  ```text
  An empathetic close-up of a person gently holding their hand near their eye as if checking for dust, in a clean, brightly lit modern home clinic environment. Reassuring and soft.
  Lighting: Soft studio lighting, bright background.
  Color Palette: Skin tones, Ocean Blue (#45a0cd), clean white.
  Composition: Portrait close-up.
  Mood: Reassuring, supportive, clinical.
  Suffixes: authentic photography, 8k, photorealistic textures --ar 16:9 --v 6.0
  Negative Prompt: sci-fi, neon, glowing digital UI, hud, text, watermark, scary, blood.
  ```

### Visión Distorsionada u Ondulada
- **Ruta:** `/images/symptoms/distorsionada.webp`
- **Prompt:**
  ```text
  A conceptual representation of warped vision, showing a straight metal window frame or clean wall lines appearing gently distorted and wavy, seen from a first-person perspective in a bright room.
  Lighting: Clean, bright indoor lighting.
  Color Palette: Deep Slate (#070b12), Ocean Blue (#45a0cd), white, gray.
  Composition: Symmetrical room perspective with distorted vertical lines.
  Mood: Educational, clinical, diagnostic.
  Suffixes: realistic CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
  Negative Prompt: sci-fi, futuristic, spaceship, neon, glowing digital UI, hud, text, watermark.
  ```

### Lagrimeo Constante
- **Ruta:** `/images/symptoms/lagrimeo.webp`
- **Prompt:**
  ```text
  A soft, empathetic macro close-up of a clean human eye with a single clear tear rolling gently down the cheek. Clean clinical daylight, highlighting the tear's transparency.
  Lighting: Bright, soft clinical daylight.
  Color Palette: Natural skin tones, Ocean Blue (#45a0cd) iris, transparent water highlights.
  Composition: Macro view of the eye and cheek.
  Mood: Reassuring, human, clinical.
  Suffixes: authentic photography, 8k, razor sharp focus, photorealistic textures --ar 16:9 --v 6.0
  Negative Prompt: sad, crying, depressed, horror, blood, sci-fi, neon, text, watermark.
  ```

### Comezón en los Ojos
- **Ruta:** `/images/symptoms/comezon.webp`
- **Prompt:**
  ```text
  An empathetic clinical view of a patient sitting in a bright consulting room, gesturing as if they feel a tickle near their eye without scratching, warm and gentle expression.
  Lighting: Clean, bright medical office lighting.
  Color Palette: Warm wood tones, Ocean Blue (#45a0cd), light beige, Deep Slate (#070b12).
  Composition: Medium close-up.
  Mood: Reassuring, diagnostic, empathetic.
  Suffixes: authentic photography, 8k, photorealistic textures --ar 16:9 --v 6.0
  Negative Prompt: frotándose con fuerza, frotar ojos, sci-fi, futuristic, neon, text, watermark.
  ```

### Halos y Destellos
- **Ruta:** `/images/symptoms/halos.webp`
- **Prompt:**
  ```text
  A conceptual simulation of night driving vision, showing clean street lamps emitting soft, circular glowing halos and subtle starburst destellos (flares) of light against a dark blue evening sky.
  Lighting: Night city street lights, glowing circular halos and starbursts.
  Color Palette: Deep Slate Black (#070b12) sky, soft Ocean Blue (#45a0cd) halos, Laser Gold (#d59704) flares.
  Composition: First-person driving view through a clean windshield.
  Mood: Informative, diagnostic.
  Suffixes: realistic CGI, 8k, photorealistic light rendering --ar 16:9 --v 6.0
  Negative Prompt: sci-fi, cyberpunk, spaceships, glowing digital UI, hud, text, watermark.
  ```

---

## 5. Resumen de Archivos

| Categoría | Archivo de Destino | Nombre de la Entidad |
|---|---|---|
| Doctor | `/images/doctor.webp` | Foto Principal de la Dra. Fiona Xacur |
| Padecimiento | `/images/diseases/refraccion.webp` | Miopía y Astigmatismo |
| Padecimiento | `/images/diseases/hipermetropia.webp` | Hipermetropía y Presbicia |
| Padecimiento | `/images/diseases/pterigion.webp` | Pterigión (Carnosidad Ocular) |
| Padecimiento | `/images/diseases/cataratas.webp` | Cataratas Oculares |
| Padecimiento | `/images/diseases/queratocono.webp` | Queratocono |
| Padecimiento | `/images/diseases/ojoseco.webp` | Ojo Seco y Blefaritis |
| Padecimiento | `/images/diseases/ulceras.webp` | Úlceras Corneales y Queratitis |
| Padecimiento | `/images/diseases/glaucoma.webp` | Glaucoma |
| Padecimiento | `/images/diseases/retinopatia.webp` | Retinopatía y Uveítis |
| Padecimiento | `/images/diseases/conjuntivitis.webp` | Conjuntivitis y Alergias Oculares |
| Procedimiento | `/images/services/consulta.webp` | Consulta Oftalmológica |
| Procedimiento | `/images/services/lentes-esclerales.webp` | Adaptación de Lentes Esclerales |
| Procedimiento | `/images/services/lasik.webp` | Valoración para Cirugía Refractiva (LASIK) |
| Procedimiento | `/images/services/catarata.webp` | Valoración para Cirugía de Catarata |
| Procedimiento | `/images/services/queratocono.webp` | Valoración de Queratocono |
| Señal de Alarma | `/images/symptoms/ojo-rojo.webp` | Ojo Rojo |
| Señal de Alarma | `/images/symptoms/vision-borrosa.webp` | Visión Borrosa |
| Señal de Alarma | `/images/symptoms/carnosidad.webp` | Carnosidad en el Ojo |
| Señal de Alarma | `/images/symptoms/resequedad.webp` | Resequedad Ocular |
| Señal de Alarma | `/images/symptoms/dolor-ocular.webp` | Dolor Ocular |
| Señal de Alarma | `/images/symptoms/sensacion-cuerpo-extrano.webp` | Sensación de Basura en los Ojos |
| Señal de Alarma | `/images/symptoms/distorsionada.webp` | Visión Distorsionada u Ondulada |
| Señal de Alarma | `/images/symptoms/lagrimeo.webp` | Lagrimeo Constante |
| Señal de Alarma | `/images/symptoms/comezon.webp` | Comezón en los Ojos |
| Señal de Alarma | `/images/symptoms/halos.webp` | Halos y Destellos |
