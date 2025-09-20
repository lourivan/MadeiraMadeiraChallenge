module.exports = {
  arrowParens: 'avoid',
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  jsxSingleQuote: true,
  tabWidth: 2,
  endOfLine: "lf",
  bracketSpacing: true,
  parser: "typescript",
  "lint-staged": {
      "*.tsx": [
      "organize-imports-cli",
      "prettier --write"
      ]
  },
};
