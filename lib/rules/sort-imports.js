'use strict'

module.exports = {
  meta: {
    fixable: 'code',
  },
  create: context => {
    return {
      Program: node => {
        context.report({
          message: `Not sorted`,
          fix: fixer => {
            const importNodeGroup = node.body
              .filter(n => n.type === 'ImportDeclaration')
              .reduce((arr, n) => {
                const prevNode = arr[arr.length - 1] && arr[arr.length - 1][arr[arr.length - 1].length - 1]
                if (!prevNode) {
                  arr.push([n])
                  return arr
                } else if (n.start - prevNode.end > 1) {
                  arr.push([n])
                  return arr
                }
                arr[arr.length - 1].push(n)
                return arr
              }, [])
            const sortedImportNodeGroup = importNodeGroup.map(g => g.sort((a, b) => {
              return a.source.value > b.source.value
            }))
            fixer.replaceTextRange([0, 10], 'i')
            console.log(`**************`)
            console.log(`node`, sortedImportNodeGroup[0])
            console.log(`**************`)
          }
        })
      },
    }
  },
}
