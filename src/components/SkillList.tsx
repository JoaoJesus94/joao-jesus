import { Skill } from '@/components/Skill'

export const skills = ['React', 'Redux', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] as const

export function SkillList() {
  return (
    <section className='md:text-center'>
      <h2 className='font-heading text-3xl leading-tight font-semibold'>
        <span className='gradient-heading dark:gradient-heading-dark'>Skills </span>
        <span className='text-black dark:text-white'>I&apos;ve acquired</span>
      </h2>
      <div className='grid  grid-cols-[repeat(auto-fit,90px)] justify-between gap-y-8 gap-6 pt-8'>
        {skills.map(skill => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
    </section>
  )
}
