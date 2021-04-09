# Svelte-Icon

[![npm version](https://badge.fury.io/js/svelte-icon.svg)](https://badge.fury.io/js/svelte-icon)

Load, resize and recolor svg icons (or images) in svelte.

If you want to use a svg icon package (like [Zondicons](www.zondicons.com)), this is the library for you.

> Typescript ready!

## Installation
```sh
npm install --save-dev rollup-plugin-string svelte-icon
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

### Rollup
If using rollup, must be used together with [rollup-plugin-string](https://github.com/TrySound/rollup-plugin-string).

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

  size?: string
  width?: string
  height?: string

  color?: string
  stroke?: string
  fill?: string

  [key: string]: unknown // $$restProps
}
```
