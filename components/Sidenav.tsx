import { Drawer } from '@mui/material';
import React from 'react';

export type SidenavProps = {};

const sidenavWidth = 240;

const Sidenav = ({}: SidenavProps) => {
	return (
		<Drawer
			variant="permanent"
			sx={{
				backgroundColor: 'secondary.main',
				color: 'secondary.contrastText',
			}}
			PaperProps={{
				sx: {
					width: sidenavWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: { width: sidenavWidth },
				},
			}}
		></Drawer>
	);
};

export default Sidenav;
