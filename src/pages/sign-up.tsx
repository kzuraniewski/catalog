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
import YupPassword from 'yup-password';
YupPassword(yup);

const validationSchema = yup.object({
	fullName: yup.string().required('This field is required'),
	email: yup.string().required('This field is required'),
	password: yup
		.string()
		.min(8, 'Password must be 8 to 16 characters long')
		.max(16, 'Password must be 8 to 16 characters long')
		.minLowercase(1, 'Password must contain at least one lowercase and one uppercase character')
		.minUppercase(1, 'Password must contain at least one lowercase and one uppercase character')
		.minNumbers(1, 'Password must contain at least one number')
		.minSymbols(1, 'Password must contain at least one special character')
		.required('This field is required.'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
		.required('This field is required'),
	tos: yup.boolean().required('asd'),
});

const SignUp: NextPage = () => {
	const { title } = useDocumentTitle('Sign in');
	const formik = useFormik({
		initialValues: {
			fullName: '',
			email: '',
			password: '',
			confirmPassword: '',
			tos: false,
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
					px: 5,
					py: 3,
					mx: 'auto',
					mb: 2,
					maxWidth: 500,
				}}
			>
				<Typography variant="h1" sx={{ mb: 1 }}>
					Register
				</Typography>
				<Typography sx={theme => ({ mb: 5, color: theme.palette.grey[600] })}>
					Get access to all the features by creating an account
				</Typography>

				<Button fullWidth variant="outlined" startIcon={<Image src={googleIcon} alt="" />}>
					Sign up with Google
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
									There was an error while creating your account
								</Typography>
							</Paper>
						)}

						<TextField
							label="Full name"
							value={formik.values.fullName}
							onChange={handleChange}
							error={formik.touched.fullName && Boolean(formik.errors.fullName)}
							helperText={formik.touched.fullName && formik.errors.fullName}
							variant="standard"
							name="fullName"
							type="text"
						/>
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
						<TextField
							label="Confirm password"
							value={formik.values.confirmPassword}
							onChange={handleChange}
							error={
								formik.touched.confirmPassword &&
								Boolean(formik.errors.confirmPassword)
							}
							helperText={
								formik.touched.confirmPassword && formik.errors.confirmPassword
							}
							variant="standard"
							name="confirmPassword"
							type="password"
						/>

						<FormControlLabel
							control={
								<Checkbox
									required
									checked={formik.values.tos}
									onChange={handleChange}
									name="tos"
								/>
							}
							label={
								<>
									I&apos;ve read and accept the{' '}
									<Link href="#">
										<MuiLink href="#">Terms & Conditions</MuiLink>
									</Link>
								</>
							}
						/>

						<LoadingButton
							loading={loading}
							variant="contained"
							type="submit"
							sx={{ mt: 2 }}
						>
							Create an account
						</LoadingButton>
					</Box>
				</form>
			</Paper>

			<Typography align="center">
				Already have an account?{' '}
				<Link href="/sign-in">
					<MuiLink href="/sign-in">Sign in</MuiLink>
				</Link>
			</Typography>
		</>
	);
};

export default SignUp;
