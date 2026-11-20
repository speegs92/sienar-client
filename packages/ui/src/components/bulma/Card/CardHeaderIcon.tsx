import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { DynamicComponentProps } from '@sienar/ui';

/**
 * The props for the card header icon component
 */
export type CardHeaderIconProps<T extends ElementType = 'div'> = {} & DynamicComponentProps<T>;

export function CardHeaderIcon<T extends ElementType>(
	props: CardHeaderIconProps<T> & { tag: T }
): ReactElement;

export function CardHeaderIcon(
	props: CardHeaderIconProps & { tag?: undefined }
): ReactElement;

export function CardHeaderIcon<T extends ElementType = 'div'>(props: CardHeaderIconProps<T>) {
	return (
		<DynamicComponent
			additionalClasses={['card-header-icon']}
			{...props}
		/>
	);
}
