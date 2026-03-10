import { classNames } from '@sienar/utils';
import type { HTMLAttributes } from 'react';
import type { Themeable } from '@ui/theme.ts';

/**
 * The props for the appbar component
 */
export interface AppbarProps extends Themeable, Omit<HTMLAttributes<HTMLElement>, 'color'> {
	/**
	 * The HTML tag with which to render the sidebar
	 */
	tag?: keyof HTMLElementTagNameMap;
}

export function Appbar(props: AppbarProps) {
	const {
		tag: Tag = 'header',
		color = 'light',
		variant = 'solid',
		className,
		...rest
	} = props;

	const classes = classNames(
		className,
		'app__appbar',
		`app__appbar--${color}`,
		`app__appbar--${variant}`
	);

	return <Tag className={classes} {...rest} />;
}