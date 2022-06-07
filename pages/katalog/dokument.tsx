import React from 'react';
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Panel from '../../components/Panel';
import { DocumentPreview } from '../../components/documents';

interface Props {
	id: string | string[] | undefined;
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
	console.log(params);

	return {
		props: { id: JSON.parse(JSON.stringify(params?.id)) },
	};
};

const Dokument: NextPage<Props> = ({ id }) => {
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
