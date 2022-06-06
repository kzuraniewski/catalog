import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Grid } from '@mui/material';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Panel from '../../components/Panel';
import DocumentCard from '../../components/DocumentCard';
import { useRouter } from 'next/router';

const Katalog: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;

	const { title } = useDocumentTitle(id?.toString());

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<Panel title={`Dokument nr. ${id}`}></Panel>
		</>
	);
};

export default Katalog;
