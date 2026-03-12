import { ButtonBase } from '@ui/components/Button/ButtonBase.tsx';
import { useCloseableContext } from '@ui/utils.ts';
import { createThemedClassNames, useThemeContext } from '@ui/theme.ts';

import type { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import type { ButtonBaseProps } from '@ui/components/Button/ButtonBase.tsx';
import type { Themeable } from '@ui/theme.ts';

/**
 * The props for the menu item component
 */
export interface MenuItemProps extends
	Themeable,
	Omit<HTMLAttributes<HTMLLIElement>, 'color'>,
	Pick<ButtonBaseProps, 'href'> {
	/**
	 * The text to display with the menu item, if any
	 */
	label?: string;

	/**
	 * The icon to display with the menu item, if any
	 */
	icon?: ReactNode;

	/**
	 * The click handler, if any
	 */
	onClick?: MouseEventHandler<HTMLLIElement>
}

export function MenuItem(props: MenuItemProps) {
	const themeContext = useThemeContext();

	const {
		label,
		icon,
		color = themeContext.color,
		variant = themeContext.variant,
		href,
		className,
		children,
		onClick,
		...rest
	} = props;

	const closeableContext = useCloseableContext();

	const classes = createThemedClassNames(
		color,
		variant,
		'menu__item'
	);

	const handleClick: MouseEventHandler<HTMLLIElement> = e => {
		onClick?.(e);
		closeableContext.close();
	}

	return (
		<li
			className={classes}
			onClick={handleClick}
			{...rest}
		>
			<ButtonBase
				className='menu__item-button'
				href={href}
			>
				<span className='menu__item-icon'>
					{icon}
				</span>
				{label ?? children}
			</ButtonBase>
		</li>
	);
}