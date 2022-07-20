import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Saved: NextPage = () => {
	const { title } = useDocumentTitle('Saved');

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<div>Saved</div>
		</>
	);
};

export default Saved;
