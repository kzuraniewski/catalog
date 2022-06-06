import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Grid } from '@mui/material';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Panel from '../../components/Panel';
import { DocumentCard } from '../../components/documents';

const Katalog: NextPage = () => {
	const { title } = useDocumentTitle();

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<Panel title="Wyszukiwarka maszyn">
				<Grid container spacing={5}>
					<Grid item xs={3}>
						<DocumentCard />
					</Grid>
					<Grid item xs={3}>
						<DocumentCard />
					</Grid>
					<Grid item xs={3}>
						<DocumentCard />
					</Grid>
				</Grid>
			</Panel>
		</>
	);
};

export default Katalog;
