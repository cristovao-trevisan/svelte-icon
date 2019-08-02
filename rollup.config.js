import { terser } from 'rollup-plugin-terser'
import { string } from 'rollup-plugin-string'
import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'example/main.js',
  output: {
    file: 'docs/bundle.js',
    name: 'bundle.js',
    format: 'iife',
  },
  plugins: [
    resolve(),
    string({
      include: 'example/img/**/*.svg',
    }),
    svelte({

      css: stylesheet => {
        stylesheet.write('docs/bundle.css', false)
      },
    }),
    terser(),
  ],
  watch: {
    clearScreen: false,
  },
}