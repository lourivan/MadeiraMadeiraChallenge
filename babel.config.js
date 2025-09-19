module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'module-resolver',
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: './src',
            rootPathPrefix: '~/',
          },
          {
            rootPathSuffix: './assets',
            rootPathPrefix: 'assets/',
          },
        ],
      },
    ],
    [
      'module:react-native-dotenv', {
        'moduleName': '@env',
        'path': '.env',
        'blacklist': null,
        'whitelist': null,
        'safe': false,
        'allowUndefined': true
      }]
  ],
}
