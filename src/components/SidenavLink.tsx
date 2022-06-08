import React from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemProps, ListItemText } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import theme from '../theme';

export interface SidenavItemProps extends ListItemProps {
	icon: React.ReactNode;
	children: string;
	to: string;
}

const SidenavLink = ({ icon, children, to, ...other }: SidenavItemProps) => {
	//TODO: get router from context
	const router = useRouter();

	const isActive = router.pathname.substring(0, to.length) === to;

	return (
		<ListItem disablePadding {...other}>
			<Link href={to}>
				<ListItemButton
					selected={isActive}
					component="a"
					dense
					sx={{
						borderTopLeftRadius: theme.shape.borderRadius,
						borderBottomLeftRadius: theme.shape.borderRadius,
						ml: 1,
						'&.Mui-selected': {
							backgroundColor: 'primary.main',
							color: 'primary.contrastText',
							'&:hover': {
								backgroundColor: 'primary.dark',
							},
						},
					}}
				>
					<ListItemIcon sx={{ color: 'inherit' }}>{icon}</ListItemIcon>
					<ListItemText primary={children} />
				</ListItemButton>
			</Link>
		</ListItem>
	);
};

export default SidenavLink;
