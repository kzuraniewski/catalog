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
import Link from 'next/link';

export interface DocumentCardProps extends CardProps {}

const DocumentCard = ({ ...other }: DocumentCardProps) => {
	const [saved, setSaved] = useState(false);

	const t = Math.floor(Math.random() * 1000);

	return (
		<Card sx={{ width: 270 }} {...other}>
			<Link href={`/katalog/${t}`}>
				<CardActionArea disableRipple href={`/katalog/${t}`}>
					<CardContent>
						<Typography variant="h3" sx={{ mb: 2 }}>
							Lorem ipsum
						</Typography>
						<Typography variant="body1">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
							placeat exercitationem nisi consectetur.
						</Typography>
					</CardContent>
				</CardActionArea>
			</Link>

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
