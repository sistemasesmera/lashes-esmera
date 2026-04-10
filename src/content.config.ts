import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const cursosCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cursos" }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    short_description: z.string().optional(),

    thumbnail: z.string().optional(),
    banner_desktop: z.string(),
    banner_mobile: z.string(),

    modality: z.enum(["Presencial", "Online"]),

    benefits: z.array(z.string()).optional(),

    order: z.number().optional(),

    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
  }),
});

export const collections = {
  cursos: cursosCollection,
};
