import path from "path";
import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {buildOptions, envOptions} from "./config/build/types/types";

export default (env: envOptions) => {
    const mode = env.mode || 'development'
    const isDev = mode === 'development'

    const webpackOptions: buildOptions = {
        mode: mode,
        paths: {
            entry: path.resolve(__dirname, "src", "index.tsx"),
            build: path.resolve(__dirname, "build"),
            html: path.resolve(__dirname, "public", "index.html")
        },
        isDev: isDev,
        port: env.port
    }

    const config: webpack.Configuration = buildWebpackConfig(webpackOptions);

    return config;
};