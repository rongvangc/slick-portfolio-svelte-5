const firstName = 'Sinh';
const lastName = 'Dang';
const suffix = 'Fullstack Portfolio';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
