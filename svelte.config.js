import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),

		alias: {
			// these are the aliases and paths to them
			'@styles': path.resolve('./src/ui/sharing/styles/globals.ts'),
			// '@images/*': path.resolve('./src/assets/images/*'),
			'@atoms': path.resolve('./src/ui/sharing/atoms'),
			'@molecules': path.resolve('./src/ui/sharing/molecules'),
			'@images/*': 'src/assets/images/*',
			'@typing/*': 'src/logic/typing/*',
			'@mixins': 'src/ui/sharing/styles/mixins.ts'
		}
	}
};

export default config;
