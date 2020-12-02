# Svelte-Icon

[![npm version](https://badge.fury.io/js/svelte-icon.svg)](https://badge.fury.io/js/svelte-icon)

Load, resize and recolor svg icons (or images) in svelte.

If you want to use a svg icon package (like [Zondicons](www.zondicons.com)), this is the library for you.

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

## Options

```js
export let data = ''
export let viewBox = '0 0 20 20'

export let size = '20px'
export let width = size
export let height = size

export let color = 'currentColor'
export let stroke = color
export let fill = color
```
