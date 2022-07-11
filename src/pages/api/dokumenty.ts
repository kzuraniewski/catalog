import { faker } from '@faker-js/faker';
import type { NextApiRequest, NextApiResponse } from 'next';

export type ElementInfo = {
	id: string;
	name: string;
	description: string;
};

export type Document = {
	id: string;
	url: string;
	saved: boolean;
	description?: string;
	elements: ElementInfo[];
};

/**
 * Generates a list of random document elements
 */
const getRandomElements = () => {
	// Random amount of elements between 5 and 20
	const amount = Math.floor(Math.random() * 15 + 5);
	const elements: ElementInfo[] = [];

	for (let i = 0; i < amount; i++) {
		elements.push({
			id: faker.random.numeric(5),
			name: faker.lorem.words(2),
			description: faker.lorem.words(Math.floor(Math.random() * 20)),
		});
	}

	return elements;
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
		url: `/mock-documents/${id}.pdf`,
		description: Math.random() > 0.1 ? faker.lorem.sentences(2) : undefined,
		saved: Math.random() > 0.9,
		elements: getRandomElements(),
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
	if (req.method !== 'GET') res.status(405).end(`Metoda ${req.method} nie jest dozwolona`);

	await randomDelay(200, 1000);

	// If `id` is specified in query, return a single document data object
	if (req.query.id) {
		if (Array.isArray(req.query.id))
			res.status(404).end(`Użytkownik o id ${req.query.id} nie istnieje`);

		res.status(200).json(getRandomDocData(req.query.id as string));
		return;
	}

	res.status(200).json(getRandomDocs());
};

export default handler;
