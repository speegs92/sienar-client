import { useState } from 'react';
import { confirm, MAIN_MENU, MAIN_URL, MAIN_VIEW, notify, showModal, useModalContext } from '@sienar/core';
import * as Sienar from '@sienar/ui';
import { ALT_MENU } from './utils.ts';

import type { ModalStatus, ViewModule } from '@sienar/core';

function TestModal() {
	const modal = useModalContext<string>();

	return (
		<Sienar.ModalCard>
			<Sienar.ModalCardBody>
				Just some test content here, ignore me
			</Sienar.ModalCardBody>
			<Sienar.ModalCardFoot>
				<Sienar.Button
					color='primary'
					onClick={() => modal.close('accepted', 'go!')}
				>
					Go!
				</Sienar.Button>
				<Sienar.Button onClick={() => modal.close('rejected')}>
					Never mind
				</Sienar.Button>
			</Sienar.ModalCardFoot>
		</Sienar.ModalCard>
	)
}

function MainView() {
	const [lastStatus, setlastStatus] = useState<ModalStatus|undefined>(undefined);
	const [confirmStatus, setConfirmStatus] = useState<ModalStatus|undefined>(undefined);

	const handleModal = async () => {
		const result = await showModal(
			<TestModal/>,
			{
				title: 'My modal title'
			}
		);

		setlastStatus(result.status);
	};

	const handleConfirm = async () => {
		const status = await confirm(
			'Just answer the question!',
			{
				acceptedText: 'Sure',
				acceptedColor: 'primary',
				acceptedOutlined: true,
				rejectedText: 'Nahhh',
				rejectedColor: 'warning',
				rejectedOutlined: true
			},
			{
				maxWidth: 'sm',
				title: "I'm curious..."
			}
		);

		setConfirmStatus(status);
	}

	return (
		<>
			<Card
				color='primary'
				className='mb-4'
			>
				<CardHeader>
					<h1>Just a card header</h1>
				</CardHeader>
				<CardContent>
					<p className='my-4'>
						Last modal status: {lastStatus ?? 'undefined'}
					</p>
					<p className='my-4'>
						Last confirm status: {confirmStatus ?? 'undefined'}
					</p>
					<Dropdown
						className='mb-4'
						label='Cool dropdown bro'
						color='primary'
						direction='right'
						alignment='bottom'
					>
						<Menu color='primary'>
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
					color='primary'
					className='d-flex flex-row justify-content-end'
				>
					<Button
						color='primary'
						outlined
						onClick={handleConfirm}
					>
						Pop confirm
					</Button>
					<Button	onClick={handleModal}>
						Pop modal
					</Button>
					<Button
						color='success'
						onClick={() => notify('Just a really, really big success notification', 'success')}
					>
						Pop success
					</Button>
					<Button
						color='info'
						outlined
						onClick={() => notify('Just a really big info notification', 'info')}
					>
						Pop info
					</Button>
					<Button
						color='warning'
						outlined
						onClick={() => notify('Just a big warning notification', 'warning')}
					>
						Pop warning
					</Button>
					<Button
						color='danger'
						onClick={() => notify('Just an error notification', 'error')}
					>
						Pop error
					</Button>
				</CardActions>
			</Card>

			<TabGroup color='primary'>
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
		icon: <MdiIcon icon='home'/>
	},
	menuKey: ALT_MENU,
	layoutMenu: MAIN_MENU
}

export default module;
