'use client'

import NextLink, { LinkProps } from 'next/link'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const variantsStyles = {
  button:
    'text-white dark:text-background px-9 py-3 w-max gradient-button dark:gradient-button-dark cursor-pointer',
}

type IButton = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    variant?: keyof typeof variantsStyles
  }

export function Link({ href, children, variant, className, ...props }: IButton) {
  const selectedVariant = variant ? variantsStyles[variant] : ''

  return (
    <NextLink href={href} legacyBehavior passHref {...props}>
      <motion.a
        whileHover={{ scale: variant ? 1.1 : 1.2 }}
        whileFocus={{ scale: variant ? 1.1 : 1.2 }}
        className={clsx('font-heading font-medium rounded-sm', selectedVariant, className)}
      >
        {children}
      </motion.a>
    </NextLink>
  )
}
