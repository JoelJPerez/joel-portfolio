import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localizedContent = z.object({
  tagline: z.string(), // one-line description shown on cards
  challenge: z.string(),
  solution: z.string(),
  highlights: z.array(z.string()).default([]),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    // Shared across languages
    title: z.string(),
    status: z.enum(['shipped', 'in-development']),
    featured: z.boolean().default(false),
    order: z.number().default(99), // lower = shown first
    stack: z.array(z.string()),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    image: z.string().optional(), // path under /public, e.g. "/projects/orderflow.png"
    // Localized narrative
    en: localizedContent,
    es: localizedContent,
  }),
});

export const collections = { projects };
