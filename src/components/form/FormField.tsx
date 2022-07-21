import React, { useContext } from 'react';
import { TextField, type TextFieldProps } from '@mui/material';
import { FormContext } from './Form';
import type { PartiallyRequired } from '../../utilityTypes';

export type FormFieldProps = PartiallyRequired<TextFieldProps, 'label'> & {
	name: string;
};

const FormField = ({ name, ...other }: FormFieldProps) => {
	const formik = useContext(FormContext);

	return (
		<>
			{formik && (
				<TextField
					value={formik.values[name]}
					onChange={formik.handleChange}
					error={formik.touched[name] && Boolean(formik.errors[name])}
					helperText={formik.touched[name] && formik.errors[name]}
					variant="standard"
					name={name}
					fullWidth
					{...other}
				/>
			)}
		</>
	);
};

export default FormField;
