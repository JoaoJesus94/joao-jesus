import { cx } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

interface CopyTextProps extends HTMLAttributes<HTMLParagraphElement> {}

export function CopyText({ children, className, ...props }: CopyTextProps) {
  return (
    <p className={cx('text-[#3A4B5F] dark:text-[#B3B3B3] leading-7', className)} {...props}>
      {children}
    </p>
  )
}
