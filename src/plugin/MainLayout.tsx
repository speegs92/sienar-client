import { Outlet } from 'react-router-dom';
import { Application, Container } from '@sienar/ui';

export default function MainLayout() {
	return (
		<Application
			color='primary'
			variant='solid'
		>
			<Container className='p-4'>
				<Outlet/>
			</Container>
		</Application>
	)
}
