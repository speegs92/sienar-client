import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { DynamicComponentProps, Size } from '@sienar/ui';

/**
 * The props for the content component
 */
export type ContentProps<T extends ElementType = 'div'> = {
	/**
	 * The font size of the content
	 */
	size?: Size;
} & DynamicComponentProps<T>;

export function Content<T extends ElementType>(
	props: ContentProps<T> & { tag: T }
): ReactElement;

export function Content(
	props: ContentProps & { tag?: undefined }
): ReactElement;

export function Content<T extends ElementType = 'div'>(props: ContentProps<T>) {
	const {
		size,
		...rest
	} = props;

	return (
		<DynamicComponent
			additionalClasses={[
				'content',
				{
					[`is-${size}`]: !!size
				}
			]}
			{...rest}
		/>
	);
}
