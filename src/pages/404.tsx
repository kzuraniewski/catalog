import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Box, Button, Typography } from '@mui/material';

const NotFound: NextPage = () => {
	const { title } = useDocumentTitle('Not found');

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					pt: 10,
				}}
			>
				<Typography fontSize={80} color="primary">
					404
				</Typography>
				This page doesn&apos;t seem to exist
				<Button variant="contained" sx={{ mt: 7 }}>
					Back to homepage
				</Button>
			</Box>
		</>
	);
};

export default NotFound;
