import { useContext, useId } from 'react';
import MaterialCheckbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { checkboxGroupContext } from './CheckboxGroup.tsx';

import type { ReactNode } from 'react';

export type CheckboxProps = {
	value: string,
	children: ReactNode
}

export default function Checkbox(props: CheckboxProps) {
	const { value, children } = props;

	const id = useId();
	const context = useContext(checkboxGroupContext);

	return (
		<FormControlLabel
			htmlFor={id}
			control={
				<MaterialCheckbox
					id={id}
					name={context.name}
					checked={context.selected.includes(value)}
					value={value}
					// @ts-ignore
					onChange={context.handleChange}
				/>
			}
			label={children}
			sx={{width: '100%'}}
		/>
	)
}