import Image from 'next/image'

export function Maintenance() {
  return (
    <body className=' bg-[#2D353F] text-white font-body pt-6 px-6 max-w-screen-lg m-auto transition-colors duration-300'>
      <div className='flex flex-col items-center text-center'>
        <span>
          <h1 className='font-heading text-4xl font-medium leading-normal'>joaojesus.dev</h1>
          <p className='text-2xl'>under maintenance</p>
        </span>
        <div>
          <Image
            src='https://res.cloudinary.com/joaojesus/image/upload/w_700/v1676430200/maintenanceDark.jpg'
            alt='Website under construction'
            width={600}
            height={600}
          />
          <a
            href='https://www.freepik.com/free-vector/technology-device-maintenance-support-cartoon_5001438.htm#page=2&query=website%20under%20construction&position=25&from_view=search&track=ais'
            target='_blank'
            rel='noopener noreferrer'
          >
            Image by jemastock on Freepik
          </a>
        </div>
      </div>
    </body>
  )
}
