import clsx from 'clsx'

export interface SectionTitleProps {
  title: string
  className?: string
}

export function SectionTitle(props: SectionTitleProps) {
  return (
    <div
      className={clsx(
        'relative w-full flex justify-center items-center',
        props.className
      )}>
      <h2 className='text-3xl md:text-5xl font-semibold text-on-background'>
        {props.title}
      </h2>
      <span className='text-4xl md:text-6xl font-extrabold font-stretch-expanded text-on-background/3 absolute scale-y-150'>
        {props.title}
      </span>
    </div>
  )
}
