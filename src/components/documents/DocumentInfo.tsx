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
import { type ElementInfo } from '../../pages/api/dokumenty';

// https://github.com/vercel/next.js/discussions/35773#discussioncomment-2485078
const useSSR = () => {
	const [isSSR, setIsSSR] = useState(true);

	useEffect(() => {
		setIsSSR(false);
	}, []);

	return [isSSR];
};

export interface DocumentInfoProps extends React.HTMLAttributes<HTMLElement> {
	elements: ElementInfo[];
	onActiveAnchorChange?: (anchorName: ElementInfo['id'] | null) => any;
}

const DocumentInfo = ({ elements, onActiveAnchorChange, ...other }: DocumentInfoProps) => {
	const [isSSR] = useSSR();

	return (
		<TableContainer component={Paper} sx={{ height: 'fit-content' }}>
			{!isSSR && (
				<Table size="small">
					<TableHead>
						<TableRow
							sx={theme => ({
								backgroundColor: theme.palette.primary.main,
								['.MuiTableCell-root']: {
									color: theme.palette.primary.contrastText,
								},
							})}
						>
							<TableCell>Nr odnośnika</TableCell>
							<TableCell>Nr seryjny</TableCell>
							<TableCell>Nazwa</TableCell>
							<TableCell>Opis</TableCell>
						</TableRow>
					</TableHead>

					<TableBody onMouseLeave={() => onActiveAnchorChange?.(null)}>
						{elements.map((element, index) => (
							<TableRow
								key={element.id}
								hover
								onMouseEnter={() => onActiveAnchorChange?.((index + 1).toString())}
								sx={theme => ({
									['&:nth-of-type(odd)']: {
										backgroundColor: theme.palette.grey[200],
									},
								})}
							>
								<TableCell>{index + 1}</TableCell>
								{Object.values(element).map((value, index) => (
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