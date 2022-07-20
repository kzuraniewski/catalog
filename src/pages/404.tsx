import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import useDocumentTitle from '../hooks/useDocumentTitle';

const NotFound: NextPage = () => {
	const { title } = useDocumentTitle('Not found');

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
