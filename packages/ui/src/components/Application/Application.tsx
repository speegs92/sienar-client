import { useMemo, useState } from 'react';
import { aggregateLinks, classNames, filterLinks, useAuthContext } from '@sienar/utils';
import { createThemedClassNames } from '@ui/theme.ts';
import { useScrollLock } from '@ui/utils.ts';
import { Button, Icon, Menu, MenuItem } from '@ui/components';
import { Appbar } from './Appbar.tsx';
import { Sidebar } from './Sidebar.tsx';
import { MainContent } from './MainContent.tsx';
import './Application.scss';

import type { HTMLAttributes } from 'react';
import type { InjectionKey, LinkDictionary } from '@sienar/utils';
import type { Themeable } from '@ui/theme.ts'
import type { SidebarProps } from './Sidebar.tsx';
import type { AppbarProps } from './Appbar.tsx';

/**
 * The props of the application component
 */
export interface ApplicationProps extends Themeable, Omit<HTMLAttributes<HTMLElement>, 'color'> {
	/**
	 * The injection key of the menu to render with the layout
	 */
	menuKey: InjectionKey<LinkDictionary>;

	/**
	 * The HTML tag with which to render the application
	 */
	tag?: keyof HTMLElementTagNameMap;

	/**
	 * The props to supply to the appbar component
	 */
	appbarProps?: AppbarProps;

	/**
	 * The props to supply to the sidebar component
	 */
	sidebarProps?: SidebarProps;
}

export function Application(props: ApplicationProps) {
	const {
		menuKey,
		tag: Tag = 'div',
		color = 'heavy',
		variant = 'solid',
		className,
		appbarProps,
		sidebarProps,
		children,
		...rest
	} = props;

	const authContext = useAuthContext();
	const [open, setOpen] = useState(false);
	useScrollLock(open);
	const menuItems = useMemo(() => {
		const links = aggregateLinks(menuKey);
		return filterLinks(links, authContext.isLoggedIn, authContext.roles);
	}, []);

	const appClasses = classNames(
		className,
		createThemedClassNames(color, variant, 'app'),
		'd-flex flex-row',
		{
			'app--open': open
		}
	);

	return (
		<Tag className={appClasses} {...rest}>
			<Sidebar
				color={color}
				variant={variant}
				open={open}
				setOpen={setOpen}
				{...sidebarProps}
			>
				<Menu
					color={color}
					variant={variant}
				>
					{menuItems.map(item => (
						<MenuItem
							key={item.text}
							label={item.text}
							href={item.href}
							icon={item.icon}
						/>
					))}
				</Menu>
			</Sidebar>

			<div className='app__window'>
				<Appbar
					color={color}
					variant={variant}
					{...appbarProps}
				>
					<Button
						className='d-lg-none'
						color={color}
						icon={<Icon icon='menu'/>}
						onClick={() => setOpen(!open)}
					/>
				</Appbar>

				<MainContent
					sidebarOpen={open}
					className='bg-light flex-grow-1'
				>
					{children}
				</MainContent>
			</div>
		</Tag>
	);
}
