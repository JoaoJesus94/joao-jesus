'use client'

import { AnchorHTMLAttributes, RefAttributes } from 'react'
import { cva, cx, VariantProps } from 'class-variance-authority'
import { motion } from 'motion/react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

const linkCva = cva('font-heading font-medium rounded-sm', {
  variants: {
    variant: {
      button:
        'text-white dark:text-background px-9 py-3 w-max gradient-button dark:gradient-button-dark cursor-pointer',
    },
  },
})

interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps>,
    NextLinkProps,
    RefAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkCva> {}

function getAnimationScale(variant: LinkProps['variant']) {
  if (variant === 'button') return 1.1
  return 1.2
}

export function Link({ href, children, variant, className, target, rel, ...props }: LinkProps) {
  const scaling = getAnimationScale(variant)

  return (
    <NextLink href={href} legacyBehavior passHref {...props}>
      <motion.a
        whileHover={{ scale: scaling }}
        whileFocus={{ scale: scaling }}
        className={cx(linkCva({ variant }), className)}
        target={target}
        rel={rel}
      >
        {children}
      </motion.a>
    </NextLink>
  )
}
