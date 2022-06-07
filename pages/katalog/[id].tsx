import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Panel from '../../components/Panel';
import { useRouter } from 'next/router';
import { DocumentPreview } from '../../components/documents';

const Katalog: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;

	const { title } = useDocumentTitle(id?.toString());

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<Panel title={`Dokument nr. ${id}`} parentAnchor={'/katalog'}>
				<DocumentPreview file={`/${id}.pdf`} />
			</Panel>
		</>
	);
};

export default Katalog;
