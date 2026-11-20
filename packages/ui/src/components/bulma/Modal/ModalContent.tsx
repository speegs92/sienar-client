import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { DynamicComponentProps } from '@sienar/ui';

/**
 * The props for the modal content component
 */
export type ModalContentProps<T extends ElementType = 'div'> = {} & DynamicComponentProps<T>;

export function ModalContent<T extends ElementType>(
	props: ModalContentProps<T> & { tag: T }
): ReactElement;

export function ModalContent(
	props: ModalContentProps & { tag?: undefined }
): ReactElement;

export function ModalContent<T extends ElementType = 'div'>(props: ModalContentProps<T>) {
	return (
		<DynamicComponent
			additionalClasses={['modal-content']}
			{...props}
		/>
	);
}
