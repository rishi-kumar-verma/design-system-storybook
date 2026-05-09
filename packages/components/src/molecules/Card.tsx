import React from 'react'

export type CardProps = {
  title?: React.ReactNode
  children?: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      {title && <div className="font-semibold mb-2">{title}</div>}
      <div>{children}</div>
    </div>
  )
}

export default Card
