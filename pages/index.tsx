import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Typography } from '@mui/material';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Panel from '../components/Panel';

const Katalog: NextPage = () => {
	const { title } = useDocumentTitle();

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<Panel title="Wyszukiwarka maszyn"></Panel>
		</>
	);
};

export default Katalog;
