import React from 'react'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'

export type FormProps = {
  onSubmit?: (e: React.FormEvent) => void
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-2">
      <div>
        <label className="block text-sm">Name</label>
        <Input placeholder="Your name" />
      </div>
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}

export default Form
