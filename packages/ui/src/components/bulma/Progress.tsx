import { DynamicComponent } from '@sienar/ui';

import type { ComponentPropsWithRef } from 'react';
import type { Color, Size } from '@sienar/ui';

/**
 * The props for the progress component
 */
export type ProgressProps = {
	/**
	 * The progress bar's color
	 */
	color?: Color;

	/**
	 * The progress bar's size
	 */
	size?: Size;
} & ComponentPropsWithRef<'progress'>;

export function Progress(props: ProgressProps) {
	const {
		color,
		size,
		...rest
	} = props;

	return (
		<DynamicComponent
			additionalClasses={[
				'progress',
				{
					[`is-${color}`]: !!color,
					[`is-${size}`]: !!size && size !== 'normal'
				}
			]}
			{...rest}
			tag='progress'
		/>
	);
}
