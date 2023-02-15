import Image from 'next/image'

import { CopyText } from '@/components/ui/CopyText'
import { Tile } from '@/components/ui/Tile'
import laptopIcon from '@/public/laptopIcon.svg'
import portugalFlagIcon from '@/public/portugalFlag.svg'
import reactIcon from '@/public/react.svg'

export function Intro() {
  return (
    <section className='flex flex-col md:flex-row items-center gap-10 lg:gap-16'>
      <div className='flex flex-col flex-1 gap-6'>
        <div>
          <span className='font-body text-2xl'>Hello! I&apos;m João Jesus</span>
          <h1 className='font-heading text-4xl leading-tight font-semibold gradient-heading dark:gradient-heading-dark'>
            Software Engineer
          </h1>
        </div>
        <CopyText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nihil praesentium ex illum
          veniam magni amet animi voluptatum. Magnam reprehenderit magni vitae. Autem tempore itaque
          a velit, et perferendis excepturi! Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
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
            Working at xgeeks
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
