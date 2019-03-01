var argv = require('minimist')(process.argv.slice(2)),
  shouldMinify = argv['production'],
  progress = require('rollup-plugin-progress'),
  minify = require('rollup-plugin-babel-minify'),
  closureCompiler = require('@ampproject/rollup-plugin-closure-compiler');

const plugins = [
  progress({
    clearLine: false
  })
];

if (shouldMinify) {
  plugins.push(
    minify({
      comments: false,
      banner: false,
      sourceMap: false
    }),
    closureCompiler()
  );
}

export default {
  input: './src/simple-equal-heights.js',
  output: {
    file: shouldMinify
      ? 'build/simple-equal-heights.min.js'
      : 'build/simple-equal-heights.js',
    format: 'iife'
  },
  plugins
};
