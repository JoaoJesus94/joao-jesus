import { HTMLAttributes, ReactNode } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

interface ITile extends HTMLAttributes<HTMLDivElement> {
  iconSrc: string
  alt: string
  size?: number
}

export function Tile({ iconSrc, size = 24, alt, children, className, ...props }: ITile) {
  return (
    <div
      className={clsx('flex gap-2 w-max px-6 py-3 rounded-sm backdrop-blur-sm bg-tile', className)}
      {...props}
    >
      <Image src={iconSrc} width={size} height={size} alt={alt} />
      <span>{children}</span>
    </div>
  )
}
