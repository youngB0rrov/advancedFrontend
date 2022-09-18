import {buildOptions} from "./types/types";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer (options: buildOptions): DevServerConfiguration {
    const { port } = options;

    return {
        port: port,
        open: true,
        historyApiFallback: true
    }
}