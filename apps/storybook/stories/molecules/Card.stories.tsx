import React from 'react'
import { Card } from '@freeformation/ds-components'

const meta = {
  title: 'Molecules/Card',
  component: Card,
}

export default meta

export const WithTitle = {
  args: {
    title: 'Card title',
    children: 'Card content',
  },
}
