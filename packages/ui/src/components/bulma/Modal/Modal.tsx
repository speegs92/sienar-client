import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { DynamicComponentProps } from '@sienar/ui';

/**
 * The props for the modal component
 */
export type ModalProps<T extends ElementType = 'div'> = {
	/**
	 * Whether the modal is active
	 */
	active: boolean;
} & DynamicComponentProps<T>;

export function Modal<T extends ElementType>(
	props: ModalProps<T> & { tag: T }
): ReactElement;

export function Modal(
	props: ModalProps & { tag?: undefined }
): ReactElement;

export function Modal<T extends ElementType = 'div'>(props: ModalProps<T>) {
	const {
		active,
		children,
		...rest
	} = props;

	return (
		<DynamicComponent
			additionalClasses={[
				'modal',
				{
					'is-active': active
				}
			]}
			{...rest}
		>
			<div className='modal-background'/>
			{children}
		</DynamicComponent>
	);
}
