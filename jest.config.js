const jestConfig = {
  moduleNameMapper: {
    '\\.(gif|jpg|jpeg|png)$': '<rootDir>/src/setup/jest/image.transformer.tsx'
  },
  setupFilesAfterEnv: ['./src/setup/jest/jest.setup.tsx'],
  testEnvironment: 'jsdom'
};

module.exports = jestConfig;
