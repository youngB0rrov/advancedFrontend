import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { buildOptions } from './types/types';
import { styleLoader } from './loaders/styleLoader';
import { buildSVGLoader } from './loaders/buildSVGLoader';

export const buildLoaders = (options: buildOptions): webpack.RuleSetRule[] => {
  // webpack.RuleSetRule - тип для правила в вебпака

  // Если не используем typeScript - используем babel-loader
  // babel-loader перегоняет js из одной версии в другую
  const typescriptLoader = {
    // регулярка, определяющая, какие файлы пропускать через лоадеры
    test: /\.tsx?$/,
    // лоадер для обработки данных файлов
    use: 'ts-loader',
    // папка, которую не надо обрабатывать лоадером для ts
    exclude: /node_modules/,
  };

  const svgLoader = buildSVGLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  const cssLoader = styleLoader(options.isDev);

  // порядок лоадеров важен для вебпака!
  return [
    babelLoader,
    typescriptLoader,
    cssLoader,
    svgLoader,
    fileLoader,
  ];
};
