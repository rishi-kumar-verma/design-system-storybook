import React from 'react'

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  children?: React.ReactNode
}

export const Label: React.FC<LabelProps> = ({ children, className = '', ...rest }) => {
  return (
    <label className={`block text-sm font-medium ${className}`} {...rest}>
      {children}
    </label>
  )
}

export default Label
