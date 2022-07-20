import { Box, BoxProps, Typography } from '@mui/material';
import React from 'react';

export interface AnnotationProps extends BoxProps {
	anchorName: string;
	highlighted?: boolean;
}

const Annotation = ({ anchorName, highlighted = false, ...other }: AnnotationProps) => {
	return (
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

				transition: 'background-color 0.1s, box-shadow 0.1s',
				color: 'secondary.contrastText',
				borderRadius: theme.shape.borderRadius,

				backgroundColor: highlighted ? 'secondary.light' : 'secondary.main',
				boxShadow: Number(highlighted),
			})}
			{...other}
		>
			<Typography variant="button" align="center">
				{anchorName}
			</Typography>
		</Box>
	);
};

export default Annotation;

// TODO: Display element's name as a Tooltip on hover
