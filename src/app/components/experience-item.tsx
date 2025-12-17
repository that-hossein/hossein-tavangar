import { ChevronRightIcon } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogDescription,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogTitle,
  MorphingDialogTrigger
} from './motion-primitives/morphing-dialog'

export interface ExperienceItemProps {
  company: string
  logo: string
  position: string
  start: Date
  end?: Date
  isPartTime?: boolean
  description: string
}

function getDuration(start: Date, end: Date = new Date()) {
  const startYear = start.getFullYear()
  const startMonth = start.getMonth()

  const endYear = end.getFullYear()
  const endMonth = end.getMonth()

  let totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1 // 👈 LinkedIn counts the start month

  if (totalMonths < 0) totalMonths = 0

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const result = []
  if (years) {
    result.push(`${years} ${years > 1 ? 'yrs' : 'yr'}`)
  }

  if (months) {
    result.push(`${months} ${months > 1 ? 'mos' : 'mo'}`)
  }

  return result.join(' ')
}

export function ExperienceItem(props: ExperienceItemProps) {
  const startDate = `${new Intl.DateTimeFormat('en', { month: 'short' }).format(
    props.start
  )} ${new Intl.DateTimeFormat('en', { year: 'numeric' }).format(props.start)}`

  const endDate = props.end
    ? `${new Intl.DateTimeFormat('en', { month: 'short' }).format(
        props.end
      )} ${new Intl.DateTimeFormat('en', { year: 'numeric' }).format(
        props.end
      )}`
    : 'Present'

  const duration = getDuration(props.start, props.end)

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 24
      }}>
      <MorphingDialogTrigger className='group transition-colors duration-500 border border-on-background/50 hover:border-on-background rounded-lg w-full p-4 text-on-background'>
        <div className='flex items-center gap-4'>
          <div className='flex flex-col gap-2 grow'>
            <MorphingDialogTitle className='text-xl text-start font-bold'>
              {props.position}
              {props.isPartTime && (
                <span className='opacity-50 text-sm px-1'>(Part-time)</span>
              )}
            </MorphingDialogTitle>

            <div className='flex items-center gap-4'>
              <MorphingDialogImage
                src={props.logo}
                alt={props.company}
                style={{ borderRadius: '90%' }}
                className='size-15 object-contain bg-on-background'
              />

              <MorphingDialogSubtitle className='flex flex-col gap-1 text-start'>
                <h5 className='text-lg font-semibold'>{props.company}</h5>
                <span className='opacity-75 text-sm'>
                  {startDate} - {endDate} · {duration}
                </span>
              </MorphingDialogSubtitle>
            </div>
          </div>

          <ChevronRightIcon className='transition-all duration-700 text-on-background/30 group-hover:text-on-background' />
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className='relative max-h-[85%] overflow-auto w-[90%] md:w-[500px] border border-on-background/50 rounded-lg bg-background text-on-background'>
          <div className='relative flex flex-col gap-2 grow'>
            <MorphingDialogImage
              src={props.logo}
              alt={props.company}
              className='w-full h-40 object-contain bg-on-background py-10'
            />

            <div className='p-4 flex flex-col gap-3'>
              <MorphingDialogTitle className='text-2xl text-start font-semibold'>
                {props.position}
                {props.isPartTime && (
                  <span className='opacity-50 text-sm px-1'>(Part-time)</span>
                )}
              </MorphingDialogTitle>

              <div className='flex items-center gap-4'>
                <MorphingDialogSubtitle className='flex flex-col gap-1 text-start'>
                  <h5 className='font-semibold text-xl'>{props.company}</h5>
                  <span className='opacity-75 text-sm'>
                    {startDate} - {endDate} · {duration}
                  </span>
                </MorphingDialogSubtitle>
              </div>

              <MorphingDialogDescription
                disableLayoutAnimation
                variants={{
                  initial: { opacity: 0, scale: 0.8, y: 100 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.8, y: 100 }
                }}>
                <p>{props.description}</p>
              </MorphingDialogDescription>
            </div>
          </div>
          <MorphingDialogClose className='text-background cursor-pointer' />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
