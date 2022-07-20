import React from 'react';
import { Button, Divider, Paper, PaperProps, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Link from 'next/link';

export interface PanelProps extends React.HTMLAttributes<HTMLElement> {
	title: string;
	parentAnchor?: string;
}

const Panel = ({ title, children, parentAnchor, ...other }: PanelProps) => {
	return (
		<div {...other}>
			{parentAnchor && (
				<Link href={parentAnchor}>
					<Button
						startIcon={<ArrowBack />}
						color="secondary"
						sx={{ mb: 1 }}
						href={parentAnchor}
					>
						Back
					</Button>
				</Link>
			)}

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
