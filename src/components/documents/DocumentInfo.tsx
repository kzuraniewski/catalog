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
import { type ElementInfo } from '../../pages/api/documents';

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
	activeAnchor?: string | null;
	onActiveAnchorChange?: (anchorName: ElementInfo['id'] | null) => any;
}

const DocumentInfo = ({
	elements,
	activeAnchor,
	onActiveAnchorChange,
	...other
}: DocumentInfoProps) => {
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
							<TableCell>Element</TableCell>
							<TableCell>ID</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Description</TableCell>
						</TableRow>
					</TableHead>

					<TableBody onMouseLeave={() => onActiveAnchorChange?.(null)}>
						{elements.map((element, index) => (
							<TableRow
								key={element.id}
								onMouseEnter={() => onActiveAnchorChange?.((index + 1).toString())}
								sx={theme => ({
									['&:nth-of-type(odd)']: {
										backgroundColor: theme.palette.grey[200],
									},
									'&[data-highlighted], &:hover': {
										backgroundColor: theme.palette.grey[100],
									},
								})}
								data-highlighted={activeAnchor === (index + 1).toString() || null}
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
