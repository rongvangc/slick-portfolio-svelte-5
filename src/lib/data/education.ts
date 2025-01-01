import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Buon Ma Thuoc',
		logo: Assets.Fpt,
		name: '',
		organization: 'FPT',
		period: { from: new Date(2014, 7, 1), to: new Date(2018, 5, 1) },
		shortDescription: '',
		slug: 'fpt-education',
		subjects: ['Algorithm', 'SQL', 'Html/css', 'Javascript', 'English']
	}
];

const EducationData = { title, items };

export default EducationData;
