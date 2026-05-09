import React from 'react'

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>

export const Select: React.FC<SelectProps> = ({ className = '', children, ...rest }) => {
  const base = 'px-2 py-1 border rounded'
  return (
    <select className={`${base} ${className}`} {...rest}>
      {children}
    </select>
  )
}

export default Select
