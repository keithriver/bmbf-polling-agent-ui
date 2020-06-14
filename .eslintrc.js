module.exports = {
  env: { es6: true, node: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    debugLevel: true,
  },
  plugins: [
    "standard",
    "unicorn",
    "@typescript-eslint",
    "import",
    "react",
    "prettier",
  ],
  extends: [
    "eslint:recommended",
    "standard",
    "airbnb-base",
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "prettier",
    "prettier/standard",
    "prettier/unicorn",
    "prettier/@typescript-eslint",
  ],
  settings: {
    "import/extensions": [".ts", ".tsx", ".js"],
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "prettier/prettier": "error",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        extendDefaultReplacements: false,
        replacements: { str: { output: true, value: true } },
      },
    ],
    "import/prefer-default-export": 0,
    "@typescript-eslint/explicit-function-return-type": [
      "off",
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": ["error"],
    "class-methods-use-this": "off",
    "unicorn/no-null": "off",
    "max-classes-per-file": "off",
    "no-underscore-dangle": "off",
    "consistent-return": "off",
  },
  overrides: [
    {
      files: [
        "**/*.spec.js",
        "**/*.spec.ts",
        "**/*.spec.tsx",
        "**/*.mock.ts",
        "./jest.setup.ts",
        "./src/setupTests.ts",
      ],
      plugins: ["jest"],
      env: { jest: true },
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: false,
          },
        ],
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
};
