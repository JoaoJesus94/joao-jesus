import Image from 'next/image'

import { AboutMe } from '@/components/AboutMe'
import { Intro } from '@/components/Intro'
import { Projects } from '@/components/Projects'
import { SkillList } from '@/components/SkillList'

export default function Home() {
  return (
    <main className='flex flex-col gap-24 md:gap-32 pb-40'>
      <Image
        className='bg-patch top-0 left-0'
        src='https://res.cloudinary.com/joaojesus/image/upload/v1676419495/JoaoJesus.dev/backShapes.png'
        alt='back shapes'
        width={450}
        height={450}
        draggable={false}
      />
      <Intro />
      <AboutMe />
      <SkillList />
      <Projects />
    </main>
  )
}
