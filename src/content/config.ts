// @ts-ignore
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string(),
    featuredImage: image(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
	draft: z.boolean().default(false)
  }),
});

const projects = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
      title: z.string(),
      description: z.string(),
      featuredImage: image(),
      pubDate: z.coerce.date(),
      tags: z.array(z.string()),
          draft: z.boolean().default(false)
    }),
  });


export const collections = { posts, projects };
