import Image from 'next/image'

import { CopyText } from '@/components/ui/CopyText'
import { Heading } from '@/components/ui/Heading'

export function AboutMe() {
  return (
    <section
      id='about-me'
      className='flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16 scroll-m-8'
    >
      <div className='flex-1 min-w-[270px] sm:min-w-[340px] max-w-[420px]'>
        <Image
          src='https://res.cloudinary.com/joaojesus/image/upload/v1676419495/JoaoJesus.dev/aboutMe.png'
          alt='about me image'
          width={420}
          height={420}
          draggable={false}
        />
      </div>
      <div className='flex flex-1 flex-col gap-6'>
        <Heading highlight='About' text='Me' />
        <CopyText>
          When I&apos;m not immersed in coding, you&apos;ll often find me on the dance floor. In
          2023, I started exploring the vibrant world of salsa, bachata, and kizomba, and it&apos;s
          been an incredible journey. I love the energy of social dance events, where meeting new
          people and sharing a dance is effortless fun. Another big interest of mine is personal
          finance. I&apos;m always seeking smarter ways to save and invest for the future.
        </CopyText>
      </div>
    </section>
  )
}
