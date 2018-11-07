module.exports = {
  preset: "jest-preset-angular",
  roots: ['src'],
  setupTestFrameworkScriptFile: "./setup-jest.ts",
  "transform": {
    "^.+\\.(ts|html)$": "./node_modules/jest-preset-angular/preprocessor.js",
    "^.+\\.js$": "babel-jest"
  },
  "transformIgnorePatterns": [
    "node_modules/(?!(jest-test))"
  ],
  "globals": {
    "ts-jest": {
      "tsConfigFile": "./tsconfig.spec.json",
      "useBabelrc": true
    },
    "__TRANSFORM_HTML__": true
  }
};
