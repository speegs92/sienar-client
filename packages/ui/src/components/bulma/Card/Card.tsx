import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { DynamicComponentProps } from '@sienar/ui';

/**
 * The props for the card component
 */
export type CardProps<T extends ElementType = 'article'> = {} & DynamicComponentProps<T>;

export function Card<T extends ElementType>(
	props: CardProps<T> & { tag: T }
): ReactElement;

export function Card(
	props: CardProps & { tag?: undefined }
): ReactElement;

export function Card<T extends ElementType = 'article'>(props: CardProps<T>) {
	const {
		tag = 'article',
		...rest
	} = props;

	return (
		<DynamicComponent
			additionalClasses={['card']}
			{...rest}
			tag={tag}
		/>
	);
}
