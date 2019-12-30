module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  coverageDirectory: "__tests__/coverage",
  coveragePathIgnorePatterns: ["/node_modules", "/__tests__"],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  displayName: {
    name: "@boilerplate/node-api-koa",
    color: "blue"
  },
  name: "@boilerplate/node-api-koa",
  testEnvironment: "node",
  testMatch: ["**/src/**/*+(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  verbose: true
};
