import { useSyncExternalStore } from 'react';

/**
 * Creates a synchronous external store which can be used both inside and outside React to update application state
 *
 * @param initial The initial value of the state
 */
export function createState<T>(initial: T) {
	let value: T = initial;
	let listeners = new Set<StateChangeListener>();

	const notifyListeners = () => {
		listeners.forEach(l => l());
	};

	const subscribe = (listener: StateChangeListener) => {
		listeners.add(listener);
		return () => listeners.delete(listener);
	};

	const getSnapshot = () => value;

	const getter = () => value;

	const setter = (newValue: T) => {
		value = newValue;
		notifyListeners();
	};

	const hook = () => useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

	return { getter, setter, hook };
}

/**
 * A state change listener
 */
export interface StateChangeListener {
	(): void;
}
