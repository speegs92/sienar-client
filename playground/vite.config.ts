import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		dedupe: [
			'react',
			'react-dom',
			'react-router',
			'react-router-dom'
		],
		alias: {
			'@': resolve(__dirname, './src'),
			'@utils': resolve(__dirname, '../utils/src'),
			'@sienar/utils': resolve(__dirname, '../utils/src/index.ts'),
			'@ui': resolve(__dirname, '../ui/src'),
			'@sienar/ui': resolve(__dirname, '../ui/src/index.ts'),
			'@plugins-core': resolve(__dirname, '../plugins-core/src'),
			'@sienar/plugins-core': resolve(__dirname, '../plugins-core/src/index.ts'),
			'@plugins-identity': resolve(__dirname, '../plugins-identity/src'),
			'@sienar/plugins-identity': resolve(__dirname, '../plugins-identity/src/index.ts')
		}
	}
});
