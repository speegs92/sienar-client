import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { DynamicComponentProps } from '@sienar/ui';

/**
 * The props for the card footer component
 */
export type CardFooterProps<T extends ElementType = 'footer'> = {} & DynamicComponentProps<T>;

export function CardFooter<T extends ElementType>(
	props: CardFooterProps<T> & { tag: T }
): ReactElement;

export function CardFooter(
	props: CardFooterProps & { tag?: undefined }
): ReactElement;

export function CardFooter<T extends ElementType = 'footer'>(props: CardFooterProps<T>) {
	const {
		tag = 'footer',
		...rest
	} = props;

	return (
		<DynamicComponent
			additionalClasses={['card-footer']}
			{...rest}
			tag={tag}
		/>
	);
}
