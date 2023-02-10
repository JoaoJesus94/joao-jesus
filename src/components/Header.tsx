import { Link } from '@/components/Link'

import { ThemeToggle } from '@/components/ThemeToggle'

export function Header() {
  return (
    <header className='pb-10 flex justify-end sm:justify-between items-center'>
      <nav className='hidden sm:flex gap-14'>
        <Link href='/#'>Home</Link>
        <Link href='/#'>Skills</Link>
        <Link href='/#'>Projects</Link>
        <Link href='/#'>Contact</Link>
      </nav>

      <ThemeToggle />
    </header>
  )
}
