import { useNotifications } from '@sienar/utils';
import { Icon } from '@ui/components';
import { Notification } from './Notification.tsx';
import { notificationContext } from './utils.ts';

import type { ReactNode } from 'react';
import type { NotificationType } from '@sienar/utils';
import type { Variant } from '@ui/theme.ts';

import './Notifications.scss';

/**
 * The props for the notification provider component
 */
export interface NotificationsProps {
	/**
	 * The notification variant
	 */
	variant?: Variant;

	/**
	 * The default icon to use with each notification type
	 */
	icons?: { [id in NotificationType]: ReactNode };
}

export function Notifications(props: NotificationsProps) {
	const { variant = 'solid' } = props;
	const icons: Record<NotificationType, ReactNode> = Object.assign({
		success: <Icon icon='checkbox-marked-circle-outline'/>,
		info: <Icon icon='information'/>,
		warning: <Icon icon='alert-outline'/>,
		error: <Icon icon='alert-circle'/>
	}, props.icons);

	const notifications = useNotifications();

	return (
		<notificationContext.Provider value={{ variant, icons }}>
			<div className='notifications'>
				{notifications.map(n => (
					<Notification
						key={n.id}
						data={n}
					/>
				))}
			</div>
		</notificationContext.Provider>
	);
}
