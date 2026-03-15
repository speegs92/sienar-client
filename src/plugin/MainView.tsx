import { Button, Card, CardHeader, CardContent, CardActions, Dropdown, Icon, MenuDivider, Menu, MenuItem, TabGroup, TabPane } from '@sienar/ui';
import { MAIN_MENU, MAIN_URL, MAIN_VIEW } from '@sienar/plugins-core';
import { ALT_MENU } from './utils.ts';
import type { ViewModule } from '@sienar/plugins-core';

function MainView() {
	return (
		<>
			<Card
				color='primary'
				variant='outlined'
				className='mb-4'
			>
				<CardHeader variant='solid'>
					<h1>Just a card header</h1>
				</CardHeader>
				<CardContent color='secondary'>
					<Dropdown
						className='mb-4'
						label='Cool dropdown bro'
						color='primary'
						variant='outlined'
						direction='right'
						alignment='bottom'
					>
						<Menu color='primary' variant='solid'>
							<MenuItem label='Just an item, does nothing'/>
							<MenuItem label='Just an item, does nothing'/>
							<MenuItem label='Just an item, does nothing'/>
							<MenuDivider/>
							<MenuItem href={MAIN_URL}>
								Another item, which takes you HOME
							</MenuItem>
						</Menu>
					</Dropdown>
				</CardContent>
				<CardActions
					color='secondary'
					className='d-flex flex-row justify-content-end'
				>
					<Button color='primary' variant='solid'>Click me</Button>
					<Button>Click me again</Button>
				</CardActions>
			</Card>

			<TabGroup
				color='primary'
				variant='text'
			>
				<TabPane activatorContent='Tab 1'>
					<p>Some tab 1 content</p>
				</TabPane>
				<TabPane activatorContent='Tab 2'>
					<p>Some tab 2 content</p>
				</TabPane>
				<TabPane activatorContent='Tab 3'>
					<p>Some tab 3 content</p>
					<p>And some bonus content</p>
				</TabPane>
			</TabGroup>
		</>
	);
}

const module: ViewModule = {
	path: '/',
	pathKey: MAIN_URL,
	view: <MainView/>,
	viewKey: MAIN_VIEW,
	menu: {
		text: 'Home',
		href: MAIN_URL,
		icon: <Icon icon='home'/>
	},
	menuKey: ALT_MENU,
	layoutMenu: MAIN_MENU
}

export default module;
