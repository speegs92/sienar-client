import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { DynamicComponentProps } from '@sienar/ui';

/**
 * The props for the card image component
 */
export type CardImageProps<T extends ElementType = 'div'> = {} & DynamicComponentProps<T>;

export function CardImage<T extends ElementType>(
	props: CardImageProps<T> & { tag: T }
): ReactElement;

export function CardImage(
	props: CardImageProps & { tag?: undefined }
): ReactElement;

export function CardImage<T extends ElementType = 'div'>(props: CardImageProps<T>) {
	return (
		<DynamicComponent
			additionalClasses={['card-image']}
			{...props}
		/>
	);
}
