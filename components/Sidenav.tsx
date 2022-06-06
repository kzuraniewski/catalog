import React from 'react';
import { Drawer, Divider, Box, List, Typography, Link } from '@mui/material';
import { Bookmark, MenuBook } from '@mui/icons-material';
import Logo from './Logo';
import SidenavLink from './SidenavLink';

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
				<Logo />
			</Box>

			<Divider />

			<Box flexGrow={1} my={2}>
				<List>
					<SidenavLink to="/" icon={<MenuBook />}>
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
				<Typography variant="body2" sx={{ display: 'flex', flexDirection: 'column' }}>
					<Link href="mailto:czesci2@maszyny-frankopol.pl">
						czesci2@maszyny-frankopol.pl
					</Link>
					<Link href="tel:535-881-0201">535-881-0201</Link>
					<Link href="tel:25-781-02-81">25 781-02-81</Link>
				</Typography>
			</Box>
		</Drawer>
	);
};

export default Sidenav;
