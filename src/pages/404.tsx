import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import useDocumentTitle from '../hooks/useDocumentTitle';

const NotFound: NextPage = () => {
	const { title } = useDocumentTitle('Nie znaleziono');

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<div>404</div>
		</>
	);
};

export default NotFound;
