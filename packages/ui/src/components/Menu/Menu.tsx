import { classNames } from '@sienar/utils';
import { createThemedClassNames, ThemeContext, useThemeContext } from '@ui/theme.ts';
import './Menu.scss';

import type { ComponentPropsWithoutRef, ElementType } from 'react';
import type { Themeable } from '@ui/theme.ts';

export type MenuProps<T extends ElementType> = {
	/**
	 * The HTML element with which to render the menu
	 */
	tag?: T;
} & Themeable & ComponentPropsWithoutRef<T>

export function Menu<T extends ElementType = 'ul'>(props: MenuProps<T>) {
	const {
		tag: Tag = 'ul',
		color,
		variant,
		className,
		...rest
	} = props;

	const parentTheme = useThemeContext();

	const classes = classNames(
		className,
		createThemedClassNames(color, variant, 'menu')
	);

	return (
		<ThemeContext.Provider value={{
			color: color ?? parentTheme.color ?? 'heavy',
			variant: variant ?? parentTheme.variant ?? 'solid'
		}}>
			<Tag className={classes} {...rest} />
		</ThemeContext.Provider>
	);
}
