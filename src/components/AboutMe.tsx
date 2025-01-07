import { FaLinkedin, FaGithub } from 'react-icons/fa'
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
          Frontend Engineer with over 5 years of experience in developing high-performance
          applications using Typescript and React. Expertise in performance optimization and
          building responsive UIs. A strong advocate for writing clean, maintainable code and
          delivering seamless user experiences. Effective communicator who thrives in
          cross-functional teams, bringing a passion for continuous growth and learning.
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
        </div>
        {/* <Link href='#' variant='button'>
          Contact me
        </Link> */}
      </div>
    </section>
  )
}
