import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { DynamicComponentProps } from '@sienar/ui';

/**
 * The props for the modal card foot component
 */
export type ModalCardFootProps<T extends ElementType = 'footer'> = {} & DynamicComponentProps<T>;

export function ModalCardFoot<T extends ElementType>(
	props: ModalCardFootProps<T> & { tag: T }
): ReactElement;

export function ModalCardFoot(
	props: ModalCardFootProps & { tag?: undefined }
): ReactElement;

export function ModalCardFoot<T extends ElementType = 'footer'>(props: ModalCardFootProps<T>) {
	const {
		tag = 'footer',
		...rest
	} = props;

	return (
		<DynamicComponent
			additionalClasses={['modal-card-foot']}
			{...rest}
			tag={tag}
		/>
	);
}
