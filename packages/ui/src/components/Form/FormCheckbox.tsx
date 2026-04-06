import { forwardRef } from 'react';
import { classNames } from '@sienar/utils';
import { createThemedClassNames } from '@ui/theme.ts';

import type { InputHTMLAttributes, PropsWithChildren } from 'react';
import type { Color } from '@ui/theme.ts';
import type { FormInputProps } from './shared.ts';

export interface FormCheckboxProps extends
	PropsWithChildren,
	Omit<InputHTMLAttributes<HTMLInputElement>, 'color'>,
	Omit<FormInputProps<boolean>, 'value'|'onChange'> {
	/**
	 * The theme color of the checkbox
	 */
	color?: Color;

	/**
	 * Whether the checkbox is checked
	 */
	checked?: boolean;
}

export const FormCheckbox = forwardRef<HTMLInputElement, FormCheckboxProps>(function FormCheckbox(props, ref) {
	const {
		color,
		className,
		children,
		...rest
	} = props;

	const classes = classNames(
		className,
		createThemedClassNames(color, undefined, 'checkbox')
	);

	return (
		<div className={classes}>
			<input
				ref={ref}
				className='checkbox__input'
				type='checkbox'
				{...rest}
			/>

			<label
				className='checkbox__label'
				htmlFor={rest.id}
			>
				{children}
			</label>
		</div>
	)
});
