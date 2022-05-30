import React from 'react';
import { AppBar, Box, Button, Link, Toolbar } from '@mui/material';
import { drawerWidth } from './Sidenav';
// import logo from '../assets/logo.svg';

const Header = () => {
	return (
		<AppBar
			position="sticky"
			sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
		>
			<Toolbar>
				<Box flex={1} sx={{ '& img': { height: '3.2rem' } }}>
					<Link href="/">{/* <img src={logo} alt="Logo" /> */}</Link>
				</Box>

				<Button
					variant="text"
					sx={{
						color: 'primary.contrastText',
						'&:hover': { backgroundColor: 'primary.light' },
					}}
				>
					Login
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
