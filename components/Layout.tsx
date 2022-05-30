import React, { Suspense } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Header from './Header';
import Loading from './Loading';

export interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<CssBaseline />
			<Header />

			<Box display="flex">
				{/* <Sidenav /> */}

				<Suspense fallback={<Loading />}>{children}</Suspense>
			</Box>
		</>
	);
};

export default Layout;
