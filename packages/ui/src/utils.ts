import { createContext, useContext } from 'react';

export const CloseableContext = createContext<Closeable>({
	isOpen: false,
	close: () => {}
});

export const useCloseableContext = () => useContext<Closeable>(CloseableContext);

/**
 * Represents a component which can be closed. Used to pass the open state and a close function to child components via a context.
 */
export type Closeable = {
	isOpen: boolean;
	close: () => void;
}
