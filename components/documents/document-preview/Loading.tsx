import { Box, type BoxProps, CircularProgress } from '@mui/material';
import React from 'react';

export interface LoadingProps extends BoxProps {}

const Loading = ({ ...other }: LoadingProps) => {
	return (
		<Box mx="auto" width="min-content" {...other}>
			<CircularProgress color="inherit" size={32} />
		</Box>
	);
};

export default Loading;
