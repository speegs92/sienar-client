import { forwardRef, useId } from 'react';
import { FormCheckRadio } from './FormCheckRadio.tsx';
import { useCheckRadioGroupContext } from './FormCheckRadioGroup.tsx';

import type { ForwardedRef, ReactElement, RefAttributes } from 'react';
import type { FormCheckRadioProps } from './FormCheckRadio.tsx';

/**
 * The props for the radio component
 */
export interface RadioProps<T> extends  Omit<FormCheckRadioProps<T>, 'checked'|'name'|'onChange'|'type'> {}

export const Radio = forwardRef(function Radio<T>(props: RadioProps<T>, ref: ForwardedRef<HTMLInputElement>) {
	const {
		id,
		children,
		...rest
	} = props;

	const inputId = useId();
	const context = useCheckRadioGroupContext<T>();

	return (
		<FormCheckRadio
			ref={ref}
			id={id ?? inputId}
			type='radio'
			name={context.name}
			checked={context.selected === props.value}
			onChange={context.handleChange}
			children={children ?? rest.value?.toString()}
			{...rest}
		/>
	);
}) as <T>(props: RadioProps<T> & RefAttributes<HTMLInputElement>) => ReactElement;
