import path from "path";
import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {buildOptions} from "./config/build/types/types";

const mode = 'development'
const isDev = mode === 'development'

const webpackOptions: buildOptions = {
    mode: 'development',
    paths: {
        entry: path.resolve(__dirname, "src", "index.ts"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html")
    },
    isDev: isDev,
    port: 3000
}



const config: webpack.Configuration = buildWebpackConfig(webpackOptions);

export default config;