import React from 'react';
import { Drawer, Divider, Box, List, Typography, Link } from '@mui/material';
import { Bookmark, MenuBook } from '@mui/icons-material';
import Logo from './Logo';
import SidenavLink from './SidenavLink';
import Search from './Search';

export interface SidenavProps extends React.HTMLAttributes<HTMLElement> {}

export const drawerWidth = 240;

const Sidenav = ({ ...other }: SidenavProps) => {
	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
				},
			}}
			variant="permanent"
			anchor="left"
			{...other}
		>
			<Box sx={{ m: 2 }}>
				{/* FIXME: incorrect interface */}
				<Logo />
			</Box>

			<Divider />

			<Box flexGrow={1} my={2}>
				<List>
					<SidenavLink to="/katalog" icon={<MenuBook />}>
						Katalog
					</SidenavLink>
					<SidenavLink to="/zapisane" icon={<Bookmark />}>
						Zapisane
					</SidenavLink>
				</List>
			</Box>

			<Divider />
			<Box p={2}>
				<Typography variant="h6" component="h2">
					Kontakt:
				</Typography>
				<Typography
					variant="body2"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						'& .MuiLink-root': {
							width: 'fit-content',
						},
					}}
				>
					<Link href="mailto:foo.bar@baz.com">foo.bar@baz.com</Link>
					<Link href="tel:555-555-5555">555-555-5555</Link>
					<Link href="tel:123-123-1234">123-123-1234</Link>
				</Typography>
			</Box>
		</Drawer>
	);
};

export default Sidenav;
