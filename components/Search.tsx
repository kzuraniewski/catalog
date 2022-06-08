import { InputBase, Box, alpha, InputBaseProps, BoxProps } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import React from 'react';
import theme from '../themes/base';

export interface SearchProps extends React.HTMLAttributes<HTMLElement> {
	icon?: React.ReactNode;
	IconWrapperProps?: BoxProps;
	InputBaseProps?: InputBaseProps;
}

const Search = ({
	icon = <SearchIcon />,
	IconWrapperProps,
	InputBaseProps,
	...other
}: SearchProps) => {
	return (
		<Box
			position="relative"
			sx={{
				position: 'relative',
				borderRadius: theme.shape.borderRadius,
				backgroundColor: alpha(theme.palette.grey[400], 0.15),
				'&:hover': {
					backgroundColor: alpha(theme.palette.grey[400], 0.25),
				},
				marginRight: theme.spacing(2),
				marginLeft: 0,
				width: '100%',
				[theme.breakpoints.up('sm')]: {
					marginLeft: theme.spacing(3),
					width: 'auto',
				},
			}}
			{...other}
		>
			{/* Search icon wrapper */}
			<Box
				// padding={theme.spacing(0, 2)}
				pl={1}
				pr={2}
				height="100%"
				position="absolute"
				// pointerEvents="none"
				display="flex"
				alignItems="center"
				justifyContent="center"
				{...IconWrapperProps}
			>
				{icon}
			</Box>

			<InputBase
				placeholder="Szukaj..."
				sx={{
					color: 'inherit',
					'& .MuiInputBase-input': {
						padding: theme.spacing(1, 1, 1, 0),
						// vertical padding + font size from searchIcon
						paddingLeft: `calc(1em + ${theme.spacing(3)})`,
						transition: theme.transitions.create('width'),
						width: '100%',
					},
				}}
				fullWidth
				{...InputBaseProps}
			/>
		</Box>
	);
};

export default Search;
