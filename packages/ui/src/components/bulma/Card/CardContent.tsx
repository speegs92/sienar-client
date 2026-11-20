import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { DynamicComponentProps } from '@sienar/ui';

/**
 * The props for the card content component
 */
export type CardContentProps<T extends ElementType = 'section'> = {} & DynamicComponentProps<T>;

export function CardContent<T extends ElementType>(
	props: CardContentProps<T> & { tag: T }
): ReactElement;

export function CardContent(
	props: CardContentProps & { tag?: undefined }
): ReactElement;

export function CardContent<T extends ElementType = 'section'>(props: CardContentProps<T>) {
	const {
		tag = 'section',
		...rest
	} = props;

	return (
		<DynamicComponent
			additionalClasses={['card-content']}
			{...rest}
			tag={tag}
		/>
	);
}
