import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTypescript,
} from 'react-icons/si'

const SKILL_ICON_MAPPER = {
  css: SiCss3,
  git: SiGit,
  html: SiHtml5,
  javascript: SiJavascript,
  react: SiReact,
  redux: SiRedux,
  typescript: SiTypescript,
}

type SkillProps = {
  skill: keyof typeof SKILL_ICON_MAPPER
}

export function Skill({ skill }: SkillProps) {
  const Icon = SKILL_ICON_MAPPER[skill.toLowerCase() as SkillProps['skill']]

  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <Icon size={32} className='fill-skill dark:fill-skill-dark' />
      <p>{skill}</p>
    </div>
  )
}
