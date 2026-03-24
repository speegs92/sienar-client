import '@sienar/utils';
import type { Breakpoint } from '@ui/theme.ts';

export * from './Modal.tsx';
export * from './ModalContainer.tsx';
export * from './utils.ts';

declare module '@sienar/utils' {
	interface ExtensibleModalConfiguration {
		/**
		 * The max width of the modal
		 */
		maxWidth?: Breakpoint;
	}
}
