import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { DynamicComponentProps } from '@sienar/ui';

/**
 * The props for the modal card head component
 */
export type ModalCardHeadProps<T extends ElementType = 'header'> = {} & DynamicComponentProps<T>;

export function ModalCardHead<T extends ElementType>(
	props: ModalCardHeadProps<T> & { tag: T }
): ReactElement;

export function ModalCardHead(
	props: ModalCardHeadProps & { tag?: undefined }
): ReactElement;

export function ModalCardHead<T extends ElementType = 'header'>(props: ModalCardHeadProps<T>) {
	const {
		tag = 'header',
		...rest
	} = props;

	return (
		<DynamicComponent
			additionalClasses={['modal-card-head']}
			{...rest}
			tag={tag}
		/>
	);
}
