import { LoadingButton } from '@mui/lab';
import { Paper, Stack, Typography } from '@mui/material';
import { FormikConfig, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { type OptionalObjectSchema } from 'yup/lib/object';


export type FormProps = Omit<React.ComponentProps<'form'>, 'onSubmit'> & {
	validationSchema: OptionalObjectSchema<any>;
	initialValues: Record<string, string | boolean | number>;
	submitText: React.ReactNode;
	errorMessage?: string;
	onSubmit?: Function; // TODO: Proper type
	children?: React.ReactNode;
};

export const FormContext = React.createContext<ReturnType<typeof useFormik<FormProps["initialValues"]>> | null>(null);

const Form = ({ validationSchema, initialValues, submitText, errorMessage, onSubmit, children, ...other }: FormProps) => {
	const [loading, setLoading] = useState(false);
	const [loginError, setLoginError] = useState(false);

	// Initiate Formik
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: values => {
			setLoading(true);
			onSubmit?.(values);
		},
	});

	// Manage loading animation
	useEffect(() => {
		if (!loading) return;

		const id = setTimeout(() => {
			setLoading(false);
			setLoginError(true);
		}, 2000);

		return () => clearTimeout(id);
	}, [loading]);


	return (
		<form onSubmit={formik.handleSubmit} {...other}>
			{loginError && errorMessage && (
				<Paper variant="outlined" sx={{ backgroundColor: 'error.main', py: 0.3, px: 1 }}>
					<Typography sx={{ color: 'error.contrastText' }}>
						There was an error while creating your account
					</Typography>
				</Paper>
			)}

			<Stack gap={2}>
				<FormContext.Provider value={formik}>
					{children}
				</FormContext.Provider>

				<LoadingButton
					loading={loading}
					variant="contained"
					type="submit"
					fullWidth
					sx={{ mt: 2 }}
				>
					{submitText}
				</LoadingButton>
			</Stack>
		</form>
	);
};

export default Form;
