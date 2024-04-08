const config = require('./tsconfig.json');

const {baseUrl, paths} = config.compilerOptions;

const getAliases = () => {
  return Object.entries(paths).reduce((aliases, alias) => {
    const key = alias[0].replace('/*', '');
    const value = baseUrl + alias[1][0].replace('*', '');
    return {
      ...aliases,
      [key]: value,
    };
  });
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-transform-export-namespace-from',
    [
      'module-resolver',
      {
        extensions: [
          '.ios.tsx',
          '.android.tsx',
          '.js',
          '.ts',
          '.jsx',
          '.tsx',
          '.json',
        ],
        alias: getAliases(),
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
