import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { DynamicComponentProps } from '@sienar/ui';

/**
 * The props for the modal card body component
 */
export type ModalCardBodyProps<T extends ElementType = 'section'> = {} & DynamicComponentProps<T>;

export function ModalCardBody<T extends ElementType>(
	props: ModalCardBodyProps<T> & { tag: T }
): ReactElement;

export function ModalCardBody(
	props: ModalCardBodyProps & { tag?: undefined }
): ReactElement;

export function ModalCardBody<T extends ElementType = 'section'>(props: ModalCardBodyProps<T>) {
	const {
		tag = 'section',
		...rest
	} = props;

	return (
		<DynamicComponent
			additionalClasses={['modal-card-body']}
			{...rest}
			tag={tag}
		/>
	);
}
