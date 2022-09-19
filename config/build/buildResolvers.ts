import webpack from "webpack";
import {buildOptions} from "./types/types";

export function buildResolvers (options: buildOptions): webpack.ResolveOptions {
    // настройка, которая указывает, для каких файлов не нужно указывать расширение при импорте
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules']
    }
}