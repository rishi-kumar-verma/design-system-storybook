import React from 'react'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputProps> = ({ className = '', ...rest }) => {
  const base = 'px-2 py-1 border rounded'
  return <input className={`${base} ${className}`} {...rest} />
}

export default Input
