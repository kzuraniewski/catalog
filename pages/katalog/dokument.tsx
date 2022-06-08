import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Panel from '../../components/Panel';
import { DocumentPreview } from '../../components/documents';
import { useRouter } from 'next/router';

const Dokument: NextPage = () => {
	const {
		query: { id },
	} = useRouter();

	const { title } = useDocumentTitle(id?.toString());

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<Panel title={id?.toString() || 'Dokument bez nazwy'} parentAnchor={'/katalog'}>
				<DocumentPreview file={`/${id}.pdf`} />
			</Panel>
		</>
	);
};

export default Dokument;
