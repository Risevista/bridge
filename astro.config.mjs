import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
<<<<<<< HEAD
  site: 'https://brid-ge.co.jp',
=======
  site: 'https://bridge.co.jp',
>>>>>>> 777de5525ab96230f86054e7e8a010cf75659d9c
  integrations: [tailwind(), react()],
  prefetch: {
    prefetchAll: true
  },
  image: {
    // 画像最適化の設定
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    // デフォルトの画像品質
    quality: 80,
    // サポートする画像形式
    formats: ['webp', 'avif'],
    // 画像の最適化
    optimization: {
      // 画像の圧縮レベル
      compression: 'high'
    }
  }
});