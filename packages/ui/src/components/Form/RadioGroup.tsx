import { useEffect, useRef } from 'react';
import { useFormFieldValidation, useRerender } from '@sienar/utils';
import { checkboxRadioGroupContext, FormCheckRadioGroup } from './FormCheckRadioGroup.tsx';

import type { ChangeEvent } from 'react';
import type { FormCheckRadioGroupProps } from './FormCheckRadioGroup.tsx';
import type { ValidationListProps } from './ValidationList.tsx';

/**
 * The props for the radio group component
 */
export interface RadioGroupProps<T> extends Omit<FormCheckRadioGroupProps<T>, 'validationListProps'> {
	validationListProps?: Omit<ValidationListProps, 'validations'>;
}

export function RadioGroup<T>(props: RadioGroupProps<T>) {
	const { validationListProps, ...rest } = props;

	const currentSelected = useRef<T>(props.value ?? '' as T);
	const [rerender] = useRerender();
	const handleValueStateChange = (newValue: T) => {
		console.log('New value!:', newValue, 'Old value:', currentSelected.current);
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
		const newValue = e.target.value as T;
		if (currentSelected.current === newValue) {
			return;
		}

		handleValueStateChange(newValue);
		interact();
	}

	useEffect(() => {
		currentSelected.current = props.value ?? '' as T;
	}, [props.value]);

	return (
		<checkboxRadioGroupContext.Provider value={{
			selected: currentSelected.current,
			name: props.name!,
			handleChange
		}}>
			<FormCheckRadioGroup
				validationListProps={{
					validations,
					...validationListProps
				}}
				{...rest}
			/>
		</checkboxRadioGroupContext.Provider>
	)
}
