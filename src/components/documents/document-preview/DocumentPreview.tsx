import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import type { DocumentProps } from 'react-pdf';
import { Box, Paper, Pagination, CircularProgress } from '@mui/material';
import Error from './Error';
import Loading from './Loading';

export interface DocumentPreviewProps extends Pick<DocumentProps, 'file'> {
	annotationRenderer: typeof Page['prototype']['props']['customTextRenderer'];
}

const DocumentPreview = ({ file, annotationRenderer }: DocumentPreviewProps) => {
	const [pageNumber, setPageNumber] = useState(1);
	const [pageCount, setPageCount] = useState(0);

	return (
		<Box sx={{ position: 'relative', mx: 'auto', width: 'fit-content', minWidth: 300 }}>
			<Document
				file={file}
				onLoadSuccess={({ numPages }) => setPageCount(numPages)}
				error={<Error message="Nie udało się załadować dokumentu." />}
				loading={<Loading />}
				noData={<Error message="Nie wybrano pliku PDF." />}
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
					{Array.from({ length: pageCount }, (_el, index) => index + 1).map(num => (
						// Render Page component as a Box to use `sx`
						<Box
							key={num}
							component={Page}
							pageNumber={num}
							error={<Error message="Nie udało się załadować strony." />}
							loading={<Loading />}
							noData={<Error message="Nie wybrano strony." />}
							customTextRenderer={annotationRenderer}
							sx={{
								display: num === pageNumber ? 'block' : 'none',
							}}
						/>
					))}
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

//FEATURE: Log errors
