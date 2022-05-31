import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Katalog: NextPage = () => {
	const { title } = useDocumentTitle();

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<div>Katalog</div>
		</>
	);
};

export default Katalog;
