module.exports = {
  rules: {
    'jsx-needs-i18n': require('./lib/rules/jsx-needs-i18n')
  },
  configs: {
    recommended: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        'jsx-needs-i18n': 1
      }
    }
  }
};
