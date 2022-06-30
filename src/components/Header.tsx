import React from 'react';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import HeaderLink from './HeaderLink';
import { drawerWidth } from './Sidenav';
import { ArrowBack } from '@mui/icons-material';
import UserMenu from './UserMenu';
import useAuth from '../hooks/useAuth';
import Link from 'next/link';

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
					<Link href="/logowanie">
						<Button href="/logowanie" variant="contained" color="secondary">
							Zaloguj się
						</Button>
					</Link>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Header;
