import clsx from 'clsx'
import React, { HTMLAttributes } from 'react'

interface ICopyText extends HTMLAttributes<HTMLParagraphElement> {}

export function CopyText({ children, className, ...props }: ICopyText) {
  return (
    <p className={clsx('text-[#3A4B5F] dark:text-[#B3B3B3] leading-7', className)} {...props}>
      {children}
    </p>
  )
}
