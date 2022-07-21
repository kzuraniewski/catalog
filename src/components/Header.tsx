import React from 'react';
import { AppBar, Box, Button, Stack, Toolbar } from '@mui/material';
import HeaderLink from './HeaderLink';
import { drawerWidth } from './Sidenav';
import { ArrowBack } from '@mui/icons-material';
import UserMenu from './UserMenu';
import useAuth from '../hooks/useAuth';
import Link from 'next/link';

const mainWebsiteUrl = '#';

const Header = () => {
	const { user } = useAuth();

	return (
		<AppBar
			position="sticky"
			sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
		>
			<Toolbar>
				<HeaderLink href={mainWebsiteUrl} startIcon={<ArrowBack />}>
					Main website
				</HeaderLink>

				<Box flexGrow={1} />

				{user?.isLoggedIn ? (
					<UserMenu />
				) : (
					<>
						<HeaderLink href="/sign-in">Sign in</HeaderLink>

						<Link href="/sign-up">
							<Button
								href="/sign-up"
								variant="contained"
								color="secondary"
								sx={{ ml: 1 }}
							>
								Create account
							</Button>
						</Link>
					</>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Header;
