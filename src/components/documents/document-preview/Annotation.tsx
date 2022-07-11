import { Box, BoxProps, ButtonBase, Tooltip } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export interface AnnotationProps extends BoxProps {
	anchorName: string;
	highlighted?: boolean;
}

const Annotation = ({ anchorName, highlighted = false, ...other }: AnnotationProps) => {
	return (
		<Box position="relative" {...other}>
			<Link href={`#${anchorName}`}>
				<Tooltip title={`Odnośnik ${anchorName}`} placement="top" arrow>
					<ButtonBase
						href={`#${anchorName}`}
						className="renderer"
						sx={theme => ({
							position: 'absolute',
							width: 17,
							height: 17,
							transition: 'color 0.1s',
							color: 'secondary.contrastText',
							borderRadius: theme.shape.borderRadius,
							backgroundColor: 'secondary.main',
							'&:hover': {
								backgroundColor: 'secondary.light',
								boxShadow: 1,
							},
							'&:target': {
								border: '1px solid red',
							},
							outline: theme =>
								highlighted ? `2px solid ${theme.palette.primary.light}` : 'none',
						})}
					>
						{anchorName}
					</ButtonBase>
				</Tooltip>
			</Link>
		</Box>
	);
};

export default Annotation;
