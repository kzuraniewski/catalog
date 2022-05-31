import React from 'react';
import { Divider, Paper, PaperProps, Typography } from '@mui/material';

export interface PanelProps extends React.HTMLAttributes<HTMLElement> {
	title: string;
}

const Panel = ({ title, children, ...other }: PanelProps) => {
	return (
		<div {...other}>
			<Typography variant="h1">{title}</Typography>
			<Divider
				sx={{
					mt: 0.7,
					mb: 2,
				}}
			/>

			{children}
		</div>
	);
};

export default Panel;
