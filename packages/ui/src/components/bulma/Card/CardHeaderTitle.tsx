import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { DynamicComponentProps } from '@sienar/ui';

/**
 * The props for the card header title component
 */
export type CardHeaderTitleProps<T extends ElementType = 'h2'> = {} & DynamicComponentProps<T>;

export function CardHeaderTitle<T extends ElementType>(
	props: CardHeaderTitleProps<T> & { tag: T }
): ReactElement;

export function CardHeaderTitle(
	props: CardHeaderTitleProps & { tag?: undefined }
): ReactElement;

export function CardHeaderTitle<T extends ElementType = 'h2'>(props: CardHeaderTitleProps<T>) {
	const {
		tag = 'h2',
		...rest
	} = props;

	return (
		<DynamicComponent
			additionalClasses={['card-header-title']}
			{...rest}
			tag={tag}
		/>
	);
}
