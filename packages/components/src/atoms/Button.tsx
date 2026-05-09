import React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...rest }) => {
  const base = 'px-3 py-1 rounded'
  const style = variant === 'primary' ? 'bg-sky-600 text-white' : 'bg-gray-200 text-gray-800'
  return (
    <button className={`${base} ${style}`} {...rest}>
      {children}
    </button>
  )
}

export default Button
