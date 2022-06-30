import React, { useRef } from 'react';
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

export interface DocumentCardProps extends CardProps {
	id: string;
	saved: boolean;
	description?: string;
	onSaveChange?: () => any;
}

const DocumentCard = ({ id, description, saved, onSaveChange, ...other }: DocumentCardProps) => {
	return (
		<Card sx={{ width: 270, display: 'flex', flexDirection: 'column' }} {...other}>
			<Link href={`/katalog/${id}`}>
				<CardActionArea
					disableRipple
					href=""
					sx={{
						flexGrow: 1,
						alignItems: 'flex-start',
						display: 'inline-flex',
						justifyContent: 'flex-start',
					}}
				>
					<CardContent>
						<Typography variant="h3" sx={{ mb: 2 }}>
							{id}
						</Typography>
						{description ? (
							<Typography variant="body1">{description}</Typography>
						) : (
							<Typography
								variant="body1"
								sx={{ color: theme => theme.palette.grey[500] }}
							>
								Brak opisu
							</Typography>
						)}
					</CardContent>
				</CardActionArea>
			</Link>

			<Divider />
			<CardActions>
				<Button
					startIcon={saved ? <BookmarkRemove /> : <BookmarkAdd />}
					onClick={() => {
						if (onSaveChange) onSaveChange();
					}}
				>
					{saved ? 'Usuń z zapisanych' : 'Zapisz'}
				</Button>
			</CardActions>
		</Card>
	);
};

export default DocumentCard;
