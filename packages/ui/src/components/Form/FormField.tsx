import { classNames } from '@sienar/utils';
import { createThemedClassNames } from '@ui/theme.ts';
import { ValidationList } from './ValidationList.tsx';

import type { HTMLAttributes, ReactNode } from 'react';
import type { ValidationResult } from '@sienar/utils';
import type { Color } from '@ui/theme.ts';
import type { ValidationListProps } from './ValidationList.tsx';

export interface FormFieldProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
	/**
	 * The theme color of the form input
	 */
	color?: Color;

	/**
	 * The ID of the input
	 */
	inputId: string;

	/**
	 * The label content
	 */
	labelContent: ReactNode;

	/**
	 * The validation results
	 */
	validations: ValidationResult[];

	/**
	 * The validation list props
	 */
	validationListProps?: Omit<ValidationListProps, 'validations'>;
}

export function FormField(props: FormFieldProps) {
	const {
		color,
		inputId,
		labelContent,
		validations,
		className,
		children,
		validationListProps,
		...rest
	} = props;

	const classes = classNames(
		className,
		createThemedClassNames(
			color,
			undefined,
			'form-field'
		),
		{
			'form-field--valid': validations.filter(v => v.valid).length === validations.length,
			'form-field--invalid': validations.filter(v => v.valid === false).length > 0
		}
	)

	return (
		<div
			className={classes}
			{...rest}
		>
			<label
				htmlFor={inputId}
				className='form-field__label'
			>
				{labelContent}
			</label>

			<div className='form-field__input-wrapper'>
				{children}
			</div>

			<ValidationList
				validations={validations}
				{...validationListProps}
			/>
		</div>
	);
}
