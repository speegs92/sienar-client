import { useEffect, useId, useRef } from 'react';
import { classNames, useFormFieldValidation, useRerender } from '@sienar/utils';
import { createThemedClassNames } from '@ui/theme.ts';
import { ValidationList } from './ValidationList.tsx';

import type { ChangeEvent, InputHTMLAttributes } from 'react';
import type { Color } from '@ui/theme.ts';
import type { FormInputProps } from './shared.ts';
import type { ValidationListProps } from './ValidationList.tsx';

export interface StandaloneCheckboxProps extends
	Omit<InputHTMLAttributes<HTMLInputElement>, 'color'|'onChange'|'value'>,
	Omit<FormInputProps<boolean>, 'value'> {
	/**
	 * The theme color of the checkbox
	 */
	color?: Color;

	/**
	 * Whether the checkbox is checked
	 */
	checked?: boolean;

	/**
	 * The validation list props
	 */
	validationListProps?: Omit<ValidationListProps, 'validations'>
}

export function StandaloneCheckbox(props: StandaloneCheckboxProps) {
	const {
		id,
		name,
		displayName,
		color,
		validationListProps,
		validators = [],
		checked = false,
		onChange,
		className,
		children,
		...rest
	} = props;

	const inputId = useId();
	const currentChecked = useRef(checked);
	const [rerender] = useRerender();
	const handleCheckedStateChange = (newChecked: boolean) => {
		if (newChecked === currentChecked.current) return;

		currentChecked.current = newChecked;
		onChange?.(newChecked);
		rerender();
	}

	const [validations, interact] = useFormFieldValidation(name!, displayName, currentChecked.current, handleCheckedStateChange, validators);

	const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const newChecked = e.target.checked;

		if (currentChecked.current !== newChecked) {
			handleCheckedStateChange(newChecked);
			interact();
		}
	}

	useEffect(() => {
		currentChecked.current = checked;
	}, [checked]);

	const classes = classNames(
		className,
		createThemedClassNames(color, undefined, 'checkbox')
	);

	return (
		<div className={classes}>
			<input
				id={id ?? inputId}
				className='checkbox__input'
				name={name}
				type='checkbox'
				checked={currentChecked.current}
				value={currentChecked.current.toString()}
				onChange={handleChange}
				{...rest}
			/>

			<label
				className='checkbox__label'
				htmlFor={id ?? inputId}
			>
				{children ?? displayName}
			</label>

			<ValidationList
				validations={validations}
				{...validationListProps}
			/>
		</div>
	);
}