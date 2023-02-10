import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import Image from 'next/image'
import NextLink from 'next/link'

import { CopyText } from '@/components/CopyText'
import { Link } from '@/components/Link'
import aboutMe from '@/public/aboutMe.png'

export function AboutMe() {
  return (
    <section className='flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16'>
      <div className='flex-1 min-w-[270px] sm:min-w-[340px] max-w-[420px]'>
        <Image src={aboutMe} alt='' draggable={false} />
      </div>
      <div className='flex flex-1 flex-col gap-6'>
        <h2 className='font-heading text-3xl leading-tight font-semibold'>
          <span className='gradient-heading dark:gradient-heading-dark'>About </span>
          <span className='text-black dark:text-white'>Me</span>
        </h2>
        <CopyText>
          Software Engineer with 4 years of experience in building and maintaining web applications.
          Experience with responsive design, cross-browser compatibility, and SEO. Skilled in
          debugging and performance optimization. Strong understanding of web accessibility.
          Experience working in agile development environments. Strong problem-solving and
          communication skills. Ability to collaborate with cross-functional teams and stakeholders.
          Passion for staying up to date with the latest web technologies and industry trends.
        </CopyText>
        <div className='flex gap-7'>
          <NextLink href='https://github.com/JoaoJesus94' target='_blank'>
            <FaGithub size={32} />
          </NextLink>
          <NextLink href='https://www.linkedin.com/in/joaojesus94' target='_blank'>
            <FaLinkedin size={32} />
          </NextLink>
          <NextLink href='https://twitter.com/JoaoJesus_94' target='_blank'>
            <FaTwitter size={32} />
          </NextLink>
        </div>
        <Link href='#' variant='button'>
          Contact me
        </Link>
      </div>
    </section>
  )
}
