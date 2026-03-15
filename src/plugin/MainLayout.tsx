import { Outlet } from 'react-router-dom';
import { Application, Container } from '@sienar/ui';
import { MAIN_MENU } from '@sienar/plugins-core';

export default function MainLayout() {
	return (
		<Application
			color='primary'
			variant='solid'
			menuKey={MAIN_MENU}
		>
			<Container className='p-4'>
				<Outlet/>
			</Container>
		</Application>
	)
}
