// @ts-check
import { defineConfig } from 'astro/config';
import sitegraphSitemapIntegration from 'starlight-site-graph/integration';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
 
    prefetch: true,
    integrations: [react(), sitegraphSitemapIntegration({
        sitemapConfig: {
            contentRoot: "./src",
        },
        graphConfig: {
      depth: 2,
      repelForce: 350,
      linkDistance: 75,
      colliderPadding: 50
    }
    })],
});