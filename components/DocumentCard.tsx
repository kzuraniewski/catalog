import React, { useRef, useState } from 'react';
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardProps,
	Divider,
	Typography,
} from '@mui/material';
import { BookmarkAdd, BookmarkRemove } from '@mui/icons-material';

export interface DocumentCardProps extends CardProps {}

const DocumentCard = ({ ...other }: DocumentCardProps) => {
	const [saved, setSaved] = useState(false);

	return (
		<Card {...other}>
			<CardActionArea disableRipple href="#">
				<CardContent>
					<Typography variant="h3" sx={{ mb: 2 }}>
						Lorem ipsum
					</Typography>
					<Typography variant="body1">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam placeat
						exercitationem nisi consectetur.
					</Typography>
				</CardContent>
			</CardActionArea>
			<Divider />
			<CardActions>
				<Button
					startIcon={saved ? <BookmarkRemove /> : <BookmarkAdd />}
					onClick={() => setSaved(saved => !saved)}
				>
					{saved ? 'Usuń z zapisanych' : 'Zapisz'}
				</Button>
			</CardActions>
		</Card>
	);
};

export default DocumentCard;
