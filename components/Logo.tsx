import React from 'react';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

export interface LogoProps extends Omit<ImageProps, 'src'> {}

const Logo = ({ ...other }: LogoProps) => {
	return (
		<Link href="/">
			<a>
				<Image
					layout="responsive"
					width={1157}
					height={716}
					alt="Logo"
					priority
					{...other}
					src="/logo.png"
				></Image>
			</a>
		</Link>
	);
};

export default Logo;
