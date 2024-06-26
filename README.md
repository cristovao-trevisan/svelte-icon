# Svelte-Icon

[![npm version](https://badge.fury.io/js/svelte-icon.svg)](https://badge.fury.io/js/svelte-icon)

Load, resize and recolor svg icons (or images) in svelte.

If you want to use a svg icon package (like [Zondicons](https://www.zondicons.com/) and [Eva Icons](https://akveo.github.io/eva-icons)), this is the library for you.

> Typescript ready!

## Installation
```sh
npm install --save-dev svelte-icon
```

## Examples

[DEMO](https://cristovao-trevisan.github.io/svelte-icon/)

```html
<script>
  import Icon from 'svelte-icon'
  import menu from './img/zondicons/menu.svg'
  import airplane from './img/zondicons/airplane.svg'
</script>

<style>
  .orange { color: orange; }
</style>

<Icon data={menu} />
<Icon data={menu} size="80px" />
<Icon data={menu} color="red" />
<Icon data={airplane} fill="blue" stroke="black" />
<div class="item orange"> <Icon data={menu} /> </div>
<Icon data={menu} class="inline" />  <!-- you can pass class (or anything else) using $$restProps -->
```

## Setup

### SvelteKit
Simply import the svg file as a raw string using vite's raw import, eg.:

```html
<script>
  import Icon from 'svelte-icon/Icon.svelte';
  import logo from '$lib/img/logo.svg?raw';
</script>

<Icon data={logo} size="40px" stroke=white />
```

### Rollup
If using rollup, must be used together with [rollup-plugin-string](https://github.com/TrySound/rollup-plugin-string).

```sh
npm i -D rollup-plugin-string
```

```js
// rollup.config.js
// ...
import { string } from 'rollup-plugin-string'

export default {
  // ...
  plugins: [
    resolve(),
    string({
      include: 'src/img/**/*.svg',
    }),
    // ...
  },
}
```

### Webpack
For webpack, use with [raw-loader](https://github.com/webpack-contrib/raw-loader),

```js
// webpack.config.js
// ...
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /src\/img\/.*svg$/i,
        use: 'raw-loader',
      },
      // ...
    ]
  },
}
```

### Sapper
If your rollup.config.js is using the `url` plugin (modern sapper template), you need to disable it for icons used by this package (processed by the string plugin actually), using the following option:
```js
      url({
        exclude: 'src/img/**/*.svg', // <- ignore files being processed by rollup-plugin-string
	sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
        \\...
```
> You need to add this to both client and server configuration

Checkout this [example config](./config/rollup.config.js) for a complete example.

## Options

```ts
interface SvelteIconProps {
  data: string
  viewBox?: string
  title?: string // will add a <title>{title}</title> inside your svg for a11y purposes

  size?: string
  width?: string
  height?: string

  color?: string
  stroke?: string
  fill?: string

  [key: string]: unknown // $$restProps
}
```
