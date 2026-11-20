import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { DynamicComponentProps } from '@sienar/ui';

/**
 * The props for the section component
 */
export type SectionProps<T extends ElementType = 'section'> = DynamicComponentProps<T>;

export function Section<T extends ElementType>(
	props: SectionProps<T> & { tag: T }
): ReactElement;

export function Section(
	props: SectionProps & { tag?: undefined }
): ReactElement;

export function Section<T extends ElementType = 'section'>(props: SectionProps<T>) {
	const {
		tag = 'section' as T,
		...rest
	} = props;

	return (
		<DynamicComponent
			tag={tag}
			additionalClasses={['section']}
			{...rest}
		/>
	);
}
