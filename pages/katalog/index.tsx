import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Grid } from '@mui/material';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Panel from '../../components/Panel';
import { DocumentCard } from '../../components/documents';
import Search from '../../components/Search';

const Katalog: NextPage = () => {
	const { title } = useDocumentTitle();

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<Panel title="Wyszukiwarka maszyn">
				{/* Searching, filters */}
				<Box mb={5}>
					<Search />
				</Box>

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
