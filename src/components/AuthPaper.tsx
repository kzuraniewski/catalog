import React from 'react';
import { Paper, type PaperProps } from '@mui/material';

export type AuthPaperProps = PaperProps & {};

const AuthPaper = ({ children, ...other }: AuthPaperProps) => {
	return (
		<Paper
			sx={{
				px: 5,
				py: 3,
				mx: 'auto',
				mb: 2,
				maxWidth: 500,
			}}
			{...other}
		>
			{children}
		</Paper>
	);
};

export default AuthPaper;
