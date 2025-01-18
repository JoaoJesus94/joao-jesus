import { cx } from 'class-variance-authority'
import Image from 'next/image'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

import { Heading } from '@/components/ui/Heading'
import { Link } from '@/components/ui/Link'

type Project = {
  link: string
  description: string
  github?: string
  imgUrl: string
  imgAlt: string
  name: string
  stack: string[]
}

const projectsData: Project[] = [
  {
    link: 'https://joaojesus.dev',
    description:
      'This is my personal website. It features a responsive design, SEO optimization, and a clean layout showcasing my skills and projects. The site highlights my expertise in creating performance-driven, user-friendly websites tailored to deliver an optimal experience across devices.',
    github: 'https://github.com/JoaoJesus94/joao-jesus',
    imgUrl:
      'https://res.cloudinary.com/joaojesus/image/upload/v1677024738/JoaoJesus.dev/joaojesus.dev.png',
    imgAlt: 'Personal website',
    name: 'joaojesus.dev',
    stack: ['React', 'NextJS', 'TypeScript', 'TailwindCss'],
  },
  {
    link: 'https://chemondis.com',
    description:
      'CheMondis is a leading B2B marketplace for the chemical industry, connecting buyers and sellers worldwide. It offers a secure, efficient platform for trading chemicals, featuring advanced search tools, real-time communication, and transparent transactions, simplifying procurement and sales in a highly regulated market.',
    imgUrl: 'https://res.cloudinary.com/joaojesus/image/upload/v1737164906/chemondis.png',
    imgAlt: 'CheMondis website',
    name: 'CheMondis',
    stack: ['React', 'Redux', 'JavaScript', 'Styled Components'],
  },
  {
    link: 'https://tamanna.com',
    description:
      'Tamanna.com is a Kuwait-based online shopping platform offering over 300 global fashion, beauty, and lifestyle brands. Launched in 2021, it provides free next-day delivery, click-and-collect at Avenues Mall, and easy returns, delivering a seamless shopping experience tailored to modern consumers needs.',
    imgUrl: 'https://res.cloudinary.com/joaojesus/image/upload/v1737166216/tamanna.png',
    imgAlt: 'Tamanna website',
    name: 'Tamanna',
    stack: ['React', 'TypeScript', 'TailwindCss'],
  },
]

export function Projects() {
  return (
    <section id='projects' className='md:text-center scroll-m-8'>
      <Heading highlight='Projects' text="I've worked on" />
      <div className='flex flex-col gap-20 mt-16'>
        {projectsData.map(({ name, description, imgUrl, imgAlt, stack, github, link }, index) => {
          const isOdd = !!(index % 2)
          return (
            <div
              key={name}
              className={cx('flex flex-col gap-6', isOdd ? 'md:flex-row-reverse' : 'md:flex-row')}
            >
              <Image
                className='rounded-lg self-center max-w-md h-[250px] w-full object-cover border border-[#d067ff2b]'
                src={imgUrl}
                width={400}
                height={250}
                alt={imgAlt}
              />
              <div className='flex flex-col md:justify-between gap-4 text-start w-full relative'>
                <div className='flex justify-between'>
                  <h3 className='font-heading text-xl font-semibold'>{name}</h3>
                  <div className='flex gap-4'>
                    {github && (
                      <Link href={github} target='_blank' rel='noopener noreferrer'>
                        <FiGithub size={24} />
                      </Link>
                    )}
                    <Link href={link} target='_blank' rel='noopener noreferrer'>
                      <FiExternalLink size={24} />
                    </Link>
                  </div>
                </div>
                <p className='p-4 bg-[#cf67ff2b] rounded-sm text-sm'>{description}</p>
                <div className='flex flex-col font-heading'>
                  <span className='font-medium gradient-heading dark:gradient-heading-dark'>
                    Tools and Languages
                  </span>
                  <div>
                    {stack.map((tech, index) => (
                      <span key={tech} className='font-medium'>
                        {tech}
                        {index < stack.length - 1 && <span className='text-sm mx-3'>|</span>}
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
