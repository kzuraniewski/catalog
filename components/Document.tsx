import { Box, BoxProps } from '@mui/material';
import React from 'react';

export interface DocumentProps extends BoxProps<'embed'> {
	src: string;
}

const Document = ({ ...other }: DocumentProps) => {
	return (
		<Box
			component="embed"
			type="application/pdf"
			sx={{ width: '100%', height: 400 }}
			{...other}
		/>
	);
};

export default Document;
