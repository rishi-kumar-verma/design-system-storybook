import React from 'react'

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>

export const Checkbox: React.FC<CheckboxProps> = ({ className = '', ...rest }) => {
  return <input type="checkbox" className={`h-4 w-4 text-sky-600 rounded ${className}`} {...rest} />
}

export default Checkbox
