import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Panel from '../components/Panel';

const Home: NextPage = () => {
	const { title } = useDocumentTitle('Main page');

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<Panel title="Home">Home</Panel>
		</>
	);
};

export default Home;
