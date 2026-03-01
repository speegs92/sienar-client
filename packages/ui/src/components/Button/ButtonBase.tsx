import { Link } from 'react-router-dom';
import { inject } from '@sienar/utils';

import type { HTMLAttributes, ReactNode } from 'react';
import type { InjectionKey } from '@sienar/utils';

/**
 * The props for the button base component
 */
export interface ButtonBaseProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
	/**
	 * The icon to render as the child content, if any
	 */
	icon?: ReactNode;

	/**
	 * The link href, if any
	 */
	href?: string|InjectionKey<string>;
}

export function ButtonBase(props: ButtonBaseProps) {
	const {
		icon,
		href: to,
		children,
		...rest
	} = props;

	const childContent = icon ? icon : children;

	// noinspection SuspiciousTypeOfGuard
	const href = typeof to === 'symbol'
		? inject(to)
		: to;

	if (!href) {
		return (
			<button {...rest}>
				{ childContent }
			</button>
		);
	}

	if (href.startsWith('http')) {
		return (
			<a href={href} {...rest}>
				{childContent}
			</a>
		);
	}

	return (
		<Link to={href} {...rest}>
			{childContent}
		</Link>
	);
}
