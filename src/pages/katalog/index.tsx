import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Grid, Typography } from '@mui/material';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Panel from '../../components/Panel';
import Search from '../../components/Search';
import { DocumentCard } from '../../components/documents';
import Loading from '../../components/Loading';
import { type Document } from '../api/dokumenty';

const Katalog: NextPage = () => {
	const [documents, setDocuments] = useState<Document[] | null>(null);
	const [error, setError] = useState(false);

	const { title } = useDocumentTitle();

	useEffect(() => {
		fetch('/api/dokumenty')
			.then(res => res.json())
			.then(documents => setDocuments(documents))
			.catch(() => setError(false));
	}, []);

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

				{!documents && error && (
					<Typography
						variant="body2"
						align="center"
						mt={10}
						color={theme => theme.palette.grey[600]}
					>
						Nie znaleziono dokumentów
					</Typography>
				)}
				{!documents && !error && <Loading />}

				{documents && (
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: 4,
							width: 'fit-content',
						}}
					>
						{documents.map((docData, index) => (
							<DocumentCard key={index} {...docData} />
						))}
					</Box>
				)}
			</Panel>
		</>
	);
};

export default Katalog;
