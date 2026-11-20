import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { DynamicComponentProps } from '@sienar/ui';

/**
 * The props for the modal content component
 */
export type ModalCardProps<T extends ElementType = 'div'> = {} & DynamicComponentProps<T>;

export function ModalCard<T extends ElementType>(
	props: ModalCardProps<T> & { tag: T }
): ReactElement;

export function ModalCard(
	props: ModalCardProps & { tag?: undefined }
): ReactElement;

export function ModalCard<T extends ElementType = 'div'>(props: ModalCardProps<T>) {
	return (
		<DynamicComponent
			additionalClasses={['modal-card']}
			{...props}
		/>
	);
}
