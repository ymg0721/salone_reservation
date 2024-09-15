const process = require('node:process')
const antfu = require('@antfu/eslint-config').default

module.exports = antfu(
  {
    vue: true,
    typescript: true,
    ignores: ['src/api/**/*.ts', '/src/api/**/*.ts', '*.yml', '**/*.yml/**'],
  },
  {
    files: ['**/*.json'],
    rules: {
      'no-unused-expressions': 'off',
    },
  },
  {
    rules: {
      'antfu/top-level-function': 'off',
      'n/prefer-global/process': 'off',
      'vue/multi-word-component-names': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'vue/component-tags-order': [
        'error',
        {
          order: ['route', ['template', 'script'], 'style'],
        },
      ],
    },
  },
)
