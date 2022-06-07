import { Box, ButtonBase } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import theme from '../../../themes/base';

export interface AdnotationProps {
	anchor: string;
}

const Adnotation = ({ anchor }: AdnotationProps) => {
	return anchor[0] === '#' ? (
		<Box position="relative">
			<Link href={anchor}>
				<ButtonBase
					href={anchor}
					className="renderer"
					sx={{
						position: 'absolute',
						width: 17,
						height: 17,
						transition: '0.1s',
						color: 'secondary.contrastText',
						borderRadius: theme.shape.borderRadius,
						backgroundColor: 'secondary.main',
						'&:hover': {
							backgroundColor: 'secondary.light',
							boxShadow: theme.shadows[1],
						},
					}}
				>
					{anchor.substring(1)}
				</ButtonBase>
			</Link>
		</Box>
	) : (
		<div></div>
	);
};

export default Adnotation;

//FIXME: Redundant divs over non-anchors
