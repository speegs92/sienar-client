import { forwardRef } from 'react';
import { classNames } from '@sienar/utils';
import { createThemedClassNames } from '@ui/theme.ts';

import type { InputHTMLAttributes, PropsWithChildren } from 'react';
import type { Color } from '@ui/theme.ts';
import type { FormInputProps } from './shared.ts';

export interface FormCheckRadioProps extends
	PropsWithChildren,
	Omit<InputHTMLAttributes<HTMLInputElement>, 'color'>,
	Omit<FormInputProps<boolean>, 'value'|'onChange'> {
	/**
	 * The theme color of the input
	 */
	color?: Color;

	/**
	 * Whether the input is checked
	 */
	checked?: boolean;

	/**
	 * The type of the input
	 */
	type: 'checkbox'|'radio';
}

export const FormCheckRadio = forwardRef<HTMLInputElement, FormCheckRadioProps>(function FormCheckbox(props, ref) {
	const {
		color,
		type,
		className,
		children,
		...rest
	} = props;

	const classes = classNames(
		className,
		createThemedClassNames(color, undefined, 'check-radio')
	);

	return (
		<div className={classes}>
			<input
				ref={ref}
				className='check-radio__input'
				type={type}
				{...rest}
			/>

			<label
				className='check-radio__label'
				htmlFor={rest.id}
			>
				{children}
			</label>
		</div>
	)
});
