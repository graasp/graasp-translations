import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts()],
  build: {
    outDir: 'cjs',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'translations',
      formats: ['cjs'],
      fileName: 'index',
    },
  },
});
