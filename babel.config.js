// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
//   plugins: [
//     [
//       require.resolve('babel-plugin-module-resolver'),
//       {
//         cwd: 'babelrc',
//         root: ['./src'],
//         extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
//         alias: {
//           '@assets': './src/assets',
//         },
//       },
//     ],
//     'jest-hoist',
//     ['@babel/plugin-proposal-decorators', {legacy: true}],
//   ],
// };

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@screens': './src/screens',
          '@data': './src/data',
        },
      },
    ],
  ],
};
