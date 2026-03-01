import { classNames } from '@sienar/utils';
import { createThemedClassNames, useThemeContext } from '@ui/theme.ts';
import type { HTMLAttributes } from 'react';
import type { Themeable } from '@ui/theme.ts';

/**
 * The props for the card header component
 */
export interface CardHeaderProps extends Themeable, Omit<HTMLAttributes<HTMLElement>, 'color'> {
	/**
	 * The HTML tag with which to render the card header
	 */
	tag?: keyof HTMLElementTagNameMap
}

export function CardHeader(props: CardHeaderProps) {
	const themeContext = useThemeContext();

	const {
		tag: Tag = 'header',
		color = themeContext.color,
		variant = themeContext.variant,
		className,
		...rest
	} = props;

	const classes = classNames(
		className,
		createThemedClassNames(color, variant, 'card__header')
	);

	return (
		<Tag className={classes} {...rest} />
	);
}