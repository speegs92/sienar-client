import { classNames } from '@sienar/utils';
import { createThemedClassNames, useThemeContext } from '@ui/theme.ts';
import type { HTMLAttributes } from 'react';
import type { Themeable } from '@ui/theme.ts';

/**
 * The props for the menu divider component
 */
export interface MenuDividerProps extends Themeable, Omit<HTMLAttributes<HTMLLIElement>, 'children'|'color'> {}

export function MenuDivider(props: MenuDividerProps) {
	const themeContext = useThemeContext();

	const {
		color = themeContext.color,
		variant = themeContext.variant,
		className,
		...rest
	} = props;

	const classes = classNames(
		className,
		'menu__item--divider',
		createThemedClassNames(color, variant, 'menu__item')
	);

	return (
		<li
			className={classes}
			{...rest}
		>
			<hr/>
		</li>
	);
}