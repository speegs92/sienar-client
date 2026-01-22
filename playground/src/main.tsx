import { createApp, registerPlugins } from '@sienar/utils';
import { plugin as corePlugin } from '@sienar/plugins-core';
import { plugin as identityPlugin } from '@sienar/plugins-identity';

registerPlugins(
	corePlugin,
	identityPlugin
);

createApp();
