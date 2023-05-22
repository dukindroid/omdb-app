import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: 'src/setupTests.ts',
	// 	include: ['tests/**/*.{test,spec}.{js,ts}'],
	// 	coverage:{
  //     reporter:['text', 'json', 'html'] // change this property to the desired output
  //   }
	}
});
