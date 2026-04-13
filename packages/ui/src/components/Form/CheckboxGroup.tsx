import { useEffect, useRef } from 'react';
import { useFormFieldValidation, useRerender } from '@sienar/utils';
import { checkboxRadioGroupContext, FormCheckRadioGroup } from './FormCheckRadioGroup.tsx';
import { Checkbox } from './Checkbox.tsx';
import { useArbitraryFormFieldValues } from './shared.ts';

import type { ChangeEvent, ReactNode } from 'react';
import type { FormCheckRadioGroupProps } from './FormCheckRadioGroup.tsx';
import type { ValidationListProps } from './ValidationList.tsx';

/**
 * The props for the checkbox group component
 */
export interface CheckboxGroupProps<T> extends Omit<FormCheckRadioGroupProps<T[]>, 'validationListProps'> {
	/**
	 * The available checkbox options
	 */
	options?: T[];

	/**
	 * An optional render function to create the checkboxes
	 */
	checkboxRenderer?: (item: T, value: string) => ReactNode;

	/**
	 * The validation list props
	 */
	validationListProps?: Omit<ValidationListProps, 'validations'>;
}

export function CheckboxGroup<T>(props: CheckboxGroupProps<T>) {
	const {
		options = [],
		checkboxRenderer = (o, v) => (
			<Checkbox
				value={o}
				key={v}
			>
				{o as ReactNode}
			</Checkbox>
		),
		validationListProps,
		children,
		...rest
	} = props;

	const currentSelected = useRef<T[]>(props.value ?? []);
	const [rerender] = useRerender();
	const { mapToValue, mapToString } = useArbitraryFormFieldValues(options);

	const handleValueStateChange = (newValue: T[]|undefined) => {
		currentSelected.current = [...newValue ?? []];
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
		const checked = e.target.checked;
		const inputValue = mapToValue(e.target.value);
		console.log('Raw value:', e.target.value, 'mapped value:', inputValue);

		if (!inputValue ||
			checked && currentSelected.current.includes(inputValue) ||
			!checked && !currentSelected.current.includes(inputValue)) {
			return;
		}

		let index = currentSelected.current.findIndex(c => c === inputValue);
		let changed = false;
		if (checked && index === -1) {
			currentSelected.current.push(inputValue);
			changed = true;
		} else if (!checked && index > -1) {
			currentSelected.current.splice(index, 1);
			changed = true;
		}

		if (changed) {
			handleValueStateChange(currentSelected.current);
			interact();
		}
	}

	useEffect(() => {
		currentSelected.current = props.value ?? []
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
				{options.map(o => checkboxRenderer(o, mapToString(o)))}
				{children}
			</FormCheckRadioGroup>
		</checkboxRadioGroupContext.Provider>
	)
}
