import css from 'rollup-plugin-css-only'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'
import { string } from 'rollup-plugin-string'
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
    svelte(),
    css({ output: 'bundle.css' }),
    terser(),
  ],
  watch: {
    clearScreen: false,
  },
}