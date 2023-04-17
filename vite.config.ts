import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

export default defineConfig({
  base: path.resolve(__dirname, './dist'),
  plugins: [vue()],
});
