import React from 'react';
import { Box, Paper, Typography, type PaperProps } from '@mui/material';

export type AuthPaperProps = PaperProps & {
	title: React.ReactNode;
	subtitle?: React.ReactNode;
};

const AuthPaper = ({ title, subtitle, children, ...other }: AuthPaperProps) => {
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
			<Box sx={{ mb: 5 }}>
				<Typography variant="h1" sx={{ mb: Number(subtitle !== undefined) }}>
					{title}
				</Typography>
				<Typography sx={theme => ({ color: theme.palette.grey[600] })}>
					{subtitle}
				</Typography>
			</Box>

			{children}
		</Paper>
	);
};

export default AuthPaper;
