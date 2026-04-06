import { useEffect, useId, useRef } from 'react';
import { useFormFieldValidation, useRerender } from '@sienar/utils';
import { FormCheckbox } from './FormCheckbox.tsx';
import { ValidationList } from './ValidationList.tsx';

import type { ChangeEvent } from 'react';
import type { Color } from '@ui/theme.ts';
import type { FormCheckboxProps } from './FormCheckbox.tsx';
import type { FormInputProps } from './shared.ts';
import type { ValidationListProps } from './ValidationList.tsx';

export interface StandaloneCheckboxProps extends
	Pick<FormInputProps<boolean>, 'onChange'>,
	Omit<FormCheckboxProps, 'value'|'onChange'> {
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

	return (
		<div className='standalone-checkbox'>
			<FormCheckbox
				id={id ?? inputId}
				name={name}
				checked={currentChecked.current}
				value={currentChecked.current.toString()}
				onChange={handleChange}
				{...rest}
			>
				{children ?? displayName}
			</FormCheckbox>

			<ValidationList
				validations={validations}
				{...validationListProps}
			/>
		</div>
	);
}