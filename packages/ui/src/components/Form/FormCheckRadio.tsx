import { forwardRef, type RefAttributes } from 'react';
import { classNames } from '@sienar/utils';
import { createThemedClassNames } from '@ui/theme.ts';

import type { ForwardedRef, InputHTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import type { Color } from '@ui/theme.ts';
import type { FormInputProps } from './shared.ts';

export interface FormCheckRadioProps<T> extends
	PropsWithChildren,
	Omit<InputHTMLAttributes<HTMLInputElement>, 'color'|'value'>,
	Omit<FormInputProps<T>, 'value'|'onChange'> {
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

	/**
	 * The value of the input
	 */
	value?: T;
}

export const FormCheckRadio = forwardRef(function FormCheckRadio<T>(props: FormCheckRadioProps<T>, ref: ForwardedRef<HTMLInputElement>) {
	const {
		color,
		type,
		value,
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
				value={value as string}
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
}) as <T>(props: FormCheckRadioProps<T> & RefAttributes<HTMLInputElement>) => ReactElement;
