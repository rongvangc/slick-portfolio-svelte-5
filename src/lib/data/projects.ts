import Assets from './assets';
import { CpProjectMd, AperiaProjectMd } from './md/string-md';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'customer-portal',
		color: 'orange',
		description: CpProjectMd,
		shortDescription: 'Create customer portal for customer',
		links: [{ to: 'https://www.fwd.com.ph/en/customer-portal/login', label: 'Website' }],
		logo: Assets.Fwd,
		name: 'Customer Portal',
		period: {
			from: new Date('06-06-2022')
		},
		skills: getSkills(
			'ts',
			'js',
			'reactjs',
			'nextjs',
			'nestjs',
			'postgres',
			'nodejs',
			'jest',
			'cypress',
			'supabase',
			'tailwind',
			'figma'
		),
		type: 'Customer Portal'
	},
	{
		slug: 'aperia',
		color: 'blue',
		description: AperiaProjectMd,
		shortDescription:
			'Worked on projects involving debt, loans, and credit cards, focusing on user information management to improve customer interactions.',
		links: [{ to: 'https://aperia.com/', label: 'Website' }],
		logo: Assets.Unknown,
		name: 'Aperia Solutions',
		period: {
			from: new Date('06-06-2020'),
			to: new Date('06-06-2022')
		},
		skills: getSkills('ts', 'js', 'reactjs', 'nodejs', 'jest', 'tailwind', 'figma'),
		type: 'Finance Portal'
	}
	// {
	// 	slug: 'slick-portfolio-svelte',
	// 	color: '#ff3e00',
	// 	description:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	shortDescription:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
	// 	logo: Assets.Fwd,
	// 	name: 'MY Customer Portal',
	// 	period: {
	// 		from: new Date('06-06-2023'),
	// 		to: new Date()
	// 	},
	// 	skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
	// 	type: 'Website Template',
	// 	screenshots: [
	// 		{
	// 			label: 'screen 1',
	// 			src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '2',
	// 			src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '3',
	// 			src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '4',
	// 			src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '5',
	// 			src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '6',
	// 			src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		}
	// 	]
	// }
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
