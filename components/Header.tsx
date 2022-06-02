import React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import HeaderLink from './HeaderLink';
import { drawerWidth } from './Sidenav';
import { ArrowBack } from '@mui/icons-material';
import UserMenu from './UserMenu';
import useAuth from '../hooks/useAuth';
// import logo from '../assets/logo.svg';

const mainWebsiteUrl = 'http://agrofrankopol.strona-projekt.pl';

const Header = () => {
	const { user } = useAuth();

	return (
		<AppBar
			position="sticky"
			sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
		>
			<Toolbar>
				<HeaderLink href={mainWebsiteUrl} startIcon={<ArrowBack />}>
					Strona główna
				</HeaderLink>

				<Box flexGrow={1} />

				{user?.isLoggedIn ? (
					<UserMenu />
				) : (
					<HeaderLink href="/logowanie">Zaloguj</HeaderLink>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Header;
