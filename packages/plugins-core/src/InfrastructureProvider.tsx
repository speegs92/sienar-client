import { useState } from 'react';
import { infrastructureContext, DASHBOARD_MENU, DASHBOARD_UTILS_MENU } from '@sienar/utils';

import type { PropsWithChildren } from 'react';
import type { InjectionKey, LinkDictionary } from '@sienar/utils';

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