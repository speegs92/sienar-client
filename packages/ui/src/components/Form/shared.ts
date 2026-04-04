import type { PropsWithChildren } from 'react';
import type { FormValueValidator } from '@sienar/utils';

export interface FormInputProps<T extends unknown> extends PropsWithChildren {
	/**
	 * The ID of the form input
	 */
	id?: string;

	/**
	 * The label text for the input
	 */
	displayName?: string;

	/**
	 * The value of the input
	 */
	value?: T;

	/**
	 * A function which receives the new value of the input when its <code>change</c> event fires
	 *
	 * @param newValue The new value of the input
	 */
	onChange?: (newValue: T) => Promise<any>|any;

	/**
	 * The validators for the input
	 */
	validators?: FormValueValidator<T>[];
}