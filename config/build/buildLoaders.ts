import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {
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
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ]
    }

    // порядок лоадеров важен для вебпака!
    return [
        typescriptLoader,
        cssLoader
    ]
}