import { Button, Card, CardHeader, CardContent, CardActions, Dropdown, DropdownDivider, DropdownItem, TabGroup, TabPane } from '@sienar/ui';
import { MAIN_URL } from '@sienar/plugins-core';

export default function MainView() {
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
						className='d-block mb-4'
						label='Cool dropdown bro'
						color='primary'
						variant='outlined'
					>
						<DropdownItem label='Just an item, does nothing'/>
						<DropdownItem label='Just an item, does nothing'/>
						<DropdownItem label='Just an item, does nothing'/>
						<DropdownDivider/>
						<DropdownItem href={MAIN_URL}>
							Another item, which takes you HOME
						</DropdownItem>
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