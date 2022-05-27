import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loading = () => {
	return (
		<Box width="100%" height="100%">
			<CircularProgress
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			/>
		</Box>
	);
};

export default Loading;
