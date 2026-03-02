import { ButtonBase } from '@ui/components/Button/ButtonBase.tsx';
import { useCloseableContext } from '@ui/utils.ts';
import { createThemedClassNames, useThemeContext } from '@ui/theme.ts';

import type { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import type { ButtonBaseProps } from '@ui/components/Button/ButtonBase.tsx';
import type { Themeable } from '@ui/theme.ts';

/**
 * The props for the dropdown item component
 */
export interface DropdownItemProps extends
	Themeable,
	Omit<HTMLAttributes<HTMLLIElement>, 'children'|'color'>,
	Pick<ButtonBaseProps, 'href'> {
	/**
	 * The text to display with the dropdown item, if any
	 */
	label?: string;

	/**
	 * The icon to display with the dropdown item, if any
	 */
	icon?: ReactNode;

	/**
	 * The click handler, if any
	 */
	onClick?: MouseEventHandler<HTMLLIElement>
}

export function DropdownItem(props: DropdownItemProps) {
	const themeContext = useThemeContext();

	const {
		label,
		icon,
		color = themeContext.color,
		variant = themeContext.variant,
		href,
		className,
		onClick,
		...rest
	} = props;

	const closeableContext = useCloseableContext();

	const classes = createThemedClassNames(
		color,
		variant,
		'dropdown__item'
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
				className='dropdown__item-button'
				href={href}
			>
				<span className='dropdown__item-icon'>
					{icon}
				</span>
				{label}
			</ButtonBase>
		</li>
	);
}