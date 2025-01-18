import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { CopyText } from '@/components/ui/CopyText'
import { Link } from '@/components/ui/Link'
import { Tile } from '@/components/ui/Tile'
import laptopIcon from '@/public/laptopIcon.svg'
import portugalFlagIcon from '@/public/portugalFlag.svg'
import reactIcon from '@/public/react.svg'

export function Intro() {
  return (
    <section className='flex flex-col md:flex-row items-center gap-10 lg:gap-16'>
      <div className='flex flex-col flex-1 gap-6'>
        <div>
          <span className='font-body text-2xl'>Hi there! I&apos;m João Jesus</span>
          <h1 className='font-heading text-4xl leading-tight font-semibold gradient-heading dark:gradient-heading-dark'>
            Frontend Engineer
          </h1>
        </div>
        <CopyText>
          I am a Frontend Engineer with over 5 years of experience in crafting web applications
          using React and TypeScript. I specialize in performance optimization and creating
          responsive user interfaces. Committed to writing clean, maintainable code, I strive to
          deliver seamless user experiences. As an effective communicator, I excel in
          cross-functional teams and am dedicated to continuous growth and learning.
        </CopyText>
        <div className='flex gap-4'>
          <Link href='https://github.com/JoaoJesus94' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={32} />
          </Link>
          <Link
            href='https://www.linkedin.com/in/joaojesus94'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size={32} />
          </Link>
        </div>
        {/* <Link href='#' variant='button'>
          Contact me
        </Link> */}
      </div>

      <div className='flex-1 relative min-w-[270px] sm:min-w-[340px] max-w-[420px]'>
        <Image
          className='animate-slow-bounce'
          src='https://res.cloudinary.com/joaojesus/image/upload/v1676419495/JoaoJesus.dev/computer.png'
          alt='introduction image'
          width={420}
          height={420}
          draggable={false}
        />
        <div className='absolute top-6 xs:top-20 right-0 left-0 flex flex-col gap-8 text-white'>
          <Tile iconSrc={laptopIcon} alt='Laptop icon'>
            Working at{' '}
            <Link
              className='text-blue-400 hover:underline'
              href='https://www.yld.io'
              target='_blank'
              rel='noopener noreferrer'
            >
              YLD
            </Link>
          </Tile>
          <Tile className='self-end' iconSrc={portugalFlagIcon} alt='Portugal flag icon'>
            Based in Portugal
          </Tile>
          <Tile iconSrc={reactIcon} alt='React icon'>
            Specializing in React
          </Tile>
        </div>
      </div>
    </section>
  )
}
