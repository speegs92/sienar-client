import { Button, Card, CardHeader, CardContent, CardActions, Dropdown, DropdownDivider, DropdownItem } from '@sienar/ui';
import { MAIN_URL } from '@sienar/plugins-core';

export default function MainView() {
	return (
		<Card color='primary' variant='outlined'>
			<CardHeader variant='solid'>
				<h1>Just a card header</h1>
			</CardHeader>
			<CardContent color='secondary'>
				<Dropdown
					label='Cool dropdown bro'
					color='primary'
					variant='text'
				>
					<DropdownItem label='Just an item, does nothing'/>
					<DropdownDivider/>
					<DropdownItem
						label='Another item, which takes you HOME'
						href={MAIN_URL}
					/>
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
	);
}