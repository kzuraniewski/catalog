import { faker } from '@faker-js/faker/locale/pl';

interface Row {
	id: string;
	name: string;
	description: string;
}

const rows: Row[] = [];
const range = Math.floor(Math.random() * 29 + 1);

for (let i = 0; i < range; i++) {
	rows.push({
		id: faker.database.column(),
		name: faker.lorem.words(2),
		description: faker.lorem.words(5),
	});
}

export default rows;
