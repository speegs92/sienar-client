import { useState } from 'react';
import { classNames } from '@sienar/utils';
import { Button } from '@ui/components/Button/Button.tsx';
import { createThemedClassNames, ThemeContext } from '@ui/theme.ts';
import { CloseableContext } from '@ui/utils.ts';

import type { HTMLAttributes,  ReactNode } from 'react';
import type { Color, Themeable, Variant } from '@ui/theme.ts';

/**
 * The props for the dropdown component
 */
export interface DropdownProps extends Themeable, Omit<HTMLAttributes<HTMLElement>, 'color'> {
	/**
	 * The activator button theme color
	 */
	buttonColor?: Color;

	/**
	 * The activator button variant
	 */
	buttonVariant?: Variant;

	/**
	 * The list color
	 */
	listColor?: Color;

	/**
	 * The list variant
	 */
	listVariant?: Variant;

	/**
	 * The label text to show with the button, if any
	 */
	label?: string;

	/**
	 * The left icon to show with the activator button, if any
	 */
	leftIcon?: ReactNode;

	/**
	 * The right icon to show with the activator button, if any
	 */
	rightIcon?: ReactNode;

	/**
	 * The icon to render inside the activator button, if any. If this prop is present, the dropdown will only render this as child content of the activator button.
	 */
	icon?: ReactNode;

	/**
	 * Whether the dropdown should open upward instead of downward
	 */
	dropup?: boolean;

	/**
	 * Whether the dropdown should hide icons on dropdown items
	 */
	hideChildrenIcons?: boolean;
}

export function Dropdown(props: DropdownProps) {
	const {
		color = 'default',
		buttonColor,
		listColor,
		variant = 'solid',
		buttonVariant,
		listVariant,
		label,
		leftIcon,
		rightIcon,
		icon,
		dropup,
		hideChildrenIcons,
		children,
		className,
		...rest
	} = props;

	const [ isOpen, setIsOpen ] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const close = () => setIsOpen(false);

	const dropdownClasses = classNames(
		className,
		createThemedClassNames(color, variant, 'dropdown'),
		{
			'dropdown--open': isOpen,
			'dropdown--up': !!dropup,
			'dropdown--child-icons-hidden': !!hideChildrenIcons
		}
	);

	const listClasses = createThemedClassNames(listColor ?? color, listVariant ?? variant, 'dropdown__list');

	return (
		<div className={dropdownClasses} {...rest}>
			<Button
				color={buttonColor ?? color}
				variant={buttonVariant ?? variant}
				icon={icon}
				className='dropdown__activator'
				onClick={toggle}
			>
				{leftIcon}
				{label}
				{rightIcon}
			</Button>

			<CloseableContext.Provider value={{
				isOpen,
				close
			}}>
				<ThemeContext.Provider value={{
					color: listColor ?? color,
					variant: listVariant ?? variant
				}}>
					{isOpen && (
						<div
							className='dropdown__overlay'
							onClick={close}
						/>
					)}
					<div className='dropdown__list-wrapper'>
						<ul className={listClasses}>
							{children}
						</ul>
					</div>
				</ThemeContext.Provider>
			</CloseableContext.Provider>
		</div>
	)
}