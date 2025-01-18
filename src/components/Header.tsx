import { Link } from '@/components/ui/Link'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export function Header() {
  return (
    <header className='pb-10 flex justify-end sm:justify-between items-center'>
      <nav className='hidden sm:flex gap-14'>
        <Link href='/#'>Home</Link>
        <Link href='/#about-me'>About me</Link>
        <Link href='/#skills'>Skills</Link>
        <Link href='/#projects'>Projects</Link>
        {/* <Link href='/#contact'>Contact</Link> */}
      </nav>
      <ThemeToggle />
    </header>
  )
}
