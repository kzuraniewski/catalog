import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Panel from '../../components/Panel';
import { DocumentPreview, type DocumentPreviewProps } from '../../components/documents';
import { useRouter } from 'next/router';
import DocumentInfo from '../../components/documents/DocumentInfo';
import { Box } from '@mui/material';
import useFetch from '../../hooks/useFetch';
import { type Document } from '../api/dokumenty';
import Annotation from '../../components/documents/document-preview/Annotation';

type Anchor = string | null;

const getAnnotationRenderer = (activeAnchor?: Anchor) =>
	(({ str }) => {
		//FIXME: Redundant divs over non-anchors
		if (str[0] !== '#') return <div />;
		const anchorName = str.substring(1);

		return <Annotation anchorName={anchorName} highlighted={activeAnchor === anchorName} />;
	}) as DocumentPreviewProps['annotationRenderer'];

const Dokument: NextPage = () => {
	const {
		query: { id },
	} = useRouter();

	const { data: document } = useFetch<Document>(`/api/dokumenty?id=${id}`);
	const { title } = useDocumentTitle(document?.id);

	const [activeAnchor, setActiveAnchor] = useState<Anchor>(null);

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<Panel title={id?.toString() || 'Dokument bez nazwy'} parentAnchor={'/katalog'}>
				{document && (
					<Box sx={{ display: 'flex', gap: 5 }}>
						<Box sx={{ minWidth: 500, flexShrink: 0 }}>
							<DocumentPreview
								file={document.url}
								annotationRenderer={getAnnotationRenderer(activeAnchor)}
							/>
						</Box>

						<DocumentInfo
							elements={document.elements}
							onActiveAnchorChange={anchorName => setActiveAnchor(anchorName)}
						/>
					</Box>
				)}
			</Panel>
		</>
	);
};

export default Dokument;
