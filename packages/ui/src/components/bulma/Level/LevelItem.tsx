import { DynamicComponent } from '@sienar/ui';

import type { ElementType, ReactElement } from 'react';
import type { DynamicComponentProps } from '@sienar/ui';

/**
 * The props for the level item component
 */
export type LevelItemProps<T extends ElementType = 'div'> = {} & DynamicComponentProps<T>;

export function LevelItem<T extends ElementType>(
	props: LevelItemProps<T> & { tag: T }
): ReactElement;

export function LevelItem(
	props: LevelItemProps & { tag?: undefined }
): ReactElement;

export function LevelItem<T extends ElementType = 'div'>(props: LevelItemProps<T>) {
	return (
		<DynamicComponent
			additionalClasses={['hero-body']}
			{...props}
		/>
	);
}
