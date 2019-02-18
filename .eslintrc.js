module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'airbnb',
  ],
  'rules': {
    "react/prop-types": 0
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  }
}
