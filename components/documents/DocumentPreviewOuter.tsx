import dynamic from 'next/dynamic';
import React from 'react';
const DocumentPreviewInner = dynamic(import('./DocumentPreview'), { ssr: false });
import type { DocumentPreviewProps } from './DocumentPreview';

const DocumentPreviewOuter = ({ ...other }: DocumentPreviewProps) => {
	return (
		<div>
			<DocumentPreviewInner {...other} />
		</div>
	);
};

export default DocumentPreviewOuter;
