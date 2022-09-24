import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { buildOptions } from './types/types';

export function buildPlugins({ paths, isDev }: buildOptions): webpack.WebpackPluginInstance[] {
  // webpack.WebpackPluginInstance - специальный тип для плагина вебпака
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    // плагин для показа прогресса сборки приложения
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      // для подгузки асинхронных чанков, которые догружаются асинхронно
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      // плагин для объявления глобальных перменных в проекте
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ];
}
