import { cx } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  highlight?: string
  text?: string
}

export function Heading({ highlight, text, className, ...props }: HeadingProps) {
  return (
    <h2 className={cx('font-heading text-3xl leading-tight font-semibold', className)} {...props}>
      {highlight && (
        <span className='gradient-heading dark:gradient-heading-dark'>{highlight} </span>
      )}
      {text && <span className='text-black dark:text-white'>{text}</span>}
    </h2>
  )
}
