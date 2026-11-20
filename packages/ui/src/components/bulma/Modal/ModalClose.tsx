import { DynamicComponent } from '@sienar/ui';

import type { ComponentPropsWithRef } from 'react';
import type { Size } from '@sienar/ui';

/**
 * The props for the modal close component
 */
export type ModalCloseProps = {
	/**
	 * The modal close button's size
	 */
	size?: Size;
} & ComponentPropsWithRef<'button'>;

export function ModalClose(props: ModalCloseProps) {
	const {
		size,
		...rest
	} = props;

	return (
		<DynamicComponent
			additionalClasses={[
				'modal-close',
				{
					[`is-${size}`]: !!size && size !== 'normal'
				}
			]}
			{...rest}
			tag='button'
		/>
	);
}
