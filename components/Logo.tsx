/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ImageProps } from 'next/image';
import Link from 'next/link';
import { Box } from '@mui/material';
import { BoxProps } from '@mui/system';

export interface LogoProps extends Omit<BoxProps, 'src'> {}

const Logo = ({ ...other }: LogoProps) => {
	return (
		<Link href="/">
			<a>
				<Box component="img" alt="Logo" width="100%" src="/logo.png" {...other} />
			</a>
		</Link>
	);
};

export default Logo;
