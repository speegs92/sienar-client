import { useEffect, useId, useRef, useState } from 'react';
import { classNames, useFormFieldValidation, useRerender } from '@sienar/utils';
import { FormField } from './FormField.tsx';

import type { ChangeEvent, FocusEvent, PropsWithChildren, InputHTMLAttributes } from 'react';
import { type Color } from '@ui/theme.ts';
import type { FormInputProps } from './shared.ts';
import type { ValidationListProps } from './ValidationList.tsx';

/**
 * The props of the textbox component
 */
export interface TextboxProps<T extends string | number> extends
	PropsWithChildren,
	Omit<InputHTMLAttributes<HTMLInputElement>, 'color'|'onChange'|'value'>,
	FormInputProps<T> {
	/**
	 * The type of the form input
	 */
	type?: 'text' | 'password' | 'email' | 'number';

	/**
	 * The theme color of the form input
	 */
	color?: Color;

	/**
	 * The validation list props
	 */
	validationListProps?: Omit<ValidationListProps, 'validations'>;
}

export function Textbox<T extends string | number>(props: TextboxProps<T>) {
	const {
		id,
		name,
		displayName,
		validationListProps,
		validators = [],
		value,
		onBlur,
		onChange,
		onFocus,
		type = 'text',
		color = 'primary',
		children,
		className,
		...rest
	} = props;

	const isNumeric = type === 'number';
	const inputId = useId();
	const currentValue = useRef<T>(value ?? '' as T);
	const [rerender] = useRerender();
	const [focused, setFocused] = useState(false);

	const handleValueStateChange = (newValue: T) => {
		if (newValue === currentValue.current) {
			return;
		}

		currentValue.current = newValue;
		onChange?.(newValue);
		rerender();
	};

	const [validations, interact] = useFormFieldValidation(name!, displayName, currentValue.current, handleValueStateChange, validators);

	const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
		setFocused(false);
		onBlur?.(e);
	};

	const handleChange = async (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
		const newValue = (isNumeric
			? parseFloat(e.target.value)
			: e.target.value) as T;
		if (currentValue.current !== newValue) {
			handleValueStateChange(newValue);
			interact();
		}
	}

	const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
		setFocused(true);
		onFocus?.(e);
	};

	useEffect(() => {
		currentValue.current = value ?? '' as T;
	}, [value]);

	const classes = classNames(
		className,
		{
			'form-field--focused': focused
		}
	);

	return (
		<FormField
			className={classes}
			inputId={id ?? inputId}
			labelContent={children ?? displayName}
			validations={validations}
			validationListProps={validationListProps}
		>
			<input
				id={id ?? inputId}
				className='form-field__input'
				name={name}
				type={type}
				value={currentValue.current}
				onBlur={handleBlur}
				onChange={handleChange}
				onFocus={handleFocus}
				{...rest}
			/>
		</FormField>
	);
}