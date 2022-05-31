import React from 'react';
import Image, { ImageProps } from 'next/image';

export interface LogoProps extends ImageProps {}

const Logo = ({ ...other }: LogoProps) => {
	return (
		<Image
			layout="responsive"
			width={1157}
			height={716}
			alt="Logo"
			priority
			{...other}
			src="/logo.png"
		></Image>
	);
};

export default Logo;
