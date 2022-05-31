import { Button, ButtonProps } from '@mui/material';
import React from 'react';

export interface HedaerButtonProps extends ButtonProps {}

const HedaerButton = ({ ...other }: HedaerButtonProps) => {
	return (
		<Button
			variant="text"
			color="inherit"
			sx={{ '&:hover': { backgroundColor: 'primary.light' } }}
			{...other}
		></Button>
	);
};

export default HedaerButton;
