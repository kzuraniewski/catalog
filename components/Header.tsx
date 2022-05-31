import React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import HeaderButton from './HeaderButton';
import { drawerWidth } from './Sidenav';
import { ArrowBack } from '@mui/icons-material';
import UserMenu from './UserMenu';
// import logo from '../assets/logo.svg';

const mainWebsiteUrl = 'http://agrofrankopol.strona-projekt.pl';

const Header = () => {
	return (
		<AppBar
			position="sticky"
			sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
		>
			<Toolbar>
				<HeaderButton href={mainWebsiteUrl} startIcon={<ArrowBack />}>
					Strona główna
				</HeaderButton>

				<Box flexGrow={1} />

				<UserMenu />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
