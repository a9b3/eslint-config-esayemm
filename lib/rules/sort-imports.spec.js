'use strict';

const expect = require('expect')
const rule = require('./sort-imports.js')
const {
  RuleTester,
  Linter,
} = require('eslint')

const linter = new Linter()
const ruleTester = new RuleTester({ parserOptions: { sourceType: 'module' } })
ruleTester.run('sort-imports', rule, {
  valid: [
    {
      code: [
        `import a from 'a'`,
        `import b from 'b'`,
        `import c from 'c'`,
      ].join('\n'),
    },
    {
      code: [
        `import b from 'b'`,
        `import c from 'c'`,
        ``,
        `import a from 'a'`,
      ].join('\n'),
    },
  ],
  invalid: [
    {
      code: [
        `import c from 'c'`,
        `import a from 'a'`,
        `import b from 'b'`,
      ].join('\n'),
      errors: [{message: 'import statements should be sorted'}],
    },
  ],
})

describe('sort-imports fix', () => {
  it('ok', () => {
    const before = [
      `import c from 'c'`,
      `import a from 'a'`,
      `import b from 'b'`,
    ].join('\n')
    const expectedResult = [
      `import a from 'a'`,
      `import b from 'b'`,
      `import c from 'c'`,
    ].join('\n')

    const { output } = linter.verifyAndFix(before, {
      parserOptions: { sourceType: 'module' },
      rules: { rule },
    })
    expect(output).toEqual(expectedResult)
  })
})
