import React from 'react';
import { AppBar, Box, Button, Link, Toolbar } from '@mui/material';
// import logo from '../assets/logo.svg';

const Header = () => {
	return (
		<AppBar position="sticky">
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
