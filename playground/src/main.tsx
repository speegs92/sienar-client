import { createApp, registerPlugins } from '@sienar/utils';
import { plugin as identityPlugin } from '@sienar/plugins-identity';

registerPlugins(
	identityPlugin
);

createApp();
