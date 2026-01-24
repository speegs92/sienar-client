import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import LabelIcon from '@mui/icons-material/Label';
import { AuthorizeRoute, getDateString, inject } from '@sienar/utils';
import { StatusPage, LoadingPage } from '@sienar/ui';
import { GET_LOCKOUT_REASONS_SERVICE } from '@plugins-identity/identity/services.ts';
import type { AccountLockResult } from '@plugins-identity/identity/types.ts';

export default function AccountLocked() {
	const [ params ] = useSearchParams();
	const [ lockResult, setLockResult ] = useState<AccountLockResult|null>(null);

	useEffect(() => {
		(async function() {
			const userId = params.get('userId');
			const verificationCode = params.get('verificationCode');

			if (!userId || !verificationCode) return;

			const service = inject(GET_LOCKOUT_REASONS_SERVICE);
			const result = await service({ userId, verificationCode });

			if (!result.wasSuccessful || !result.result) return;

			setLockResult(result.result);
		})();
	}, []);

	if (!lockResult) return <LoadingPage>Loading lockout reasons...</LoadingPage>;

	return (
		<AuthorizeRoute mustBeLoggedOut>
			<StatusPage title='Account locked out'>
				{lockResult.lockoutEnd && (
					<Typography>
						Your account is currently locked until <strong>{getDateString(lockResult.lockoutEnd)}
					</strong></Typography>
				)}
				{!lockResult.lockoutEnd && (
					<Typography>
						Your account is locked <strong>permanently</strong>.
					</Typography>
				)}

				<Typography my={2}>Your account is locked for the following reasons:</Typography>
				<List>
					{lockResult.lockoutReasons.map(r => (
						<ListItem key={r.id}>
							<ListItemIcon>
								<LabelIcon fontSize='small'/>
							</ListItemIcon>
							<ListItemText>
								{r.reason}
							</ListItemText>
						</ListItem>
					))}
				</List>
			</StatusPage>
		</AuthorizeRoute>
	)
}