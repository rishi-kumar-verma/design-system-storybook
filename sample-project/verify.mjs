try {
  const comps = await import('@freeformation/ds-components')
  const tokens = await import('@freeformation/ds-tokens')
  console.log('components exports:', Object.keys(comps))
  console.log('tokens exports:', Object.keys(tokens))
} catch (err) {
  console.error('Failed to import packages. Make sure dependencies are installed:')
  console.error('  pnpm add ../freeformation-ds-components-0.2.0.tgz ../freeformation-ds-tokens-0.2.0.tgz')
  console.error(err)
}
