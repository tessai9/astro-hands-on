import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://tessai9.github.io',
  base: '/astro-hands-on',
	integrations: [mdx(), sitemap()],
});
