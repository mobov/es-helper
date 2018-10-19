module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    impliedStrict: true,
    sourceType: 'module', //指定来源的类型，有两种”script”或”module”
    parser: 'babel-eslint',
  },
  extends: [
    'airbnb',
  ],
  env: {
    'browser': true,
    'node': true,
    'commonjs': true
  },
  rules: {
    'import/no-unresolved': false,
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'interface-name': false,
    'ordered-imports': false,
    'object-literal-sort-keys': false,
    'no-consecutive-blank-lines': false,
    'no-namespace': false,
    'no-param-reassign': 0,
    'arrow-parens': 0,
    'linebreak-style': 0,
    'semi': ['error', 'never'],
    'no-underscore-dangle': 0,
    'no-restricted-imports': 0,
    'prefer-destructuring': ['error', {'object': true, 'array': false}],
    'prefer-promise-reject-errors': 0,
    'func-names': 0,
    'no-console': 0,
    'no-prototype-builtins': 0,
    'no-return-assign': 0,
  }
}
