import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Panel from '../../components/Panel';
import { DocumentPreview } from '../../components/documents';
import { useRouter } from 'next/router';
import useFetch from '../../hooks/useFetch';
import { type Document } from '../api/dokumenty';

const Dokument: NextPage = () => {
	const {
		query: { id },
	} = useRouter();

	const { data: document } = useFetch<Document>(`/api/dokumenty?id=${id}`);
	const { title } = useDocumentTitle(document?.id);

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<Panel title={id?.toString() || 'Dokument bez nazwy'} parentAnchor={'/katalog'}>
				<DocumentPreview file={document?.url} />
			</Panel>
		</>
	);
};

export default Dokument;
