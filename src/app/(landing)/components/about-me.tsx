import { DefaultInView } from '@/components/default-in-view'
import { SectionTitle } from '@/components/section-title'
import { about, name, profileImage } from '@/data/resume'
import Image from 'next/image'

export function AboutMe() {
  return (
    <section
      id='about-me'
      className='flex flex-col items-center justify-center px-6 py-20 bg-background-alpha'>
      <DefaultInView className='w-full' once>
        <SectionTitle title='About Me' className='mb-10' />
      </DefaultInView>

      <DefaultInView once>
        <Image
          src={profileImage}
          alt={name}
          className='rounded-full mb-10 border-2 border-on-background/20'
          width={160}
          height={160}
        />
      </DefaultInView>

      <div className='text-on-background text-pretty text-center text-lg md:max-w-3/4 lg:max-w-2/3 xl:max-w-2/4 2xl:max-w-1/3'>
        {about.map((paragraph, index) => (
          <DefaultInView key={paragraph} once>
            <p className={index < about.length - 1 ? 'mb-3' : undefined}>
              {paragraph}
            </p>
          </DefaultInView>
        ))}
      </div>
    </section>
  )
}
