import React from 'react'
import { Select } from '@freeformation/ds-components'

const meta = {
  title: 'Atoms/Select',
  component: Select,
}

export default meta

export const Default = {
  args: {
    children: (
      <>
        <option value="">Choose</option>
        <option value="1">One</option>
        <option value="2">Two</option>
      </>
    ),
  },
}
