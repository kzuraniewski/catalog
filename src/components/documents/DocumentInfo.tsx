import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import rows from '../../tableRows';
import theme from '../../theme';

// https://github.com/vercel/next.js/discussions/35773#discussioncomment-2485078
const useSSR = () => {
	const [isSSR, setIsSSR] = useState(true);

	useEffect(() => {
		setIsSSR(false);
	}, []);

	return [isSSR];
};

export interface DocumentInfoProps extends React.HTMLAttributes<HTMLElement> {}

const DocumentInfo = ({ ...other }: DocumentInfoProps) => {
	const [isSSR] = useSSR();

	return (
		<TableContainer component={Paper} sx={{ height: 'fit-content' }}>
			{!isSSR && (
				<Table
					size="small"
					sx={{
						['.MuiTableRow-root']: {
							['&:nth-of-type(odd)']: {
								backgroundColor: theme.palette.grey[200],
							},

							['&.MuiTableRow-head']: {
								backgroundColor: theme.palette.primary.main,
								['.MuiTableCell-root']: {
									color: theme.palette.primary.contrastText,
								},
							},
						},
					}}
				>
					<TableHead>
						<TableRow>
							<TableCell>Nr seryjny</TableCell>
							<TableCell>Nazwa</TableCell>
							<TableCell>Opis</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{rows.map(row => (
							<TableRow key={row.id}>
								{Object.values(row).map((value, index) => (
									<TableCell key={index}>{value}</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			)}
		</TableContainer>
	);
};

export default DocumentInfo;

//FEATURE: row sorting
