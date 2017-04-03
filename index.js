module.exports = {
  rules: {
    'jsx-needs-i18n': require('./lib/rules/jsx-needs-i18n')
  },
  configs: {
    recommended: {
      plugins: [
        "getsentry"
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        'getsentry/jsx-needs-i18n': 1
      }
    }
  }
};
