import { Heading } from '@/components/ui/Heading'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

import Image from 'next/image'
import { Link } from '@/components/ui/Link'
import { cx } from 'class-variance-authority'

const projectsData = [
  {
    demo: 'https://joaojesus.dev',
    description:
      'This is the project my personal website. Its purpose is to demonstrate my expertise as a frontend developer, highlight my portfolio of completed projects, and showcase my skills.',
    github: 'https://github.com/JoaoJesus94/joao-jesus',
    imgUrl:
      'https://res.cloudinary.com/joaojesus/image/upload/v1677024738/JoaoJesus.dev/joaojesus.dev.png',
    name: 'joaojesus.dev',
    stack: ['React', 'NextJS', 'TypeScript', 'Tailwindcss'],
  },
]

export function Projects() {
  return (
    <section id='projects' className='md:text-center'>
      <Heading highlight='Projects' text="I've worked on" />
      <div className='flex flex-col gap-20 mt-16'>
        {projectsData.map(({ name, description, imgUrl, stack, github, demo }, index) => {
          const isOdd = !!(index % 2)
          return (
            <div
              key={name}
              className={cx('flex flex-col gap-6', isOdd ? 'md:flex-row-reverse' : 'md:flex-row')}
            >
              <Image
                className='rounded-lg self-center max-w-md max-h-[252px] w-full h-full object-cover border border-[#d067ff2b]'
                src={imgUrl}
                width={400}
                height={250}
                alt='random cat'
              />
              <div className='flex flex-col md:justify-between gap-6 text-start w-full relative'>
                <div className='flex justify-between'>
                  <div className='flex flex-col font-heading'>
                    <span className='font-medium gradient-heading dark:gradient-heading-dark'>
                      Project name
                    </span>
                    <h3 className='text-xl font-semibold'>{name}</h3>
                  </div>
                  <div className='flex gap-4'>
                    <Link href={github} target='_blank' rel='noopener noreferrer'>
                      <FiGithub size={24} />
                    </Link>
                    <Link href={demo} target='_blank' rel='noopener noreferrer'>
                      <FiExternalLink size={24} />
                    </Link>
                  </div>
                </div>
                <p className='p-4 bg-[#d067ff2b] backdrop-blur-2xl rounded-sm text-sm'>
                  {description}
                </p>
                <div className='flex flex-col font-heading'>
                  <span className='font-medium gradient-heading dark:gradient-heading-dark'>
                    Tools and Languages
                  </span>
                  <div className='flex flex-row gap-x-6 items-center flex-wrap'>
                    {stack.map(tech => (
                      <span key={tech} className='font-medium'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
