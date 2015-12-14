/**
 * @fileoverview Prevent using unwrapped literals in a React component definition
 * @author Caleb morris
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/jsx-needs-il8n');
var RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('jsx-needs-il8n', rule, {

  valid: [
    {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    return (',
        '      <div>',
        '        {\'asdjfl\'}',
        '      </div>',
        '    );',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint'
    }, {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    return (<div>{\'test\'}</div>);',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint'
    }, {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    const bar = (<div>{\'hello\'}</div>);',
        '    return bar;',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint'
    }, {
      code: [
        'var Hello = React.createClass({',
        '  foo: (<div>{\'hello\'}</div>),',
        '  render() {',
        '    return this.foo;',
        '  },',
        '});'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint'
    }, {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    return (',
        '      <div>',
        '        {\'asdjfl\'}',
        '        {\'test\'}',
        '        {\'foo\'}',
        '      </div>',
        '    );',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint'
    }, {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    return (',
        '      <div>',
        '      </div>',
        '    );',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint'
    }, {
      code: [
        'var foo = require(\'foo\');'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint'
    }, {
      code: [
        '<Foo bar=\'test\'>',
        '  {\'blarg\'}',
        '</Foo>'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint'
    },

    // attributes
    {
      code: [
        '<Foo placeholder={\'foo\'}/>'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint'
    },
    {
      code: [
        '<Foo title={\'foo\'}/>'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint'
    },
    {
      code: [
        '<Foo alt={\'foo\'}/>'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint'
    },

    // ignore digits, symbols
    {
      code: [
        '<Foo>12-34</Foo>'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint'
    },
  ],

  invalid: [
    {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    return (<div>test</div>);',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint',
      errors: [{message: 'Missing translation function around string literal'}]
    }, {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    const foo = (<div>test</div>);',
        '    return foo;',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint',
      errors: [{message: 'Missing translation function around string literal'}]
    }, {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    const varObjectTest = { testKey : (<div>test</div>) };',
        '    return varObjectTest.testKey;',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint',
      errors: [{message: 'Missing translation function around string literal'}]
    }, {
      code: [
        'var Hello = React.createClass({',
        '  foo: (<div>hello</div>),',
        '  render() {',
        '    return this.foo;',
        '  },',
        '});'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint',
      errors: [{message: 'Missing translation function around string literal'}]
    }, {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    return (',
        '      <div>',
        '        asdjfl',
        '      </div>',
        '    );',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint',
      errors: [{message: 'Missing translation function around string literal'}]
    }, {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    return (',
        '      <div>',
        '        asdjfl',
        '        test',
        '        foo',
        '      </div>',
        '    );',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint',
      errors: [{message: 'Missing translation function around string literal'}]
    }, {
      code: [
        'class Comp1 extends Component {',
        '  render() {',
        '    return (',
        '      <div>',
        '        {\'asdjfl\'}',
        '        test',
        '        {\'foo\'}',
        '      </div>',
        '    );',
        '  }',
        '}'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint',
      errors: [{message: 'Missing translation function around string literal'}]
    },

    // attributes
    {
      code: [
        '<Foo placeholder="foo"/>'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint',
      errors: [{message: 'Missing translation function around string literal'}]
    },
    {
      code: [
        '<Foo title="foo"/>'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint',
      errors: [{message: 'Missing translation function around string literal'}]
    },
    {
      code: [
        '<Foo alt="foo"/>'
      ].join('\n'),
      args: [1],
      parser: 'babel-eslint',
      errors: [{message: 'Missing translation function around string literal'}]
    }
  ]
});
