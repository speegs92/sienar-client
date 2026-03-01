import Box from '@mui/material/Box';
import { Authorize } from '@sienar/utils';
import { inject  } from '@sienar/utils';
import { ButtonLink } from '@sienar/ui';
import UserBadge from '@plugins-identity/components/UserBadge.tsx';
import { REGISTER_URL, LOGIN_URL } from '@plugins-identity/urls.ts';

import type { UserBadgeProps } from '@plugins-identity/components/UserBadge.tsx';

export default function DrawerFooter(props: UserBadgeProps) {
	return (
		<Box sx={{
			width: '100%',
			p: 2
		}}>
			<Authorize unauthorized={(
				<>
					<ButtonLink
						sx={{
							width: '100%',
							mb: 2
						}}
						variant='outlined'
						to={REGISTER_URL}
						color='secondary'
					>
						Register
					</ButtonLink>
					<ButtonLink
						sx={{ width: '100%' }}
						variant='contained'
						to={inject(LOGIN_URL)}
					>
						Log in
					</ButtonLink>
				</>
			)}>
				<UserBadge {...props}/>
			</Authorize>
		</Box>
	)
};
