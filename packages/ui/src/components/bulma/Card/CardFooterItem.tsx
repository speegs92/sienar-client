import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { DynamicComponentProps } from '@sienar/ui';

/**
 * The props for the card footer item component
 */
export type CardFooterItemProps<T extends ElementType = 'div'> = {} & DynamicComponentProps<T>;

export function CardFooterItem<T extends ElementType>(
	props: CardFooterItemProps<T> & { tag: T }
): ReactElement;

export function CardFooterItem(
	props: CardFooterItemProps & { tag?: undefined }
): ReactElement;

export function CardFooterItem<T extends ElementType = 'div'>(props: CardFooterItemProps<T>) {
	return (
		<DynamicComponent
			additionalClasses={['card-footer-item']}
			{...props}
		/>
	);
}
