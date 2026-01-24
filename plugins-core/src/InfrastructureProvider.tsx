import { useState } from 'react';
import { infrastructureContext } from '@utils/infrastructure.ts';
import { DASHBOARD_MENU, DASHBOARD_UTILS_MENU } from '@utils/menus.ts';

import type { PropsWithChildren } from 'react';
import type { InjectionKey } from '@utils/di.ts';
import type { LinkDictionary } from '@utils/menus.ts';

export default function InfrastructureProvider({ children }: PropsWithChildren) {
	const [ activeMenu, setActiveMenu ] = useState<InjectionKey<LinkDictionary>>(DASHBOARD_MENU);
	const [ activeUtilsMenu, setActiveUtilsMenu ] = useState<InjectionKey<LinkDictionary>>(DASHBOARD_UTILS_MENU);

	return (
		<infrastructureContext.Provider value={{
			activeMenu,
			setActiveMenu,
			activeUtilsMenu,
			setActiveUtilsMenu
		}}>
			{children}
		</infrastructureContext.Provider>
	);
}