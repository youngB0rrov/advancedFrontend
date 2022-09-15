import webpack from "webpack";

export function buildResolvers (): webpack.ResolveOptions {
    // настройка, которая указывает, для каких файлов не нужно указывать расширение при импорте
    return {
        extensions: ['.tsx', '.ts', '.js']
    }
}