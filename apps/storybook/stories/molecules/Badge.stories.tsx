import React from 'react'
import { Badge } from '@freeformation/ds-components'

const meta = {
  title: 'Molecules/Badge',
  component: Badge,
}

export default meta

export const Default = {
  args: {
    children: 'New',
  },
}

export const Success = {
  args: {
    children: 'Done',
    color: 'success',
  },
}
