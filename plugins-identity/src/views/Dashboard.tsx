import Typography from '@mui/material/Typography';
import { useDocumentTitle } from '@sienar/utils';
import { AuthorizeRoute } from '@sienar/utils';

export default function Dashboard() {
	useDocumentTitle('Dashboard');

	return (
		<AuthorizeRoute>
			<Typography typography='h1'>Dashboard stub</Typography>
		</AuthorizeRoute>
	);
}