import { HTMLAttributes } from 'react'

export function Card({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-card bg-paper-raised ring-1 ring-line p-5 ${className}`}
      {...props}
    />
  )
}

export function CardTitle({ className = '', ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={`font-display text-title text-ink ${className}`} {...props} />
}
