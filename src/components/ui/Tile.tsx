import { cx } from 'class-variance-authority'
import { HTMLAttributes } from 'react'
import Image from 'next/image'

interface TileProps extends HTMLAttributes<HTMLDivElement> {
  iconSrc: string
  alt: string
  size?: number
}

export function Tile({ iconSrc, size = 24, alt, children, className, ...props }: TileProps) {
  return (
    <div
      className={cx('flex gap-2 w-max px-6 py-3 rounded-sm backdrop-blur-sm bg-tile', className)}
      {...props}
    >
      <Image src={iconSrc} width={size} height={size} alt={alt} />
      <span>{children}</span>
    </div>
  )
}
