console.log('[config:eslint] config loaded');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    allowImportExportEverywhere: false,
    codeFrame: false,
    ecmaVersion: 2018,
    errorOnUnknownASTType: true,
    errorOnTypeScriptSyntacticAndSemanticIssues: true,
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'react/react-in-jsx-scope' : 0,
    'class-methods-use-this': 'off',
    'dot-notation': ['error', { 'allowPattern': '^(code)$' }],
    'function-paren-newline': [
      'error',
      'consistent',
    ],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'error',
    'max-len': [
      'error',
      {
        code: 90,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-underscore-dangle': ['error', { 'allow': ['_id', '_headers'] }],
    'quote-props': ['error', 'consistent-as-needed'],
    // 'react/jsx-no-bind': [2, { ignoreRefs: true }],
    // 'react/jsx-no-duplicate-props': 2,
    // 'react/self-closing-comp': 2,
    // 'react/prefer-es6-class': 2,
    // 'react/no-string-refs': 2,
    // 'react/require-render-return': 2,
    // 'react/no-find-dom-node': 2,
    // 'react/no-is-mounted': 2,
    // 'react/jsx-no-comment-textnodes': 2,
    // 'react/jsx-curly-spacing': 2,
    // 'react/jsx-no-undef': 2,
    // 'react/jsx-uses-react': 2,
    // 'react/jsx-uses-vars': 2
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    beforeEach: true,
    afterEach: true,
    describe: true,
    it: true,
    expect: true,
  },
  plugins: [
    '@typescript-eslint',
    'json',
    'react',
    'import'
  ],
  settings: {
    'react': {
      pragma: 'h',
      version: 'detect',
    },
    'import/extensions': ['.js','.jsx','.ts','.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts','.tsx']
    },
    'import/resolver': {
      'typescript': {
        directory: './configs/tsconfig.json'
      }
    }
  },
};
