import React from 'react'
import { Form } from '@freeformation/ds-components'

const meta = {
  title: 'Organisms/Form',
  component: Form,
}

export default meta

export const Default = {
  args: {
    onSubmit: (e) => {
      e.preventDefault()
      // eslint-disable-next-line no-console
      console.log('submitted')
    },
  },
}
