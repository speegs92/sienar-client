import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { classNames, useFormFieldValidation, useRerender } from '@sienar/utils';
import { FormField } from './FormField.tsx';

import type { ChangeEvent, FocusEvent, PropsWithChildren, ReactNode, SelectHTMLAttributes } from 'react';
import type { Color } from '@ui/theme.ts';
import type { FormFieldProps } from './FormField.tsx';
import type { ValidationListProps } from './ValidationList.tsx';
import type { FormInputProps } from './shared.ts';

/**
 * The props of the select component
 */
export interface SelectProps<T> extends
	PropsWithChildren,
	Omit<SelectHTMLAttributes<HTMLSelectElement>, 'color'|'onChange'|'value'>,
	Pick<FormFieldProps, 'leftIcon'>,
	FormInputProps<T|undefined> {
	/**
	 * The theme color of the select
	 */
	color?: Color;

	/**
	 * Whether to hide the empty default option
	 */
	hideDefaultOption?: boolean;

	/**
	 * The available options
	 */
	options: T[];

	/**
	 * An optional render function to create the <code>&lt;option&gt;</code>
	 */
	optionRenderer?: (item: T, value: string) => ReactNode;

	/**
	 * The validation list props
	 */
	validationListProps?: Omit<ValidationListProps, 'validations'>;
}

export function Select<T>(props: SelectProps<T>) {
	const {
		id: htmlId,
		name,
		displayName,
		leftIcon,
		validationListProps,
		validators = [],
		value,
		onBlur,
		onChange,
		onFocus,
		options,
		optionRenderer,
		hideDefaultOption = false,
		children,
		className,
		...rest
	} = props;

	const inputId = useId();
	const id = htmlId ?? inputId;
	const currentValue = useRef<T|undefined>(value);
	const [rerender] = useRerender();
	const [focused, setFocused] = useState(false);
	const handleValueStateChange = (newValue: T|undefined) => {
		if (newValue === currentValue.current) {
			return;
		}

		currentValue.current = newValue;
		onChange?.(newValue);
		rerender();
	}

	const { toValue, toString } = useMemo(() => {
		const keyToValue = new Map<string, T>();
		const valueToKey = new Map<T, string>();

		options.forEach((o, i) => {
			const key = `${id}-${i}`;
			keyToValue.set(key, o);
			valueToKey.set(o, key);
		});

		return {
			toValue: (key: string) => keyToValue.get(key),
			toString: (value: T|undefined) => {
				if (value === undefined) {
					return '';
				}

				return valueToKey.get(value) ?? ''
			}
		}
	}, [options]);

	const [validations, interact] = useFormFieldValidation(name!, displayName, currentValue.current, handleValueStateChange, validators);

	const handleBlur = (e: FocusEvent<HTMLSelectElement>) => {
		setFocused(false)
		onBlur?.(e);
	};

	const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
		const newValue = toValue(e.target.value);
		if (currentValue.current !== newValue) {
			handleValueStateChange(newValue);
			interact();
		}
	};

	const handleFocus = (e: FocusEvent<HTMLSelectElement>) => {
		setFocused(true);
		onFocus?.(e);
	};

	useEffect(() => {
		currentValue.current = value ?? '' as T;
	}, [value]);

	const classes = classNames(
		className,
		{
			'form-field--focused': focused
		}
	);

	const asString = toString(currentValue.current);

	const defaultOptionRenderer = (item: T, value: string) => (
		<option value={value}>
			{item as ReactNode}
		</option>
	);

	return (
		<FormField
			className={classes}
			inputId={id}
			labelContent={children ?? displayName}
			leftIcon={leftIcon}
			validations={validations}
			validationListProps={validationListProps}
		>
			<select
				id={id}
				className={classNames(
					'form-field__input',
					{
						'form-field__input--has-left-icon': !!leftIcon
					}
				)}
				name={name}
				value={asString}
				onBlur={handleBlur}
				onChange={handleChange}
				onFocus={handleFocus}
				{...rest}
			>
				{!hideDefaultOption && <option value='' disabled></option>}

				{options.map(o => (optionRenderer ?? defaultOptionRenderer)(o, toString(o)))}
			</select>
		</FormField>
	);
}