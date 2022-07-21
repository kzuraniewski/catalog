import React, { useContext } from 'react';
import { Checkbox, FormControlLabel, type CheckboxProps } from '@mui/material';
import { FormContext } from './Form';
import type { PartiallyRequired } from '../../utilityTypes';

export type FormCheckboxProps = PartiallyRequired<
	Omit<CheckboxProps, 'checked' | 'onChange'>,
	'name'
> & {
	children?: React.ReactNode;
};

const FormCheckbox = ({ children, ...other }: FormCheckboxProps) => {
	const formik = useContext(FormContext);

	return (
		<>
			{formik && (
				<FormControlLabel
					control={
						<Checkbox
							checked={formik.values.tos as boolean}
							onChange={formik.handleChange}
							{...other}
						/>
					}
					label={children}
				/>
			)}
		</>
	);
};

export default FormCheckbox;
