import { Box, BoxProps, Tooltip, Typography } from '@mui/material';
import React from 'react';

export interface AnnotationProps extends BoxProps {
	anchorName: string;
	highlighted?: boolean;
}

const Annotation = ({ anchorName, highlighted = false, ...other }: AnnotationProps) => {
	return (
		<Box position="relative" {...other}>
			<Tooltip title={`Odnośnik ${anchorName}`} placement="top" arrow>
				<Box
					className="renderer"
					sx={theme => ({
						position: 'absolute',
						userSelect: 'none',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',

						width: '1.2rem',
						height: '1.2rem',
						transform: 'translate(-0.2rem, -0.2rem)',

						transition: 'color 0.1s',
						color: 'secondary.contrastText',
						borderRadius: theme.shape.borderRadius,
						backgroundColor: 'secondary.main',
						outline: theme =>
							highlighted ? `2px solid ${theme.palette.primary.light}` : 'none',

						'&:hover': {
							backgroundColor: 'secondary.light',
							boxShadow: 1,
						},
					})}
				>
					<Typography variant="button" align="center">
						{anchorName}
					</Typography>
				</Box>
			</Tooltip>
		</Box>
	);
};

export default Annotation;

// TODO: Display element's name as a Tooltip on hover
