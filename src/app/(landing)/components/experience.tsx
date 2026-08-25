import { DefaultInView } from '@/components/default-in-view'
import {
  ExperienceItem,
  ExperienceItemProps
} from '@/components/experience-item'
import { SectionTitle } from '@/components/section-title'
import { experience as experienceData } from '@/data/resume'
import clsx from 'clsx'

interface ExperienceItem extends ExperienceItemProps {
  id: number
  half?: boolean
}

const logos: Record<string, string> = {
  Argoman: '/argoman-logo.svg',
  'Smart Trust for the Future': '/smart-trust-logo.png',
  'MTYN Ltd.': '/mtyn-logo.png',
  'Self Employed': '/freelance-logo.png',
  XSyntax: '/xsyntax-logo.png'
}

const experience: ExperienceItem[] = experienceData.map((item, index) => ({
  ...item,
  id: index + 1,
  logo: logos[item.company]
}))

export function Experience() {
  return (
    <section className='flex flex-col items-center justify-center px-6 py-20'>
      <DefaultInView className='w-full' once>
        <SectionTitle title='Experience' className='mb-10' />
      </DefaultInView>

      <div className='grid md:grid-cols-2 w-full gap-y-4 gap-x-2 md:max-w-3/4 lg:max-w-2/3 xl:max-w-2/4 2xl:max-w-1/3'>
        {experience.map((item) => (
          <DefaultInView
            key={item.id}
            className={clsx(!item.half && 'col-span-full')}
            once>
            <ExperienceItem {...item} />
          </DefaultInView>
        ))}
      </div>
    </section>
  )
}
