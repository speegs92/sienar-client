import { classNames } from '@sienar/utils';
import { createThemedClassNames, useThemeContext } from '@ui/theme.ts';

import type { HTMLAttributes } from 'react';
import type { Themeable } from '@ui/theme.ts';

/**
 * The props for the card actions component
 */
export interface CardActionsProps extends Themeable, Omit<HTMLAttributes<HTMLElement>, 'color'> {
	/**
	 * The HTML tag with which to render the card actions
	 */
	tag?: keyof HTMLElementTagNameMap
}

export function CardActions(props: CardActionsProps) {
	const themeContext = useThemeContext();

	const {
		tag: Tag = 'section',
		color = themeContext.color,
		variant = themeContext.variant,
		className,
		...rest
	} = props;

	const classes = classNames(
		className,
		createThemedClassNames(color, variant, 'card__actions')
	);

	return (
		<Tag className={classes} {...rest} />
	);
}