import { forwardRef, useId } from 'react';
import { FormCheckRadio } from './FormCheckRadio.tsx';
import { useCheckRadioGroupContext } from './FormCheckRadioGroup.tsx';

import type { FormCheckRadioProps } from './FormCheckRadio.tsx';

/**
 * The props for the checkbox component
 */
export interface CheckboxProps extends  Omit<FormCheckRadioProps, 'checked'|'name'|'onChange'|'type'> {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(props, ref) {
	const {
		id,
		children,
		...rest
	} = props;

	const inputId = useId();
	const context = useCheckRadioGroupContext<string[]>();

	return (
		<FormCheckRadio
			ref={ref}
			id={id ?? inputId}
			type='checkbox'
			name={context.name}
			checked={context.selected.includes(props.value as string)}
			onChange={context.handleChange}
			children={children ?? rest.value}
			{...rest}
		/>
	);
});
