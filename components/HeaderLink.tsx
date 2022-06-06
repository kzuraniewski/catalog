import { Button, ButtonProps } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export interface HedaerLinkProps extends ButtonProps {
	href: string;
}

const HedaerLink = ({ href, children, startIcon, ...other }: HedaerLinkProps) => {
	return (
		<Link href={href}>
			<Button
				variant="text"
				color="inherit"
				sx={{ '&:hover': { backgroundColor: 'primary.light' } }}
				href={href}
				startIcon={startIcon}
			>
				{children}
			</Button>
		</Link>
	);
};

export default HedaerLink;

//TODO: button arguments
