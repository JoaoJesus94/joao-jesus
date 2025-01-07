import { cx } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

export function CopyText({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cx('text-[#3A4B5F] dark:text-[#B3B3B3] leading-7', className)} {...props}>
      {children}
    </p>
  )
}
