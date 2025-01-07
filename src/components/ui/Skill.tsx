import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTypescript,
  SiVite,
  SiVitest,
  SiJest,
  SiTailwindcss,
  SiGraphql,
  SiCypress,
  SiWebpack,
  SiStorybook,
} from 'react-icons/si'

const SKILL_ICON_MAPPER = {
  CSS: SiCss3,
  git: SiGit,
  HTML: SiHtml5,
  JavaScript: SiJavascript,
  React: SiReact,
  Redux: SiRedux,
  TypeScript: SiTypescript,
  Vite: SiVite,
  Vitest: SiVitest,
  Jest: SiJest,
  TailwindCSS: SiTailwindcss,
  GraphQL: SiGraphql,
  Cypress: SiCypress,
  Webpack: SiWebpack,
  Storybook: SiStorybook,
}

export type SkillOptions = keyof typeof SKILL_ICON_MAPPER

type SkillProps = { skill: SkillOptions }

export function Skill({ skill }: SkillProps) {
  const Icon = SKILL_ICON_MAPPER[skill]

  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <Icon size={32} className='fill-skill dark:fill-skill-dark' />
      <p>{skill}</p>
    </div>
  )
}
