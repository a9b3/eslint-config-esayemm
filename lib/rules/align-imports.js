'use strict'

module.exports = {
  meta: {
    fixable: 'code',
  },
  create: context => {
    let stack

    return {
      Program: node => {
        const importNodes = node.body.filter(n => n.type === 'ImportDeclaration')
        console.log(`**************`)
        console.log(`node`, importNodes)
        console.log(`**************`)
      },
    }
  },
}
