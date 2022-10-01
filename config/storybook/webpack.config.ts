import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { buildPaths } from '../build/types/types';
import { styleLoader } from '../build/loaders/styleLoader';
import { buildSVGLoader } from '../build/loaders/buildSVGLoader';

export default async ({ config }: { config: webpack.Configuration }) => {
  const paths: buildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module.rules.push(buildSVGLoader());
  config.module.rules.push(styleLoader(true));
  config.resolve.extensions.push('.tsx', '.ts');
  config.resolve.modules.push(paths.src);

  return config;
};
