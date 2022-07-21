import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import googleIcon from '../../public/icon-google.svg';
import Head from 'next/head';
import useDocumentTitle from '../hooks/useDocumentTitle';
import {
	Box,
	TextField,
	Typography,
	Link as MuiLink,
	Checkbox,
	FormControlLabel,
	Divider,
	Button,
	Paper,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';
import YupPassword from 'yup-password';
import { AuthPaper } from '../components/auth';
import { Form, FormCheckbox, FormField } from '../components/form';
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

const initialValues = {
	fullName: '',
	email: '',
	password: '',
	confirmPassword: '',
	tos: false,
};

const SignUp: NextPage = () => {
	const { title } = useDocumentTitle('Sign in');

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<AuthPaper
				title="Register"
				subtitle="Get access to all the features by creating an account"
			>
				<Button fullWidth variant="outlined" startIcon={<Image src={googleIcon} alt="" />}>
					Sign up with Google
				</Button>

				<Divider sx={theme => ({ my: 4, color: theme.palette.text.disabled })}>or</Divider>

				<Form
					validationSchema={validationSchema}
					initialValues={initialValues}
					submitText="Create an account"
				>
					<FormField label="Full name" name="fullName" />
					<FormField label="Email" name="email" type="email" />
					<FormField label="Password" name="password" type="password" />
					<FormField label="Confirm password" name="confirmPassword" type="password" />

					<FormCheckbox name="tos" required>
						I&apos;ve read and accept the{' '}
						<Link href="#">
							<MuiLink href="#">Terms & Conditions</MuiLink>
						</Link>
					</FormCheckbox>
				</Form>
			</AuthPaper>

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
