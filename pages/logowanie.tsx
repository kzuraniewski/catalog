import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Panel from '../components/Panel';
import { Box, Paper, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
	login: yup.string().required('To pole jest wymagane.'),
	password: yup.string().required('To pole jest wymagane.'),
});

const Katalog: NextPage = () => {
	const { title } = useDocumentTitle('Logowanie');
	const formik = useFormik({
		initialValues: {
			login: '',
			password: '',
		},
		validationSchema,
		onSubmit: values => {
			setLoading(true);
		},
	});

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const id = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(id);
	});

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<Panel title="Panel logowania">
				<Paper
					sx={{
						p: 3,
						mx: 'auto',
						maxWidth: 600,
					}}
				>
					<form onSubmit={formik.handleSubmit}>
						<Box display="flex" flexDirection="column" gap={2}>
							<TextField
								label="Login"
								value={formik.values.login}
								onChange={formik.handleChange}
								error={formik.touched.login && Boolean(formik.errors.login)}
								helperText={formik.touched.login && formik.errors.login}
								variant="standard"
								name="login"
							/>
							<TextField
								label="Hasło"
								value={formik.values.password}
								onChange={formik.handleChange}
								error={formik.touched.password && Boolean(formik.errors.password)}
								helperText={formik.touched.password && formik.errors.password}
								variant="standard"
								name="password"
							/>

							<LoadingButton
								loading={loading}
								variant="contained"
								type="submit"
								sx={{ ml: 'auto', mt: 4 }}
							>
								Zaloguj
							</LoadingButton>
						</Box>
					</form>
				</Paper>
			</Panel>
		</>
	);
};

export default Katalog;
