/*
 * @fileoverview Modified fork of jsx-no-literals to only consider literals w/
 *               letters, plus changed warning message string.
 *               See: https://github.com/yannickcr/eslint-plugin-react/blob/master/lib/rules/jsx-no-literals.js
 * @author Caleb Morris / Ben Vinegar
 */

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {},
        schema: [{
            type: 'string'
        }]
    },

    create: function(context) {

        function reportLiteralNode(node) {
            context.report(node, 'Missing translation function around string literal');
        }

        // default: must have at least one letter; not symbols, numbers
        const testRegExp = context.options[0] ? new RegExp(context.options[0]) : /[A-Za-z]/;

        function testValue(value) {
          return !/^[\s]+$/.test(value) && // ignore whitespace literals
                 testRegExp.test(value);
        }

        // --------------------------------------------------------------------------
        // Public
        // --------------------------------------------------------------------------

        return {

            Literal: function(node) {
                if (testValue(node.value) && node.parent) {
                    // alt or title attribute
                    if (node.parent.type === 'JSXAttribute' && /title|alt|placeholder/.test(node.parent.name.name)) {
                       return void reportLiteralNode(node);
                    }

                    // inside component, e.g. <div>literal</div>
                    if (node.parent.type !== 'JSXAttribute' &&
                       node.parent.type !== 'JSXExpressionContainer' &&
                       node.parent.type.indexOf('JSX') !== -1) {
                       return void reportLiteralNode(node);
                    }
                }
            }

        };
    }
};
