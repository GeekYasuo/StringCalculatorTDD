// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    testRegex: '.*\\.test\\.ts$',
    transformIgnorePatterns: ['node_modules/(?!(module-to-transform|another-module))'],
  };
  