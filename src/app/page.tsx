import Image from 'next/image'

import backShapes from '@/public/backShapes.png'
import { Intro } from '@/components/Intro'
import { AboutMe } from '@/components/AboutMe'

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
    </main>
  )
}
