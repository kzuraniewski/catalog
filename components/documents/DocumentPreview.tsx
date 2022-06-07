import dynamic from 'next/dynamic';
import React from 'react';
const DocumentPreviewInner = dynamic(import('./DocumentPreviewInner'), { ssr: false });
import type { DocumentPreviewInnerProps } from './DocumentPreviewInner';

const DocumentPreview = ({ ...other }: DocumentPreviewInnerProps) => {
	return (
		<div>
			<DocumentPreviewInner {...other} />
		</div>
	);
};

export default DocumentPreview;
