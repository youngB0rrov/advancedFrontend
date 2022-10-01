import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function styleLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      // для создания отдельного css-файла в сборке
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            // делает уникальные хешовые классы только для модульных scss-файлов
            auto: (path: string) => Boolean(path.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]' // определяет название классов вида .src-components-counter-Counter-module__number--_yD6w
              : '[hash:base64:8]', // генерирует хеш для класса
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };
}
