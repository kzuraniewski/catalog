import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import useDocumentTitle from '../hooks/useDocumentTitle';
import * as yup from 'yup';
import { AuthPaper } from '../components/auth';
import { Form, FormField } from '../components/form';

const validationSchema = yup.object({
	email: yup.string().required('This field is required'),
});

const initialValues = {
	email: '',
};

const SignUp: NextPage = () => {
	const { title } = useDocumentTitle('Sign in');

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<AuthPaper
				title="Restore password"
				subtitle="Enter your email and we'll send you a message with instructions to reset your password."
			>
				<Form
					validationSchema={validationSchema}
					initialValues={initialValues}
					submitText="Restore"
				>
					<FormField label="Email" name="email" type="email" />
				</Form>
			</AuthPaper>
		</>
	);
};

export default SignUp;
