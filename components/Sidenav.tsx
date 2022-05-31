import React from 'react';
import { Drawer, Divider, Box, List } from '@mui/material';
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
					backgroundColor: 'secondary.main',
					width: drawerWidth,
				},
			}}
			variant="permanent"
			anchor="left"
			{...other}
		>
			<Logo />
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
			<Box p={2}>Lorem ipsum</Box>
		</Drawer>
	);
};

export default Sidenav;
