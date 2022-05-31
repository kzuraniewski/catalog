import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import HeaderButton from './HeaderButton';
import { drawerWidth } from './Sidenav';
// import logo from '../assets/logo.svg';

const Header = () => {
	return (
		<AppBar
			position="sticky"
			sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
		>
			<Toolbar>
				<HeaderButton>Login</HeaderButton>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
