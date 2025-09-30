// webpack.renderer.config.ts

import type { Configuration } from 'webpack';
import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  test: /\.tsx?$/,
  exclude: /(node_modules|\.webpack)/,
  use: {
    loader: 'ts-loader',
    options: {
      transpileOnly: true,
    },
  },
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
  // 👇 AÑADIMOS ESTA SECCIÓN PARA CORREGIR EL ERROR
  node: {
    __dirname: false,
  },
};