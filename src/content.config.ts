import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { type TechIconKey, techIcons } from '$assets/icons';

const projectCollection = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        startDate: z.date(),
        visibility: z.enum([ 'flagship', 'timeline' ]).default('timeline'),
        type: z.enum([ 'personal', 'school', 'work' ]).default('personal'),
        image: image(),
        github: z.string().url().optional(),
        url: z.string().url().optional(),
        tech: z.array(z.enum(Object.keys(techIcons) as [ TechIconKey ])),
    }),
});

export const collections = {
    'projects': projectCollection,
};
