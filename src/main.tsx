import { createApp, registerPlugins } from '@sienar/utils';
import { plugin as corePlugin } from '@sienar/plugins-core';
import { plugin as identityPlugin } from '@sienar/plugins-identity';
import { plugin as uiPlugin } from '@sienar/ui';
import playgroundPlugin from './plugin';

registerPlugins(
	corePlugin,
	identityPlugin,
	uiPlugin,
	playgroundPlugin
);

createApp();
