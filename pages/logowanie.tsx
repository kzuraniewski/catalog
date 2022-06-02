import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Panel from '../components/Panel';
import { Box, Paper, TextField, Typography, Link as MuiLink } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';

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
	const [loginError, setLoginError] = useState(false);

	useEffect(() => {
		if (!loading) return;

		const id = setTimeout(() => {
			setLoading(false);
			setLoginError(true);
		}, 2000);

		return () => clearTimeout(id);
	}, [loading]);

	const handleChange = (e: React.ChangeEvent) => {
		formik.handleChange(e);

		// Hide login error message when typing
		if (loginError) setLoginError(false);
	};

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<Paper
				sx={{
					p: 3,
					mx: 'auto',
					maxWidth: 600,
				}}
			>
				<Typography variant="h1" sx={{ mb: 4 }}>
					Zaloguj się
				</Typography>

				<form onSubmit={formik.handleSubmit}>
					<Box display="flex" flexDirection="column" gap={2}>
						{loginError && (
							<Paper
								variant="outlined"
								sx={{ backgroundColor: 'error.main', py: 0.3, px: 1 }}
							>
								<Typography sx={{ color: 'error.contrastText' }}>
									Login lub hasło są nieprawidłowe
								</Typography>
							</Paper>
						)}

						<TextField
							label="Login"
							value={formik.values.login}
							onChange={handleChange}
							error={formik.touched.login && Boolean(formik.errors.login)}
							helperText={formik.touched.login && formik.errors.login}
							variant="standard"
							name="login"
						/>
						<TextField
							label="Hasło"
							value={formik.values.password}
							onChange={handleChange}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helperText={formik.touched.password && formik.errors.password}
							variant="standard"
							name="password"
						/>

						<Box display="flex" mt={4}>
							<Typography sx={{ flexGrow: 1 }}>
								Problemy z logowaniem?{' '}
								<Link href="#">
									<MuiLink variant="body2" href="#">
										Poproś o pomoc
									</MuiLink>
								</Link>
								.
							</Typography>

							<LoadingButton loading={loading} variant="contained" type="submit">
								Zaloguj
							</LoadingButton>
						</Box>
					</Box>
				</form>
			</Paper>
		</>
	);
};

export default Katalog;
