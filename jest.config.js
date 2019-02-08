const pathIgnorePatterns = [
  '<rootDir>/node_modules/',
  '<rootDir>/build/',
  '<rootDir>/coverage/',
  '.*\\.e2e-test.ts$',
]

module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/*.(test|e2e-test).(j|t)s?(x)'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
  moduleNameMapper: {
    '@root/(.*)': '<rootDir>/src/$1',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  testPathIgnorePatterns: pathIgnorePatterns,
  watchPathIgnorePatterns: pathIgnorePatterns,
}
