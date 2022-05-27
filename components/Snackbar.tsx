import React from 'react';
import {
	Snackbar as MuiSnackbar,
	Alert,
	SnackbarProps as MuiSnackbarProps,
	AlertProps,
} from '@mui/material';

export interface SnackbarProps extends MuiSnackbarProps {
	label: string;
	AlertProps?: AlertProps;
}

const Snackbar = ({ label, AlertProps, ...props }: SnackbarProps) => {
	return (
		<MuiSnackbar
			autoHideDuration={6000}
			anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			{...props}
		>
			<Alert severity="success" sx={{ width: 350 }} {...AlertProps}>
				{label}
			</Alert>
		</MuiSnackbar>
	);
};

export default Snackbar;
