import { Heading } from '@/components/ui/Heading'
import { Skill } from '@/components/ui/Skill'

const skills = ['React', 'Redux', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] as const

export function SkillList() {
  return (
    <section className='md:text-center'>
      <Heading highlight='Technologies' text="I've been working with" />
      <div className='grid grid-cols-[repeat(auto-fit,90px)] justify-between gap-y-8 gap-x-4 mt-16'>
        {skills.map(skill => (
          <Skill key={skill} skill={skill as Lowercase<typeof skills[number]>} />
        ))}
      </div>
    </section>
  )
}
