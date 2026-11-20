import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { DynamicComponentProps } from '@sienar/ui';

/**
 * The props for the footer component
 */
export type FooterProps<T extends ElementType = 'footer'> = DynamicComponentProps<T>;

export function Footer<T extends ElementType>(
	props: FooterProps<T> & { tag: T }
): ReactElement;

export function Footer(
	props: FooterProps & { tag?: undefined }
): ReactElement;

export function Footer<T extends ElementType = 'footer'>(props: FooterProps<T>) {
	const {
		tag = 'footer' as T,
		...rest
	} = props;

	return (
		<DynamicComponent
			tag={tag}
			additionalClasses={['footer']}
			{...rest}
		/>
	);
}
