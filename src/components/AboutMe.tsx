import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import Image from 'next/image'

import { CopyText } from '@/components/ui/CopyText'
import { Heading } from '@/components/ui/Heading'
import { Link } from '@/components/ui/Link'

export function AboutMe() {
  return (
    <section className='flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16'>
      <div className='flex-1 min-w-[270px] sm:min-w-[340px] max-w-[420px]'>
        <Image
          src='https://res.cloudinary.com/joaojesus/image/upload/v1676419495/JoaoJesus.dev/aboutMe.png'
          alt='about me image'
          width={420}
          height={420}
          draggable={false}
        />
      </div>
      <div className='flex flex-1 flex-col gap-6'>
        <Heading highlight='About' text='Me' />
        <CopyText>
          Software Engineer with 4 years of experience in building and maintaining web applications.
          Experience with responsive design, cross-browser compatibility, and SEO. Skilled in
          debugging and performance optimization. Strong understanding of web accessibility.
          Experience working in agile development environments. Strong problem-solving and
          communication skills. Ability to collaborate with cross-functional teams and stakeholders.
          Passion for staying up to date with the latest web technologies and industry trends.
        </CopyText>
        <div className='flex gap-7'>
          <Link href='https://github.com/JoaoJesus94' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={32} />
          </Link>
          <Link
            href='https://www.linkedin.com/in/joaojesus94'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size={32} />
          </Link>
          <Link href='https://twitter.com/JoaoJesus_94' target='_blank' rel='noopener noreferrer'>
            <FaTwitter size={32} />
          </Link>
        </div>
        <Link href='#' variant='button'>
          Contact me
        </Link>
      </div>
    </section>
  )
}
