import { MetadataRoute } from "next";
import { diseases } from "@/data/diseases";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const diseaseUrls = diseases.map((d) => ({
    url: `${baseUrl}/enfermedades/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const serviceUrls = services.map((s) => ({
    url: `${baseUrl}/servicios/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const symptomUrls = symptoms.map((s) => ({
    url: `${baseUrl}/sintomas/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    ...diseaseUrls,
    ...serviceUrls,
    ...symptomUrls,
    {
      url: `${baseUrl}/aviso-de-privacidad`,
      lastModified: new Date(),
      priority: 0.3,
    },
  ];
}
