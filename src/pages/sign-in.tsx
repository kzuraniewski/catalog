import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Box, Paper, TextField, Typography, Link as MuiLink } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';

const validationSchema = yup.object({
	email: yup.string().required('This field is required.'),
	password: yup.string().required('This field is required.'),
});

const SignIn: NextPage = () => {
	const { title } = useDocumentTitle('Sign in');
	const formik = useFormik({
		initialValues: {
			email: '',
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
					Sign in
				</Typography>

				<form onSubmit={formik.handleSubmit}>
					<Box display="flex" flexDirection="column" gap={2}>
						{loginError && (
							<Paper
								variant="outlined"
								sx={{ backgroundColor: 'error.main', py: 0.3, px: 1 }}
							>
								<Typography sx={{ color: 'error.contrastText' }}>
									Invalid email or password
								</Typography>
							</Paper>
						)}

						<TextField
							label="Email"
							value={formik.values.email}
							onChange={handleChange}
							error={formik.touched.email && Boolean(formik.errors.email)}
							helperText={formik.touched.email && formik.errors.email}
							variant="standard"
							name="email"
						/>
						<TextField
							label="Password"
							value={formik.values.password}
							onChange={handleChange}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helperText={formik.touched.password && formik.errors.password}
							variant="standard"
							name="password"
							type="password"
						/>

						<Box display="flex" mt={4}>
							<Typography sx={{ flexGrow: 1 }}>
								Have an issue?{' '}
								<Link href="#">
									<MuiLink variant="body2" href="#">
										Ask for help
									</MuiLink>
								</Link>
								.
							</Typography>

							<LoadingButton loading={loading} variant="contained" type="submit">
								Sign in
							</LoadingButton>
						</Box>
					</Box>
				</form>
			</Paper>
		</>
	);
};

export default SignIn;

// TODO: https://dribbble.com/shots/15392711-Dashboard-Login-Sign-Up
