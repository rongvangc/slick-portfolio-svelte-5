import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'source-code',
		company: 'SourceCode',
		description: 'Create customer portal for customer',
		contract: ContractType.Contract,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2022, 6, 0) },
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
		name: 'Full-stack developer',
		color: 'red',
		links: [],
		logo: Assets.Fwd,
		shortDescription: 'Create customer portal for customer'
	},
	{
		slug: 'aperia',
		company: 'Aperia',
		description:
			'Worked on projects involving debt, loans, and credit cards, focusing on user information management to improve customer interactions.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Ho Chi Minh',
		period: { from: new Date(2020, 6, 1), to: new Date(2022, 7, 1) },
		skills: getSkills('ts', 'js', 'reactjs', 'nodejs', 'jest', 'tailwind', 'figma'),
		name: 'Middle developer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription:
			'Worked on projects involving debt, loans, and credit cards, focusing on user information management to improve customer interactions.'
	},
	{
		slug: 'carp-tech',
		company: 'Carp Tech',
		description:
			'Developed a comprehensive system for pricing calculations and debt loan management',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Ho Chi Minh',
		period: { from: new Date(2019, 9, 1), to: new Date(2020, 6, 1) },
		skills: getSkills('js', 'reactjs', 'nodejs', 'jest'),
		name: 'Junior Developer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription:
			'Developed a comprehensive system for pricing calculations and debt loan management'
	},
	{
		slug: 'ads-plus',
		company: 'Ads plus',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Ho Chi Minh',
		period: { from: new Date(2018, 3, 3), to: new Date(2019, 9, 3) },
		skills: getSkills('js'),
		name: 'Fresher Developer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
