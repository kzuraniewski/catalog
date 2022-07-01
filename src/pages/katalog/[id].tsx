import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Panel from '../../components/Panel';
import { DocumentPreview } from '../../components/documents';
import { useRouter } from 'next/router';
import DocumentInfo from '../../components/documents/DocumentInfo';
import { Box } from '@mui/material';
import useFetch from '../../hooks/useFetch';
import { type Document } from '../api/dokumenty';

const Dokument: NextPage = () => {
	const {
		query: { id },
	} = useRouter();

	const { data: document } = useFetch<Document>(`/api/dokumenty?id=${id}`);
	const { title } = useDocumentTitle(document?.id);

	console.log(document);

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<Panel title={id?.toString() || 'Dokument bez nazwy'} parentAnchor={'/katalog'}>
				<Box sx={{ display: 'flex', gap: 5 }}>
					<Box sx={{ minWidth: 500, flexShrink: 0 }}>
						<DocumentPreview file={document?.url} />
					</Box>

					<DocumentInfo />
				</Box>
			</Panel>
		</>
	);
};

export default Dokument;
