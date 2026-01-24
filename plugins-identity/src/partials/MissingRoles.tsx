import { StatusPage } from '@sienar/ui';

export default function MissingRoles() {
	return (
		<StatusPage title="You don't have permission">
			You cannot view this page because it requires elevated access.
		</StatusPage>
	);
}