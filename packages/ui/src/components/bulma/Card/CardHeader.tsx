import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { DynamicComponentProps } from '@sienar/ui';

/**
 * The props for the card header component
 */
export type CardHeaderProps<T extends ElementType = 'header'> = {} & DynamicComponentProps<T>;

export function CardHeader<T extends ElementType>(
	props: CardHeaderProps<T> & { tag: T }
): ReactElement;

export function CardHeader(
	props: CardHeaderProps & { tag?: undefined }
): ReactElement;

export function CardHeader<T extends ElementType = 'header'>(props: CardHeaderProps<T>) {
	const {
		tag = 'header',
		...rest
	} = props;

	return (
		<DynamicComponent
			additionalClasses={['card-header']}
			{...rest}
			tag={tag}
		/>
	);
}
