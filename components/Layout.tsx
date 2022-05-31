import React, { Suspense } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Header from './Header';
import Loading from './Loading';
import Sidenav from './Sidenav';

export interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<CssBaseline />
			<Header />

			<Box display="flex">
				<Sidenav />

				<Box p={5}>
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</Box>
			</Box>
		</>
	);
};

export default Layout;
