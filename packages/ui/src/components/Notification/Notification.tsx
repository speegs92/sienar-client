import { classNames } from '@sienar/utils';
import { createThemedClassNames } from '@ui/theme.ts';
import { useNotificationContext } from './utils.ts';
import { Icon } from '@ui/components';

import type { HTMLAttributes } from 'react';
import type { NotificationData } from '@sienar/utils';
import type { Color } from '@ui/theme.ts';

export interface NotificationProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
	/**
	 * The notification data
	 */
	data: NotificationData;
}

export function Notification(props: NotificationProps) {
	const {
		data,
		className,
		...rest
	} = props;

	const context = useNotificationContext()!;

	const classes = classNames(
		className,
		createThemedClassNames(
			// Sienar names these such that notification types map one-to-one to theme colors
			data.notification.type as Color,
			context.variant,
			'notifications__notification'
		)
	);

	return (
		<div
			className={classes}
			{...rest}
		>
			<div className='notifications__notification-icon'>
				{data.configuration.icon || context.icons[data.notification.type]}
			</div>

			<div className='notifications__notification-message'>
				{data.notification.message}
			</div>

			<div className='notifications__notification-close-button-wrapper'>
				{data.configuration.dismissButton || (
					<button
						className='notifications__notification-close-button'
						onClick={data.close}
					>
						<Icon icon='close'/>
					</button>
				)}
			</div>

		</div>
	)
}
