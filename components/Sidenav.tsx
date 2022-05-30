import { Drawer } from '@mui/material';
import React from 'react';
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
			<Search />
		</Drawer>
	);
};

export default Sidenav;
