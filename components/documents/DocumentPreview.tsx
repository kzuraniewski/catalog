import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import type { DocumentProps } from 'react-pdf';
// import { Document, Page, type DocumentProps } from 'react-pdf';

export interface DocumentPreviewProps extends DocumentProps {}

const DocumentPreview = ({ file, ...other }: DocumentPreviewProps) => {
	const [pageNumber, setPageNumber] = useState(1);

	return (
		<Document file={file} {...other}>
			<Page pageNumber={pageNumber} />
		</Document>
	);
};

export default DocumentPreview;
