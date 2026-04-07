import { createContext, useContext } from 'react';
import { ValidationList } from './ValidationList.tsx';

import type { ChangeEvent, FieldsetHTMLAttributes, ReactNode } from 'react';
import type { FormInputProps } from './shared.ts';
import type { ValidationListProps } from './ValidationList.tsx';

export const checkboxRadioGroupContext = createContext<CheckRadioGroupContext<any>>({
	selected: '',
	name: '',
	handleChange: () => {}
});

export function useCheckRadioGroupContext<T>() {
	return useContext<CheckRadioGroupContext<T>>(checkboxRadioGroupContext);
}

/**
 * The props of the checkbox/radio group component
 */
export interface FormCheckRadioGroupProps extends
	Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'color'|'onChange'>,
	FormInputProps<string[]> {
	/**
	 * The label content
	 */
	labelContent?: ReactNode;

	/**
	 * The validation list props
	 */
	validationListProps: ValidationListProps;
}

export function FormCheckRadioGroup(props: FormCheckRadioGroupProps) {
	const {
		displayName,
		children,
		labelContent,
		validationListProps
	} = props;


	return (
		<fieldset className='check-radio-group'>
			<legend className='check-radio-group__label'>
				{labelContent ?? displayName}
			</legend>

			<div className='check-radio-group__content'>
				{children}
			</div>

			<ValidationList {...validationListProps}/>
		</fieldset>
	);
}

/**
 * The state of a checkbox or radio button input group
 */
export type CheckRadioGroupContext<T> = {
	/**
	 * The selected item(s)
	 */
	selected: T;

	/**
	 * The name of the input field
	 */
	name: string;

	/**
	 * The function to handle the input change event
	 */
	handleChange: (e: ChangeEvent<HTMLInputElement>) => any;
}