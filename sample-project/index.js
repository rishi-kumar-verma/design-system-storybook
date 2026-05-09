// Simple verification script that requires the installed packages by name and logs exported symbols.
try {
  const comps = require('@freeformation/ds-components')
  const tokens = require('@freeformation/ds-tokens')
  console.log('components exports:', Object.keys(comps))
  console.log('tokens exports:', Object.keys(tokens))
} catch (err) {
  console.error('Error loading packages. First run:')
  console.error('  cd sample-project')
  console.error('  pnpm add ../freeformation-ds-components-0.2.0.tgz ../freeformation-ds-tokens-0.2.0.tgz')
  console.error(err)
}
