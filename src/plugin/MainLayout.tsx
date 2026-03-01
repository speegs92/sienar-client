import { Outlet } from 'react-router-dom';

export default function MainLayout() {
	return (
		<div>
			<p>Layout</p>
			<Outlet/>
		</div>
	)
}