module.exports = {
  'env': {
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    'indent': [
        'error',
        2,  { 'SwitchCase': 1, 'MemberExpression': 'off' }
    ],
    'quotes': [
        'error',
        'single'
    ],
    'semi': [
        'error',
        'always'
    ],
    'no-trailing-spaces': [
      'error'
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'comma',
          'requireLast': false
        },
        'singleline': {
          'delimiter': 'comma',
          'requireLast': false
        },
        'overrides': {
          'interface': {
            'multiline': {
              'delimiter': 'semi',
              'requireLast': true
            }
          }
        }
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        "selector": "default",
        "format": ["camelCase"]
      },
      {
        "selector": "variable",
        "format": ["camelCase", "snake_case"]
      },
      {
        "selector": "parameter",
        "format": ["camelCase"],
      },
      {
        "selector": "enumMember",
        "format": ["PascalCase"],
      },
      {
        'selector': 'typeLike',
        'format': ['PascalCase']
      },
      {
        'selector': 'property',
        'format': ['camelCase', 'snake_case', 'PascalCase']
      }
    ]
  }
};
