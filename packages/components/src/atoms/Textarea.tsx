import React from 'react'

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea: React.FC<TextareaProps> = ({ className = '', ...rest }) => {
  const base = 'px-2 py-1 border rounded min-h-[80px] w-full'
  return <textarea className={`${base} ${className}`} {...rest} />
}

export default Textarea
