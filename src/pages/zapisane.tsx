import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Zapisane: NextPage = () => {
	const { title } = useDocumentTitle('Zapisane');

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<div>Zapisane</div>
		</>
	);
};

export default Zapisane;
