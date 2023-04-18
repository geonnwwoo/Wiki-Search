# Vue File Template

## vite.config.js

```
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path=require('path');

export default defineConfig({
  base: path.resolve(__dirname, './dist'),
  plugins: [vue()]
});
```

## package.json

```
{
  "name": "library",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.2.47"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.1.0",
    "vite": "^4.2.0"
  }
}

```


## index.html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```


## src/main.js

```
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```


## src/App.vue

```
<template>

</template>


<script>

</script>


<style>

</style>
```

###### You can also put components inside of the components folder inside src

## Creating the dist folder:

```
npm run build
```