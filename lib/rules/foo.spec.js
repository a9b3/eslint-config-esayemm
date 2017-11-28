'use strict';

const rule = require('./foo.js')
const RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester()
ruleTester.run('foo', rule, {
  valid: [
    {
      code: 'var foo = true',
      options: [{allowFoo: true}]
    },
  ],
  invalid: [
    {
      code: 'var bar = true',
      errors: [{message: 'unexpected invalid'}],
    },
  ],
})
