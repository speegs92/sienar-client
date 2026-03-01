import { inject, registerProvider } from '@sienar/utils';
import { MUI_DATE_LOCALIZATION_PROVIDER } from '@sienar/ui';

export function setupIdentityProviders() {
	registerProvider(inject(MUI_DATE_LOCALIZATION_PROVIDER));
}
