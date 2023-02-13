interface HeadingProps {
  highlight?: string
  text?: string
}

export function Heading({ highlight, text }: HeadingProps) {
  return (
    <h2 className='font-heading text-3xl leading-tight font-semibold'>
      {highlight && (
        <span className='gradient-heading dark:gradient-heading-dark'>{highlight} </span>
      )}
      {text && <span className='text-black dark:text-white'>{text}</span>}
    </h2>
  )
}
