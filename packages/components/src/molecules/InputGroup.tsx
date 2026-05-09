import React from 'react'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'

export type InputGroupProps = {
  placeholder?: string
  onSubmit?: (value: string) => void
}

export const InputGroup: React.FC<InputGroupProps> = ({ placeholder = '', onSubmit }) => {
  const [value, setValue] = React.useState('')

  const handle = (e?: React.FormEvent) => {
    e?.preventDefault()
    onSubmit?.(value)
  }

  return (
    <form onSubmit={handle} className="flex items-center gap-2">
      <Input value={value} onChange={(e) => setValue((e.target as HTMLInputElement).value)} placeholder={placeholder} />
      <Button type="submit">Go</Button>
    </form>
  )
}

export default InputGroup
