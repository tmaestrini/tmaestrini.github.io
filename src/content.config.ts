import { defineCollection, z } from 'astro:content';

const conferences = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		eventDate: z.coerce.date(),
		conference: z.string(),
		speakers: z.array(z.string()).optional(),
		type: z.string().optional(),
        tags: z.array(z.string()).optional(),
		categories: z.array(z.string()).optional(),
		fmContentType: z.string().optional(),
	}),
});

const presentations = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		event: z.string().optional(),
		presentation: z.coerce.date().optional(),
		preview: z.string().optional(),
		draft: z.boolean().optional(),
		tags: z.array(z.string()).optional(),
		categories: z.array(z.string()).optional(),
	}),
});

const topics = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.coerce.date().optional(),
		preview: z.string().optional(),
		draft: z.boolean().optional(),
		tags: z.array(z.string()).optional(),
		categories: z.array(z.string()).optional(),
	}),
});

export const collections = {
	conferences,
	presentations,
	topics,
};
