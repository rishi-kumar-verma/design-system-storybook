import React from 'react'
import { Checkbox } from '@freeformation/ds-components'

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
}

export default meta

export const Unchecked = {
  args: {},
}

export const Checked = {
  args: { defaultChecked: true },
}
