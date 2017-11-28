'use strict';

const expect = require('expect')
const rule = require('./align-imports.js')
const {
  RuleTester,
  Linter,
} = require('eslint')

const linter = new Linter()
const ruleTester = new RuleTester({ parserOptions: { sourceType: 'module' } })
ruleTester.run('align-imports', rule, {
  valid: [
    {
      code: [
        `import foo from 'foo'`,
        `import b   from 'b'`,
        `import {`,
        `  zed,`,
        `}          from 'c'`,
      ].join('\n'),
    },
  ],
  invalid: [
    {
      code: [
        `import foo from 'foo'`,
        `import b from 'b'`,
      ].join('\n'),
      errors: [{message: 'import statements should be aligned'}],
    },
    {
      code: [
        `import b from 'b'`,
        `import {`,
        `  zed,`,
        `} from 'c'`,
      ].join('\n'),
      errors: [{message: 'import statements should be aligned'}],
    },
  ],
})

describe('align-imports fix', () => {
  it('ok', () => {
    const before = [
      `import b from 'b'`,
      `import {`,
      `  zed,`,
      `} from 'c'`,
    ].join('\n')
    const expectedResult = [
      `import b from 'b'`,
      `import {`,
      `  zed,`,
      `}        from 'c'`,
    ].join('\n')

    const { output } = linter.verifyAndFix(before, {
      parserOptions: { sourceType: 'module' },
      rules: { rule },
    })
    expect(output).toEqual(expectedResult)
  })
})
