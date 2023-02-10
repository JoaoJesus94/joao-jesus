import { Heading } from '@/components/Heading'
import { Skill } from '@/components/Skill'

export const skills = ['React', 'Redux', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] as const

export function SkillList() {
  return (
    <section className='md:text-center'>
      <Heading highlight='Skills' text="I've acquired" />
      <div className='grid  grid-cols-[repeat(auto-fit,90px)] justify-between gap-y-8 gap-6 pt-8'>
        {skills.map(skill => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
    </section>
  )
}
