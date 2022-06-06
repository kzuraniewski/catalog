import { Box, BoxProps } from '@mui/material';
import React from 'react';

export interface DocumentPreviewProps extends BoxProps<'embed'> {
	src: string;
}

const DocumentPreview = ({ ...other }: DocumentPreviewProps) => {
	return (
		<Box
			component="embed"
			type="application/pdf"
			sx={{ width: '100%', height: 400 }}
			{...other}
		/>
	);
};

export default DocumentPreview;
