import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {buildOptions} from "./types/types";

export function buildPlugins ({ paths }: buildOptions): webpack.WebpackPluginInstance[] {
    // webpack.WebpackPluginInstance - специальный тип для плагина вебпака
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        // плагин для показа прогресса сборки приложения
        new webpack.ProgressPlugin()
    ]
}