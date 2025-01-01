import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'With over 6 years of experience working on large-scale projects for both local and international clients, I bring a diverse skill set and a strong foundation in software engineering. I am now seeking new challenges to further develop my expertise. I believe that becoming a proficient software engineer is not about mastering multiple programming languages, but about developing strong logical thinking and a deep understanding of fundamental principles. Hardworking College Student seeking employment. Bringing forth a motivated attitude and a variety of powerful skills. Adept in various social media platforms and office technology programs. Committed to utilizing my skills to further the mission of a company.',
	links: [
		{
			label: 'Phone',
			href: 'htel:+84586288848',
			icon: 'i-carbon-phone'
		},
		{ label: 'GitHub', href: 'https://github.com/rongvangc', icon: 'i-carbon-logo-github' },
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/phuoc-sinh/',
			icon: 'i-carbon-logo-linkedin'
		},
		{ label: 'Email', href: 'mailto:sinhdang2006@gmail.com', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
