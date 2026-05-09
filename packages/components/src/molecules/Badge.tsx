import React from 'react'

export type BadgeProps = {
  children?: React.ReactNode
  color?: 'default' | 'success' | 'danger'
}

export const Badge: React.FC<BadgeProps> = ({ children, color = 'default' }) => {
  const base = 'inline-flex items-center px-2 py-0.5 text-xs rounded'
  const bg = color === 'success' ? 'bg-green-100 text-green-800' : color === 'danger' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
  return <span className={`${base} ${bg}`}>{children}</span>
}

export default Badge
