import { Heading } from '@/components/ui/Heading'
import Image from 'next/image'

const projectsData = [
  {
    description:
      'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    imgUrl: 'https://placekitten.com/300/300',
    name: 'JoaoJesus.dev',
    stack: ['html', 'css', 'JavaScript', 'TypeScript'],
  },
  {
    description:
      'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    imgUrl: 'https://placekitten.com/300/300',
    name: 'Pokedex',
    stack: ['html', 'css', 'JavaScript', 'TypeScript', 'html', 'css', 'JavaScript', 'TypeScript'],
  },
]

export function Projects() {
  return (
    <section className='md:text-center'>
      <Heading className='pb-10' highlight='Projects' text="I've done" />
      <div className='flex flex-col gap-16'>
        {projectsData.map(({ name, description, imgUrl, stack }) => (
          <div key={name} className='flex flex-col md:flex-row gap-6'>
            <Image
              className='rounded-lg self-center md:max-w-[300px]'
              src={imgUrl}
              width={300}
              height={300}
              alt='random cat'
            />
            <div className='flex flex-col md:justify-between gap-6 text-start w-full relative'>
              <div className='flex flex-col font-heading'>
                <span className='font-medium gradient-heading dark:gradient-heading-dark'>
                  Project name
                </span>
                <h3 className='text-xl font-semibold'>{name}</h3>
              </div>
              <p className='md:absolute md:top-0 md:bottom-0 md:-left-20 md:h-fit md:max-h-[172px] md:m-auto p-4 bg-[#d067ff2b] backdrop-blur-sm rounded-sm text-sm'>
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
        ))}
      </div>
    </section>
  )
}
