import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildOptions } from './types/types';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: buildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;
  return {
    // можно задавать динамически
    mode,
    // стартовая точка приложения, главный ее файл
    entry: paths.entry,
    // настройка куда и как будет собираться приложение
    output: {
      // [name] используется для хеширования
      // [contenthash] хеширует итоговый файл приложения, если контент файлы изменился
      filename: '[name].[contenthash].js',
      path: paths.build,
      // для отчистки папки с бандлом от неиспользуемых файлов
      clean: true,
    },
    // массив для подключения плагинов, которые будут использовать в проекте
    plugins: buildPlugins(options),
    module: {
      // настройка для конфигурации лоадеров
      // настройки для конфигурации обработки файлов, которые выходят за рамки javaScript
      rules: buildLoaders(options),
    },
    // настройка, которая указывает, для каких файлов не нужно указывать расширение при импорте
    resolve: buildResolvers(options),
    // для отслеживания бэктрека ошибок
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
