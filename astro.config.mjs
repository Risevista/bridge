import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://bridge.co.jp',
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