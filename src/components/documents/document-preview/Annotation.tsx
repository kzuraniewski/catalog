import { Box, ButtonBase, Tooltip } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import theme from '../../../theme';

export interface AnnotationProps {
	anchorName: string;
}

const Annotation = ({ anchorName }: AnnotationProps) => {
	return (
		<Box position="relative">
			<Link href={`#${anchorName}`}>
				<Tooltip title={`Odnośnik ${anchorName}`} placement="top" arrow>
					<ButtonBase
						href={`#${anchorName}`}
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
						{anchorName}
					</ButtonBase>
				</Tooltip>
			</Link>
		</Box>
	);
};

export default Annotation;
