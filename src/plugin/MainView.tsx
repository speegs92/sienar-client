import { Button, Card, CardHeader, CardContent, CardActions } from '@sienar/ui';

export default function MainView() {
	return (
		<Card color='primary' variant='outlined'>
			<CardHeader variant='solid'>
				<h1>Just a card header</h1>
			</CardHeader>
			<CardContent color='secondary'>
				<p>Some content</p>
				<p>Some more content</p>
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