import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';

export interface UserMenuProps extends React.HTMLAttributes<HTMLElement> {}

const UserMenu = ({ ...other }: UserMenuProps) => {
	const [anchor, setAnchor] = React.useState<HTMLElement | null>(null);

	const closeTooltip = () => {
		setAnchor(null);
	};

	return (
		<div {...other}>
			<IconButton
				size="large"
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={event => setAnchor(event.currentTarget)}
				color="inherit"
				sx={{
					'&:hover': {
						backgroundColor: 'primary.light',
					},
				}}
			>
				<AccountCircle />
			</IconButton>

			<Menu
				id="menu-appbar"
				anchorEl={anchor}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				keepMounted
				open={Boolean(anchor)}
				onClose={closeTooltip}
			>
				<MenuItem onClick={closeTooltip}>Profile</MenuItem>
				<MenuItem onClick={closeTooltip}>Log out</MenuItem>
			</Menu>
		</div>
	);
};

export default UserMenu;
