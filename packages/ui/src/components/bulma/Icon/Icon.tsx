import { DynamicComponent } from '@sienar/ui';

import type { DynamicComponentProps, Size } from '@sienar/ui';

/**
 * The props for the icon component
 */
export type IconProps = {
	/**
	 * The size of the icon
	 */
	size?: Size;
} & DynamicComponentProps<'span'>;

export function Icon(props: IconProps) {
	const {
		size,
		...rest
	} = props;

	return (
		<DynamicComponent
			tag='span'
			additionalClasses={[
				'icon',
				{
					[`is-${size}`]: !!size && size !== 'normal'
				}
			]}
			{...rest}
		/>
	);
}
