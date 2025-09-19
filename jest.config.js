module.exports = {
   verbose: false,
  preset: 'react-native',
  roots: ['<rootDir>/src'],
  transformIgnorePatterns: [
    "node_modules/(?!(@react-native|react-native|@react-navigation)/)"
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native" +
      "|@react-native" +
      "|react-clone-referenced-element" +
      "|@react-navigation" +
      ")/)",
  ],
}
