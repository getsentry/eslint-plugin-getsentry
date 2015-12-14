ESLint-plugin-React
===================

Custom ESLint rules for the [getsentry](//github.com/getsentry/) organization. Used for [Sentry](//github.com/getsentry/sentry) and other projects.

# Installation

```sh
$ npm install eslint-plugin-getsentry
```

# Configuration

Add `plugins` section and specify ESLint-plugin-React as a plugin.

```json
{
  "plugins": [
    "getsentry"
  ]
}
```

If it is not already the case you must also configure `ESLint` to support JSX.

```json
{
  "ecmaFeatures": {
    "jsx": true
  }
}
```

Finally, enable all of the rules that you would like to use.

```json
{
  "rules": {
    "getsentry/jsx-needs-il8n": 1
  }
}
```

# List of supported rules

**jsx-needs-il8n**

Prevent usage of unwrapped string literals in JSX components.

Bad:

```jsx
<div>foo</div>
```

Good:

```jsx
<div>{t('foo')}</div>
```

If you don't want to translate a string, but don't want it to trigger this rule, you can just do:

```jsx
<div>{'foo'}</div>
```

# License

ESLint-plugin-getsentry is licensed under the [Apache 2.0 License](http://www.opensource.org/licenses/mit-license.php).
