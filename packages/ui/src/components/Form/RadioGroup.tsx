import { useEffect, useRef } from 'react';
import { useFormFieldValidation, useRerender } from '@sienar/utils';
import { checkboxRadioGroupContext, FormCheckRadioGroup } from './FormCheckRadioGroup.tsx';
import { Radio } from './Radio.tsx';
import { useArbitraryFormFieldValues } from './shared.ts';

import type { ChangeEvent, ReactNode } from 'react';
import type { FormCheckRadioGroupProps } from './FormCheckRadioGroup.tsx';
import type { ValidationListProps } from './ValidationList.tsx';

/**
 * The props for the radio group component
 */
export interface RadioGroupProps<T> extends Omit<FormCheckRadioGroupProps<T>, 'validationListProps'> {
	/**
	 * The available radio options
	 */
	options?: T[];

	/**
	 * An optional render function to create the radio buttons
	 */
	radioRenderer?: (item: T, value: string) => ReactNode;

	/**
	 * The validation list props
	 */
	validationListProps?: Omit<ValidationListProps, 'validations'>;
}

export function RadioGroup<T>(props: RadioGroupProps<T>) {
	const {
		options = [],
		radioRenderer = (o, v) => (
			<Radio
				value={o}
				key={v}
			>
				{o as ReactNode}
			</Radio>
		),
		validationListProps,
		children,
		...rest
	} = props;

	const currentSelected = useRef<T|undefined>(props.value);
	const [rerender] = useRerender();
	const { mapToValue, mapToString } = useArbitraryFormFieldValues(options);

	const handleValueStateChange = (newValue: T|undefined) => {
		currentSelected.current = newValue;
		props.onChange?.(currentSelected.current);
		rerender();
	};

	const [validations, interact] = useFormFieldValidation(
		props.name!,
		props.displayName,
		currentSelected.current,
		handleValueStateChange,
		props.validators ?? []);

	const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = mapToValue(e.target.value);
		if (currentSelected.current === newValue) {
			return;
		}

		handleValueStateChange(newValue);
		interact();
	}

	useEffect(() => {
		currentSelected.current = props.value;
	}, [props.value]);

	return (
		<checkboxRadioGroupContext.Provider value={{
			selected: currentSelected.current,
			name: props.name!,
			handleChange,
			mapToString
		}}>
			<FormCheckRadioGroup
				validationListProps={{
					validations,
					...validationListProps
				}}
				{...rest}
			>
				{options.map(o => radioRenderer(o, mapToString(o)))}
				{children}
			</FormCheckRadioGroup>
		</checkboxRadioGroupContext.Provider>
	)
}
