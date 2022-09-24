import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { buildOptions } from './types/types';

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

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // для создания отдельного css-файла в сборке
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            // делает уникальные хешовые классы только для модульных scss-файлов
            auto: (path: string) => Boolean(path.includes('.module.')),
            localIdentName: options.isDev
              ? '[path][name]__[local]--[hash:base64:5]' // определяет название классов вида .src-components-counter-Counter-module__number--_yD6w
              : '[hash:base64:8]', // генерирует хеш для класса
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  // порядок лоадеров важен для вебпака!
  return [
    typescriptLoader,
    cssLoader,
    svgLoader,
    fileLoader,
  ];
};
