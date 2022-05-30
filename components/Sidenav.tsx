import React from 'react';
import { Drawer, Divider } from '@mui/material';
import Logo from './Logo';
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
					backgroundColor: 'secondary.main',
					width: drawerWidth,
				},
			}}
			variant="permanent"
			anchor="left"
			{...other}
		>
			<Logo />
			<Divider sx={{ mb: 2 }} />
			<Search />
		</Drawer>
	);
};

export default Sidenav;
