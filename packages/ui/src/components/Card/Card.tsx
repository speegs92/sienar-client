import { classNames } from '@sienar/utils';
import { createThemedClassNames, ThemeContext } from '@ui/theme.ts';
import './Card.scss';

import type { HTMLAttributes } from 'react';
import type { Themeable } from '@ui/theme.ts';

/**
 * The props for the card component
 */
export interface CardProps extends Themeable, Omit<HTMLAttributes<HTMLElement>, 'color'> {
	/**
	 * The HTML tag with which to render the card
	 */
	tag?: keyof HTMLElementTagNameMap;
}

export function Card(props: CardProps) {
	const {
		color,
		variant,
		tag: Tag = 'article',
		className,
		...rest
	} = props;

	const classes = classNames(
		className,
		createThemedClassNames(color, variant, 'card')
	);

	return (
		<ThemeContext.Provider value={{ color, variant }}>
			<Tag className={classes} {...rest} />
		</ThemeContext.Provider>
	);
}