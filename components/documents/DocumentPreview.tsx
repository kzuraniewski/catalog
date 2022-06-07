import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import type { DocumentProps } from 'react-pdf';
import { Box, Paper, Pagination, CircularProgress } from '@mui/material';

export interface DocumentPreviewProps extends Pick<DocumentProps, 'file'> {}

const DocumentPreview = ({ file }: DocumentPreviewProps) => {
	const [pageNumber, setPageNumber] = useState(1);
	const [pageCount, setPageCount] = useState(0);

	return (
		<Box position="relative">
			<Document
				file={file}
				onLoadSuccess={({ numPages }) => setPageCount(numPages)}
				error="Podczas ładowania dokumentu wystąpił błąd."
				loading={<CircularProgress color="inherit" size={16} />}
				noData="Nie wybrano pliku PDF."
			>
				<Paper
					elevation={3}
					sx={{
						mx: 'auto',
						width: 'min-content',
						minWidth: 300,
						minHeight: 200,
					}}
				>
					<Page
						pageNumber={pageNumber}
						error="Nie udało się załadować strony."
						loading={<CircularProgress color="inherit" size={16} />}
						noData="Nie wybrano strony."
					/>
				</Paper>
			</Document>

			{pageCount >= 2 && (
				<Box
					sx={{
						position: 'absolute',
						bottom: 10,
						left: '50%',
						transform: 'translateX(-50%)',
					}}
				>
					<Pagination
						count={pageCount}
						color="primary"
						shape="rounded"
						page={pageNumber}
						onChange={(_e, page) => setPageNumber(page)}
					/>
				</Box>
			)}
		</Box>
	);
};

export default DocumentPreview;
