module.exports = {
  roots: ["<rootDir>/src"],
  transform: {//Adds support for TypeScript using ts-jest
    "^.+\\.tsx?$": "ts-jest"
  },
  setupFilesAfterEnv: [
    "@testing-library/react/cleanup-after-each",//cleaning up components when using React Testing Library
    "@testing-library/jest-dom/extend-expect"//extended assertions to Jest
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$", //Matches parent folder `__tests__` and filename - should contain `test` or `spec`
  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/lib/",
    "/dist/",
    "*.d.ts"
  ]

};