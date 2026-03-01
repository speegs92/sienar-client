import { Card, CardHeader, CardContent, CardActions } from '@sienar/ui';

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
			<CardActions color='secondary'>
				<div>Some actions here</div>
			</CardActions>
		</Card>
	);
}