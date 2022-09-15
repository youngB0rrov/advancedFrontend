import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {
    // webpack.RuleSetRule - тип для правила в вебпака
    const typescriptLoader = {
        // регулярка, определяющая, какие файлы пропускать через лоадеры
        test: /\.tsx?$/,
        // лоадер для обработки данных файлов
        use: 'ts-loader',
        // папка, которую не надо обрабатывать лоадером для ts
        exclude: /node_modules/,
    }
    // порядок лоадеров важен для вебпака!
    return [
        typescriptLoader
    ]
}