import process from 'node:process'

module.exports = {
  root: true,
  extends: ['@antfu', '@nuxtjs/eslint-config-typescript', 'prettier'],
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
  overrides: [
    {
      files: ['**/*.json'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
}
