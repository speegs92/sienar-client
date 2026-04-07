import { useEffect, useRef } from 'react';
import { useFormFieldValidation, useRerender } from '@sienar/utils';
import { checkboxRadioGroupContext, FormCheckRadioGroup } from './FormCheckRadioGroup.tsx';

import type { ChangeEvent } from 'react';
import type { FormCheckRadioGroupProps } from './FormCheckRadioGroup.tsx';
import type { ValidationListProps } from './ValidationList.tsx';

export interface CheckboxGroupProps<T> extends Omit<FormCheckRadioGroupProps<T[]>, 'validationListProps'> {
	validationListProps?: Omit<ValidationListProps, 'validations'>;
}

export function CheckboxGroup<T>(props: CheckboxGroupProps<T>) {
	const { validationListProps, ...rest } = props;

	const currentSelected = useRef<T[]>(props.value ?? []);
	const [rerender] = useRerender();
	const handleValueStateChange = (newValue: T[]) => {
		currentSelected.current = [...newValue];
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

		if (checked && currentSelected.current.includes(e.target.value as T) ||
			!checked && !currentSelected.current.includes(e.target.value as T)) {
			return;
		}

		let index = currentSelected.current.findIndex(c => c === e.target.value);
		let changed = false;
		if (checked && index === -1) {
			currentSelected.current.push(e.target.value as T);
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
