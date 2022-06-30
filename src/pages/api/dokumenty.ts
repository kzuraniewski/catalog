import { faker } from '@faker-js/faker';
import type { NextApiRequest, NextApiResponse } from 'next';

export type Document = {
	id: string;
	saved: boolean;
	description?: string;
};

/**
 * Generates a random id for a document
 */
const getRandomId = () => Math.floor(Math.random() * 999 + 1).toString() as Document['id'];

/**
 * Generates random document data
 * @param id - custom id can be passed
 */
const getRandomDocData = (id: string = getRandomId()) =>
	({
		id,
		description: Math.random() > 0.1 ? faker.lorem.sentences(2) : undefined,
		saved: Math.random() > 0.9,
	} as Document);

/**
 * Generates an array of randomly generated documents
 */
const getRandomDocs = () => {
	const generatedDocs: Document[] = [];
	// Random amnount of documents between 5 and 20
	const amount = Math.floor(Math.random() * 15 + 5);

	// Populate generatedDocs with random data
	for (let i = 0; i < amount; i++) {
		generatedDocs.push(getRandomDocData());
	}

	return generatedDocs;
};

/**
 * Returns a promise that resolves after random amount of miliseconds in given range
 */
const randomDelay = (from: number, to: number) =>
	new Promise<void>(res => {
		const id = setTimeout(() => {
			res();
			clearTimeout(id);
		}, Math.floor(Math.random() * (to - from) + from));
	});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	// Only GET allowed
	if (req.method !== 'GET') res.status(405);

	await randomDelay(200, 1000);

	res.status(200).json(getRandomDocs());
};

export default handler;
