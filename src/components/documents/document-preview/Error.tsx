import React from 'react';
import { Box, Button, Typography, type BoxProps, Link as MuiLink } from '@mui/material';
import { Error as ErrorIcon } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';

export interface ErrorProps extends BoxProps {
	message?: string;
}

const Error = ({ children, message, ...other }: ErrorProps) => {
	const { asPath } = useRouter();
	const lastUrl = asPath.substring(0, asPath.lastIndexOf('/'));

	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 1,
			}}
			{...other}
		>
			<ErrorIcon fontSize="large" color="error" />

			<Typography variant="body2" sx={{ color: theme => theme.palette.error.main }}>
				{message}
			</Typography>
			<Typography variant="body2" sx={{ mt: 5 }}>
				Nieoczekiwany błąd?{' '}
				<Link href="#">
					<MuiLink href="#">Zgłoś problem</MuiLink>
				</Link>
				.
			</Typography>

			{children}

			<Link href={lastUrl}>
				<Button href={lastUrl} variant="outlined" sx={{ mt: 1 }}>
					Powrót
				</Button>
			</Link>
		</Box>
	);
};

export default Error;
