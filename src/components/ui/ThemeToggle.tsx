'use client'

import { FaMoon, FaSun } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useContext } from 'react'

import { ThemeContext } from '@/context/ThemeContextProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const isDarkTheme = theme === 'dark'

  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileFocus={{ scale: 1.2 }}
      aria-label={`Switch theme to ${isDarkTheme ? 'light' : 'dark'}`}
      className='relative w-6 h-6 rounded-full'
      onClick={toggleTheme}
    >
      <motion.div
        animate={{ opacity: isDarkTheme ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <FaSun size={24} className='absolute top-0 right-0 text-transparent dark:text-white' />
      </motion.div>
      <motion.div
        animate={{ opacity: isDarkTheme ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <FaMoon size={24} className='absolute top-0 right-0 text-black dark:text-transparent' />
      </motion.div>
    </motion.button>
  )
}
