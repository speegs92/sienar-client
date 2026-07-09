import { classNames } from '@sienar/utils';
import { createThemedClassNames, ThemeContext } from '@ui/theme.ts';

import type { HTMLAttributes } from 'react';
import type { Color } from '@ui/theme.ts';

/**
 * The props for the card component
 */
export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
	/**
	 * The color of the card
	 */
	color?: Color;

	/**
	 * The HTML tag with which to render the card
	 */
	tag?: keyof HTMLElementTagNameMap;
}

export function Card(props: CardProps) {
	const {
		color,
		tag: Tag = 'article',
		className,
		...rest
	} = props;

	const classes = classNames(
		className,
		createThemedClassNames(color, undefined, 'card')
	);

	return (
		<ThemeContext.Provider value={{ color }}>
			<Tag className={classes} {...rest} />
		</ThemeContext.Provider>
	);
}