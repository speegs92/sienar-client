import { Authorize } from '@sienar/utils';
import { inject  } from '@sienar/utils';
import { LinkButton } from '@sienar/ui';
import UserBadge from '@plugins-identity/components/UserBadge.tsx';
import { REGISTER_URL, LOGIN_URL } from '@plugins-identity/urls.ts';

import type { UserBadgeProps } from '@plugins-identity/components/UserBadge.tsx';

export default function DrawerFooter(props: UserBadgeProps) {
	return (
		<Authorize unauthorized={(
			<>
				<LinkButton
					className='d-block mb-2'
					variant='outlined'
					href={REGISTER_URL}
					color='secondary'
				>
					Register
				</LinkButton>
				<LinkButton
					className='d-block'
					variant='solid'
					href={inject(LOGIN_URL)}
				>
					Log in
				</LinkButton>
			</>
		)}>
			<UserBadge {...props}/>
		</Authorize>
	)
};
