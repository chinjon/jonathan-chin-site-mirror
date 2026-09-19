// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    published: z.coerce.boolean(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    summary: z.string().optional()
  }),
});

const read = defineCollection({
  loader: glob({ base: './src/content/read', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    authorFirst: z.string(),
    authorLast: z.string(),
    rating: z.string(),
    isbn: z.string(),
    published: z.string(),
    read: z.string(),
    start: z.string(),
    pages: z.string(),
    genre: z.array(z.string()),
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { blog, read };