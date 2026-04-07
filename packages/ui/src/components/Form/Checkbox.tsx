import { forwardRef, useId } from 'react';
import { FormCheckRadio } from './FormCheckRadio.tsx';
import { useCheckRadioGroupContext } from './FormCheckRadioGroup.tsx';

import type { ForwardedRef, ReactElement, RefAttributes } from 'react';
import type { FormCheckRadioProps } from './FormCheckRadio.tsx';

/**
 * The props for the checkbox component
 */
export interface CheckboxProps<T> extends  Omit<FormCheckRadioProps<T>, 'checked'|'name'|'onChange'|'type'> {}

export const Checkbox = forwardRef(function Checkbox<T>(props: CheckboxProps<T>, ref: ForwardedRef<HTMLInputElement>) {
	const {
		id,
		value,
		children,
		...rest
	} = props;

	const inputId = useId();
	const context = useCheckRadioGroupContext<T[]>();

	return (
		<FormCheckRadio
			ref={ref}
			id={id ?? inputId}
			type='checkbox'
			name={context.name}
			checked={context.selected.includes(props.value as T)}
			value={value}
			onChange={context.handleChange}
			children={children ?? value?.toString()}
			{...rest}
		/>
	);
}) as <T>(props: CheckboxProps<T> & RefAttributes<HTMLInputElement>) => ReactElement;
