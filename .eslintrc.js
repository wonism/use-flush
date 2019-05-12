const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    jsx: true,
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: '.',
    useJSXTextNode: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'babel',
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
      },
      typescript: {},
    },
  },
  globals: {
    '$Diff': true,
  },
  rules: {
    'babel/quotes': [error, 'single'],
    'comma-dangle': [
      error,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'function-paren-newline': [error, 'consistent'],
    'global-require': off,
    'import/no-cycle': error,
    'import/no-deprecated': warn,
    'import/prefer-default-export': off,
    indent: off,
    'jsx-a11y/anchor-is-valid': off,
    'jsx-a11y/click-events-have-key-events': error,
    'jsx-a11y/label-has-associated-control': off,
    'jsx-a11y/label-has-for': off,
    'max-len': [error, 150, { ignoreComments: true }],
    'no-console': warn,
    'no-redeclare': off,
    'no-mixed-operators': off,
    'no-multiple-empty-lines': [error, { max: error, maxEOF: error }],
    'no-implicit-coercion': error,
    'no-shadow': off,
    'no-undef': off,
    'no-underscore-dangle': off,
    'no-unused-vars': [
      warn, {
        args: 'after-used',
        ignoreRestSiblings: false,
        varsIgnorePattern: '^_|^[A-Z]|^[가-힣]',
        argsIgnorePattern: '$',
      },
    ],
    'no-warning-comments': [
      warn,
      {
        terms: ['TODO', 'FIXME', 'XXX', 'BUG', 'NOTE'],
        location: 'anywhere',
      },
    ],
    'object-curly-newline': [error, { consistent: true }],
    'prefer-spread': off,
    'quotes': off,
    'space-infix-ops': off,
    'react/destructuring-assignment': off,
    'react/jsx-filename-extension': [error, { extensions: ['.tsx'] }],
    'react/jsx-no-target-blank': error,
    'react/no-array-index-key': off,
    'react/no-typos': error,
    'react/no-unescaped-entities': off,
    'react/prop-types': off,
    'react/style-prop-object': off,
    'react/react-in-jsx-scope': off,
    '@typescript-eslint/camelcase': warn,
    '@typescript-eslint/explicit-function-return-type': off,
    '@typescript-eslint/explicit-member-accessibility': off,
    '@typescript-eslint/indent': off,
    '@typescript-eslint/no-explicit-any': off,
    '@typescript-eslint/no-unused-vars': off,
  },
  overrides: [{
    files: [
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/*.spec.ts',
      '**/*.spec.tsx',
    ],
    rules: {
      'import/no-extraneous-dependencies': off,
      'max-len': off,
    },
  }],
};
