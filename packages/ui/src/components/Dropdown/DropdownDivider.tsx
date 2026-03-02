import { classNames } from '@sienar/utils';
import { createThemedClassNames, useThemeContext } from '@ui/theme.ts';
import type { HTMLAttributes } from 'react';
import type { Themeable } from '@ui/theme.ts';

/**
 * The props for the dropdown divider component
 */
export interface DropdownDividerProps extends Themeable, Omit<HTMLAttributes<HTMLLIElement>, 'children'|'color'> {}

export function DropdownDivider(props: DropdownDividerProps) {
	const themeContext = useThemeContext();

	const {
		color = themeContext.color,
		variant = themeContext.variant,
		className,
		...rest
	} = props;

	const classes = classNames(
		className,
		'dropdown__item--divider',
		createThemedClassNames(color, variant, 'dropdown__item')
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