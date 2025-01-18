import { Heading } from '@/components/ui/Heading'
import { Skill, type SkillOptions } from '@/components/ui/Skill'

const skills: SkillOptions[] = [
  'React',
  'Redux',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Vite',
  'Vitest',
  'Jest',
  'TailwindCSS',
  'GraphQL',
  'Cypress',
  'Webpack',
  'Storybook',
]

export function SkillList() {
  return (
    <section id='skills' className='md:text-center scroll-m-8'>
      <Heading highlight='Technologies' text='I have experience working with' />
      <div className='grid grid-cols-[repeat(auto-fit,110px)] justify-between gap-y-8 gap-x-4 mt-16'>
        {skills.map(skill => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
    </section>
  )
}
