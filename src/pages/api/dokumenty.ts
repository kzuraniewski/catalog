import { faker } from '@faker-js/faker';
import type { NextApiRequest, NextApiResponse } from 'next';

export type Document = {
	id: string;
	url: string;
	saved: boolean;
	description?: string;
};

/**
 * Generates a random id for a document
 */
const getRandomId = () => Math.floor(Math.random() * 999 + 1).toString() as Document['id'];

/**
 * Generates random document data
 * @param data - custom object can be passed with properties to override
 */
const getRandomDocData = (data?: Partial<Document>) => {
	const id = getRandomId();
	const initial: Document = {
		id,
		url: `/mock-documents/${id}.pdf`,
		description: Math.random() > 0.1 ? faker.lorem.sentences(2) : undefined,
		saved: Math.random() > 0.9,
	};

	if (!data) return initial;

	return Object.assign(initial, data);
};

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

const mockDocs: Document[] = [
	getRandomDocData({
		id: 'test',
		url: '/mock-documents/test.pdf',
		description: 'Przykładowy dokument bez odnośników oraz z jedną stroną.',
	}),
	getRandomDocData({
		id: 'test2',
		url: '/mock-documents/test2.pdf',
		description: 'Przykładowy dokument zawierający odnośniki oraz dwie strony.',
	}),
];

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	// Only GET allowed
	if (req.method !== 'GET') res.status(405).end(`Metoda ${req.method} nie jest dozwolona`);

	await randomDelay(200, 1000);

	// If `id` is specified in query, return a single document data object
	if (req.query.id) {
		if (Array.isArray(req.query.id))
			res.status(404).end(`Użytkownik o id ${req.query.id} nie istnieje`);

		const mockFromId = mockDocs.find(doc => doc.id === req.query.id);

		res.status(200).json(mockFromId ?? getRandomDocData({ id: req.query.id as string }));
		return;
	}

	// Return an array with known document mocks as the first elements,
	// joined with some random data
	res.status(200).json(mockDocs.concat(getRandomDocs()));
};

export default handler;

// TODO: Update response type to be an object with message key
