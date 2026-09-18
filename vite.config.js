import { defineConfig } from 'vite';
import { resolve } from 'node:path';

/**
 * Two ES-module entries, one output directory (Resources/Public/Vite/):
 *
 *   - agentation: React + the upstream Agentation toolbar + the TYPO3 glue,
 *     rolled into one hashed file. The host page needs no React. PHP finds
 *     it through manifest.json (Classes/Service/ViteAssetResolver.php).
 *   - module: the System > Agentation backend module, emitted under the
 *     stable name module.js because the TYPO3 import map
 *     (Configuration/JavaScriptModules.php) references it directly.
 *     TYPO3's own modules (@typo3/...) stay external and resolve through
 *     the backend import map at runtime.
 *
 * Modules both entries share (Build/Sources/storage.js) become a small
 * hashed chunk next to the toolbar bundle; the browser resolves the relative
 * import, so PHP only needs each entry's own file from manifest.json.
 */
function stripDependencyClientDirective() {
  return {
    name: 'strip-agentation-client-directive',
    transform(code, id) {
      if (!id.includes('/node_modules/agentation/dist/index.mjs')) {
        return null;
      }
      return code.replace(/^["']use client["'];\s*/, '');
    },
  };
}

export default defineConfig({
  base: '',
  publicDir: false,
  clearScreen: false,
  plugins: [stripDependencyClientDirective()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    chunkSizeWarningLimit: 650,
    manifest: 'manifest.json',
    outDir: resolve(process.cwd(), 'Resources/Public/Vite'),
    emptyOutDir: true,
    target: 'es2020',
    rolldownOptions: {
      input: {
        agentation: resolve(process.cwd(), 'Build/Sources/agentation.js'),
        module: resolve(process.cwd(), 'Build/Sources/module.js'),
      },
      external: [/^@typo3\//],
      output: {
        entryFileNames: (chunk) => (chunk.name === 'module' ? 'module.js' : 'assets/[name]-[hash].js'),
      },
    },
  },
});
