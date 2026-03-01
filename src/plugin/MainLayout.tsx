import { Outlet } from 'react-router-dom';
import { Container } from '@sienar/ui';

export default function MainLayout() {
	return (
		<Container>
			<p>Layout</p>
			<Outlet/>
		</Container>
	)
}