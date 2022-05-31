import React from 'react';
import { Drawer, Divider, Box, List } from '@mui/material';
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
				<Search InputBaseProps={{ placeholder: 'Szukaj dokumentu...' }} />

				<List sx={{ mt: 1 }}>
					<SidenavLink to="/" icon={<MenuBook />}>
						Katalog
					</SidenavLink>
					<SidenavLink to="/zapisane" icon={<Bookmark />}>
						Zapisane
					</SidenavLink>
				</List>
			</Box>

			<Divider />
			<Box p={2}>Lorem ipsum</Box>
		</Drawer>
	);
};

export default Sidenav;
