import { classNames } from '@sienar/utils';
import { createThemedClassNames } from '@ui/theme.ts';
import { Backdrop } from '../Backdrop.tsx';

import type { HTMLAttributes } from 'react';
import type { Themeable } from '@ui/theme.ts';

/**
 * The props for the sidebar component
 */
export interface SidebarProps extends Themeable, Omit<HTMLAttributes<HTMLElement>, 'color'> {
	/**
	 * Whether the sidebar should be open
	 */
	open?: boolean;

	/**
	 * Sets the open state of the sidebar
	 *
	 * @param o The new open state
	 */
	setOpen?: (o: boolean) => void;

	/**
	 * The HTML tag with which to render the sidebar
	 */
	tag?: keyof HTMLElementTagNameMap;
}

export function Sidebar(props: SidebarProps) {
	const {
		tag: Tag = 'div',
		color = 'heavy',
		variant = 'solid',
		open = false,
		setOpen,
		className,
		...rest
	} = props;

	const classes = classNames(
		className,
		createThemedClassNames(color, variant, 'app__sidebar'),
		'flex-shrink-0',
		{
			'app__sidebar--open': open
		}
	);

	return (
		<>
			<Backdrop
				visible={open}
				onClick={() => setOpen?.(false)}
			/>
			<Tag className={classes} {...rest} />
		</>
	);
}
