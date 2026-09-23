import { defineConfig } from 'vite';
import { resolve } from 'node:path';

/**
 * One ES-module entry: React + the upstream Agentation toolbar + the TYPO3
 * glue, rolled into one hashed file in Resources/Public/Vite/assets/. The
 * host page needs no React. PHP finds the file through manifest.json
 * (Classes/Service/ViteAssetResolver.php).
 *
 * The System > Agentation backend module is not built: its scripts in
 * Resources/Public/JavaScript/ are native ES modules from the TYPO3 import
 * map. The toolbar compiles in their shared storage.js.
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
    chunkSizeWarningLimit: 900,
    manifest: 'manifest.json',
    outDir: resolve(process.cwd(), 'Resources/Public/Vite'),
    emptyOutDir: true,
    target: 'es2022',
    rolldownOptions: {
      input: {
        agentation: resolve(process.cwd(), 'Build/Sources/agentation.js'),
      },
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
});
