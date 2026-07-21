import * as fs from "fs";
import * as path from "path";

const jsonPath = path.resolve(__dirname, "../../data.json");

if (!fs.existsSync(jsonPath)) {
  console.error(`❌ Archivo data.json no encontrado en ${jsonPath}`);
  process.exit(1);
}

const rawData = fs.readFileSync(jsonPath, "utf8");
const data = JSON.parse(rawData);

// 1. Actualizar src/data/doctor.ts
const doctorPath = path.resolve(__dirname, "../data/doctor.ts");
const doctorContent = `import { DoctorProfile } from "@/types/schema";

export const doctor: DoctorProfile = ${JSON.stringify(data.doctor, null, 2)};
`;
fs.writeFileSync(doctorPath, doctorContent, "utf8");
console.log(`[OK] src/data/doctor.ts actualizado correctamente.`);

// 2. Actualizar src/data/services.ts
const servicesPath = path.resolve(__dirname, "../data/services.ts");
const servicesContent = `import { MedicalService } from "@/types/schema";

export const services: MedicalService[] = ${JSON.stringify(data.services, null, 2)};
`;
fs.writeFileSync(servicesPath, servicesContent, "utf8");
console.log(`[OK] src/data/services.ts actualizado correctamente.`);

// 3. Actualizar src/data/symptoms.ts
const symptomsPath = path.resolve(__dirname, "../data/symptoms.ts");
const symptomsContent = `import { Symptom } from "@/types/schema";

export const symptoms: Symptom[] = ${JSON.stringify(data.symptoms, null, 2)};
`;
fs.writeFileSync(symptomsPath, symptomsContent, "utf8");
console.log(`[OK] src/data/symptoms.ts actualizado correctamente.`);

// 4. Actualizar src/data/diseases.ts
const diseasesPath = path.resolve(__dirname, "../data/diseases.ts");
const diseasesContent = `import { MedicalCondition } from "@/types/schema";

export const diseases: MedicalCondition[] = ${JSON.stringify(data.diseases, null, 2)};
`;
fs.writeFileSync(diseasesPath, diseasesContent, "utf8");
console.log(`[OK] src/data/diseases.ts actualizado correctamente.`);

console.log(`\n✅ ¡Todos los datos y cambios de redacción han sido aplicados con éxito en los archivos de TypeScript!`);
