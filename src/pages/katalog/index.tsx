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

				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: 4,
						width: 'fit-content',
					}}
				>
					<DocumentCard />
					<DocumentCard />
					<DocumentCard />
					<DocumentCard />
					<DocumentCard />
				</Box>
			</Panel>
		</>
	);
};

export default Katalog;
