import { useState } from 'react';
import { classNames } from '@sienar/utils';
import { createThemedClassNames } from '@ui/theme.ts';
import { Appbar } from './Appbar.tsx';
import { Sidebar } from './Sidebar.tsx';
import { MainContent } from './MainContent.tsx';
import './Application.scss';

import type { HTMLAttributes } from 'react';
import type { Themeable } from '@ui/theme.ts'
import type { SidebarProps } from './Sidebar.tsx';
import type { AppbarProps } from './Appbar.tsx';
import { Button, Icon } from '@ui/components';
import { useScrollLock } from '@ui/utils.ts';

/**
 * The props of the application component
 */
export interface ApplicationProps extends Themeable, Omit<HTMLAttributes<HTMLElement>, 'color'> {
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
		tag: Tag = 'div',
		color = 'heavy',
		variant = 'solid',
		className,
		appbarProps,
		sidebarProps,
		children,
		...rest
	} = props;

	const [open, setOpen] = useState(false);
	useScrollLock(open);

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
			/>
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
