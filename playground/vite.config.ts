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
			'@sienar/utils': resolve(__dirname, '../utils/src/index.ts'),
			'@utils': resolve(__dirname, '../utils/src')
		}
	}
});
