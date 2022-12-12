module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest-dom"],
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb-base",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "jest/valid-title": "off",
    "no-console": "off",
    "no-alert": "off",
    "no-restricted-globals": "off",
    "no-plusplus": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "no-restricted-syntax": ["off", "ForOfStatement"],
  },
  overrides: [
    {
      files: ["webpack.*.js"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "import/extensions": "off",
      },
    },
  ],
};
