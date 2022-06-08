import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import type { DocumentProps, TextLayerItemInternal } from 'react-pdf';
import { Box, Paper, Pagination, CircularProgress } from '@mui/material';
import Annotation from './Annotation';
import Error from './Error';
import Loading from './Loading';

export interface DocumentPreviewProps extends Pick<DocumentProps, 'file'> {}

const textRenderer = ({ str }: TextLayerItemInternal) => {
	//FIXME: Redundant divs over non-anchors
	if (str[0] !== '#') return <div />;

	return <Annotation anchorName={str.substring(1)} />;
};

const DocumentPreview = ({ file }: DocumentPreviewProps) => {
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
					<Page
						pageNumber={pageNumber}
						error={<Error message="Nie udało się załadować strony." />}
						loading={<Loading />}
						noData={<Error message="Nie wybrano strony." />}
						customTextRenderer={textRenderer}
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

//FEATURE: Log errors
