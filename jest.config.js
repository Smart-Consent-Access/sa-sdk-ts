module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testPathIgnorePatterns: ["/build", "/node_modules/", "/dist"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "node",
  moduleNameMapper: { 
    "^jose/(.*)$": "<rootDir>/node_modules/jose/dist/node/cjs/$1", 
  }, 
};
