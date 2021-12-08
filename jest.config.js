module.exports = {
  moduleFileExtensions: [
    'js',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  testPathIgnorePatterns: ['/node_modules', '/helpers/'],
  coveragePathIgnorePatterns: ['/node_modules', '/helpers/'],
  collectCoverage: true,
}
