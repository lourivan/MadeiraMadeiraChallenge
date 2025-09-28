module.exports = {
   verbose: false,
  preset: 'react-native',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/lib/'],
  transformIgnorePatterns: [],
  reporters: [
    'default',
    [
      'jest-sonar',
      { outputDirectory: 'test/coverage/', outputName: 'test-report.xml' },
    ],
  ],
  collectCoverage: true,
  coverageDirectory: 'test/coverage',
  coverageReporters: ['lcov'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.story.tsx',
  ],
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
