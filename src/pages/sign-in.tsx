import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import googleIcon from '../../public/icon-google.svg';
import Head from 'next/head';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {
	Box,
	Paper,
	TextField,
	Typography,
	Link as MuiLink,
	Checkbox,
	FormControlLabel,
	Divider,
	Button,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';
import { AuthPaper } from '../components/auth';

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
			remember: true,
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

			<AuthPaper title="Sign in" subtitle="Welcome back! Please enter your details.">
				<Button fullWidth variant="outlined" startIcon={<Image src={googleIcon} alt="" />}>
					Sign in with Google
				</Button>

				<Divider sx={theme => ({ mt: 4, mb: 1, color: theme.palette.text.disabled })}>
					or
				</Divider>

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
							type="email"
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

						<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
							<FormControlLabel
								control={
									<Checkbox
										checked={formik.values.remember}
										onChange={handleChange}
										name="remember"
									/>
								}
								label="Remember me"
							/>

							<Typography sx={{ display: 'flex', alignItems: 'center' }}>
								<Link href="#">
									<MuiLink href="#">Forgot password?</MuiLink>
								</Link>
							</Typography>
						</Box>

						<LoadingButton loading={loading} variant="contained" type="submit">
							Sign in
						</LoadingButton>
					</Box>
				</form>
			</AuthPaper>

			<Typography align="center">
				Not registered yet?{' '}
				<Link href="/sign-up">
					<MuiLink href="/sign-up">Create an Account</MuiLink>
				</Link>
			</Typography>
		</>
	);
};

export default SignIn;

// TODO: https://dribbble.com/shots/15392711-Dashboard-Login-Sign-Up
