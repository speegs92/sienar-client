import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { DynamicComponentProps } from '@sienar/ui';

/**
 * The props for the modal card foot component
 */
export type ModalCardTitleProps<T extends ElementType = 'h2'> = {} & DynamicComponentProps<T>;

export function ModalCardTitle<T extends ElementType>(
	props: ModalCardTitleProps<T> & { tag: T }
): ReactElement;

export function ModalCardTitle(
	props: ModalCardTitleProps & { tag?: undefined }
): ReactElement;

export function ModalCardTitle<T extends ElementType = 'h2'>(props: ModalCardTitleProps<T>) {
	const {
		tag = 'h2',
		...rest
	} = props;

	return (
		<DynamicComponent
			additionalClasses={['modal-card-title']}
			{...rest}
			tag={tag}
		/>
	);
}
