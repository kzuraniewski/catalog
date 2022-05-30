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
