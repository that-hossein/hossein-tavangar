import { DefaultInView } from '@/components/default-in-view'
import { ExperienceItem } from '@/components/experience-item'
import { SectionTitle } from '@/components/section-title'
import { experience } from '@/data/resume'

export function Experience() {
  return (
    <section className='flex flex-col items-center justify-center px-6 py-20'>
      <DefaultInView className='w-full' once>
        <SectionTitle title='Experience' className='mb-10' />
      </DefaultInView>

      <div className='grid md:grid-cols-2 w-full gap-y-4 gap-x-2 md:max-w-3/4 lg:max-w-2/3 xl:max-w-2/4 2xl:max-w-1/3'>
        {experience.map((item) => (
          <DefaultInView
            key={`${item.company}-${item.position}`}
            className='col-span-full'
            once>
            <ExperienceItem {...item} />
          </DefaultInView>
        ))}
      </div>
    </section>
  )
}
