import Image from 'next/image'

import { CopyText } from '@/components/ui/CopyText'
import { Tile } from '@/components/ui/Tile'
import laptopIcon from '@/public/laptopIcon.svg'
import portugalFlagIcon from '@/public/portugalFlag.svg'
import reactIcon from '@/public/react.svg'
import { Link } from '@/components/ui/Link'

export function Intro() {
  return (
    <section className='flex flex-col md:flex-row items-center gap-10 lg:gap-16'>
      <div className='flex flex-col flex-1 gap-6'>
        <div>
          <span className='font-body text-2xl'>Hello! I&apos;m João Jesus</span>
          <h1 className='font-heading text-4xl leading-tight font-semibold gradient-heading dark:gradient-heading-dark'>
            Frontend Developer
          </h1>
        </div>
        <CopyText>
          While frontend development is my primary interest, I&apos;m also keen to explore the
          backend using Node.js. As a JavaScript enthusiast, I&apos;m always on the lookout for new
          opportunities to refine and expand my skill set.
        </CopyText>
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
              className='text-[#43CBFF] hover:underline'
              href='https://www.xgeeks.io'
              target='_blank'
              rel='noopener noreferrer'
            >
              xgeeks
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
