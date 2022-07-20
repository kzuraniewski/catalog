import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Grid, Typography } from '@mui/material';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Panel from '../../components/Panel';
import Search from '../../components/Search';
import { DocumentCard } from '../../components/documents';
import Loading from '../../components/Loading';
import { type Document } from '../api/documents';
import useFetch from '../../hooks/useFetch';

const Catalog: NextPage = () => {
	const { title } = useDocumentTitle('Document search');
	const { error, data: documents } = useFetch<Document[]>('/api/documents');

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<Panel title="Search for documents">
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
						No documents found
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

export default Catalog;
