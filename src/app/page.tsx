import Image from 'next/image'

import { AboutMe } from '@/components/AboutMe'
import { Intro } from '@/components/Intro'
import { Projects } from '@/components/Projects'
import { SkillList } from '@/components/SkillList'
import backShapes from '@/public/backShapes.png'

export default function Home() {
  return (
    <main className='flex flex-col gap-24 md:gap-32 pb-40'>
      <Image
        className='bg-patch top-0 left-0'
        src={backShapes}
        alt='back shapes'
        draggable={false}
      />
      <Intro />
      <AboutMe />
      <SkillList />
      <Projects />
    </main>
  )
}
