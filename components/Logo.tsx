import React from 'react';
// import Image from 'next/image';
// import logo from '../assets/logo.png';

export interface LogoProps extends React.HTMLAttributes<HTMLElement> {}

const Logo = ({ ...other }: LogoProps) => {
	// return <Image width={300} height={100} src={logo} alt="Logo" {...other}></Image>;
	return (
		<div
			className="logo"
			style={{
				padding: '40px 0',
			}}
			{...other}
		>
			LOGO
		</div>
	);
};

export default Logo;
