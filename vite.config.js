import { defineConfig } from 'vite';
import { resolve } from 'node:path';

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

/**
 * Self-contained bundle: React + agentation + our glue are rolled into
 * a single ES module. The host TYPO3 page does NOT need React — this
 * bundle ships its own isolated instance.
 *
 * No external peers, no dynamic chunks — one file, hashed, loaded by
 * PageRenderer when the toolbar is enabled.
 */
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
    rollupOptions: {
      input: {
        agentation: resolve(process.cwd(), 'Build/Sources/agentation.js'),
      },
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
