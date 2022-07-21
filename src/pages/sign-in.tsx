import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import googleIcon from '../../public/icon-google.svg';
import Head from 'next/head';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Box, Typography, Link as MuiLink, Divider, Button } from '@mui/material';
import * as yup from 'yup';
import Link from 'next/link';
import { AuthPaper } from '../components/auth';
import { Form, FormCheckbox, FormField } from '../components/form';

const validationSchema = yup.object({
	email: yup.string().required('This field is required.'),
	password: yup.string().required('This field is required.'),
});

const initialValues = {
	email: '',
	password: '',
	remember: true,
};

const SignIn: NextPage = () => {
	const { title } = useDocumentTitle('Sign in');

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

				<Form
					validationSchema={validationSchema}
					initialValues={initialValues}
					submitText={'Sign in'}
				>
					<FormField label="Email" name="email" type="email" />
					<FormField label="Password" name="password" type="password" />

					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<FormCheckbox name="remember" required>
							Remember me
						</FormCheckbox>

						<Link href="#">
							<MuiLink href="#">Forgot password?</MuiLink>
						</Link>
					</Box>
				</Form>
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
