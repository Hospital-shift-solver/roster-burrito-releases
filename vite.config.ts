import { resolve } from "node:path";
import { defineConfig } from "vite";

const pages = {
  main: resolve(__dirname, "index.html"),
  download: resolve(__dirname, "download/index.html"),
  templates: resolve(__dirname, "templates/index.html"),
  guide: resolve(__dirname, "guide/index.html"),
  about: resolve(__dirname, "about/index.html"),
  it: resolve(__dirname, "it/index.html"),
  itDownload: resolve(__dirname, "it/download/index.html"),
  itTemplates: resolve(__dirname, "it/templates/index.html"),
  itGuide: resolve(__dirname, "it/guide/index.html"),
  itAbout: resolve(__dirname, "it/about/index.html"),
};
const localCacheControlHeaders = {
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
  Pragma: "no-cache",
  Expires: "0",
};

const brandCacheBuster = Math.floor(Date.now() / 1000).toString();

const brandCacheBustPlugin = {
  name: "brand-cache-bust",
  transformIndexHtml(html: string) {
    return html.replace(
      /(href|src)=(["'])(\/brand\/[^"']+\.(?:png|jpe?g|gif|svg|webp|ico))(?!\?)(\2)/g,
      `$1=$2$3?v=${brandCacheBuster}$2`
    );
  },
};

export default defineConfig({
  plugins: [brandCacheBustPlugin],
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: pages,
    },
  },
  server: {
    headers: localCacheControlHeaders,
  },
  preview: {
    headers: localCacheControlHeaders,
  },
});
