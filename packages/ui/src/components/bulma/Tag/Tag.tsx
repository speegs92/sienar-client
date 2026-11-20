import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { Color, DynamicComponentProps, Size } from '@sienar/ui';

/**
 * The props for the tag component
 */
export type TagProps<T extends ElementType = 'span'> = {
	/**
	 * The tag's color
	 */
	color?: Color;

	/**
	 * The tag's size
	 */
	size?: Size;

	/**
	 * Whether the tag should be light
	 */
	light?: boolean;

	/**
	 * Whether the tag should be hoverable
	 */
	hoverable?: boolean;

	/**
	 * Whether the tag should be rounded
	 */
	rounded?: boolean;
} & DynamicComponentProps<T>;

export function Tag<T extends ElementType>(
	props: TagProps<T> & { tag: T }
): ReactElement;

export function Tag(
	props: TagProps & { tag?: undefined }
): ReactElement;

export function Tag<T extends ElementType = 'span'>(props: TagProps<T>) {
	const {
		color,
		size,
		light = false,
		hoverable = false,
		rounded = false,
		tag = 'span' as T,
		...rest
	} = props;

	return (
		<DynamicComponent
			tag={tag}
			additionalClasses={[
				'tag',
				{
					'is-light': light,
					'is-hoverable': hoverable,
					'is-rounded': rounded,
					[`is-${color}`]: !!color,
					[`is-${size}`]: !!size
				}
			]}
			{...rest}
		/>
	);
}
