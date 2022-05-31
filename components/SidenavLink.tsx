import React from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemProps, ListItemText } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

export interface SidenavItemProps extends ListItemProps {
	icon: React.ReactNode;
	children: string;
	to: string;
}

const SidenavLink = ({ icon, children, to, ...other }: SidenavItemProps) => {
	//TODO: get router from context
	const router = useRouter();

	return (
		<ListItem disablePadding {...other}>
			<Link href={to}>
				<ListItemButton selected={router.asPath === to} component="a">
					<ListItemIcon>{icon}</ListItemIcon>
					<ListItemText primary={children} />
				</ListItemButton>
			</Link>
		</ListItem>
	);
};

export default SidenavLink;
