import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { buildOptions } from './types/types';

export function buildDevServer(options: buildOptions): DevServerConfiguration {
  const { port } = options;

  return {
    port,
    open: true,
    historyApiFallback: true,
  };
}
