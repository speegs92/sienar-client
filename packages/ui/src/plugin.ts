import { CONFIRM_MODAL, provide } from '@sienar/core';
import { ConfirmModal } from '@sienar/ui';

export function plugin() {
	provide(CONFIRM_MODAL, ConfirmModal);
}
