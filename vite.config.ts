import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@sienar/core': resolve(__dirname, './packages/core/src/index.ts'),
			'@sienar/ui': resolve(__dirname, './packages/ui/src/index.ts')
		}
	},
	server: {
		proxy: {
			'^/api': 'http://localhost:5000'
		}
	}
});
