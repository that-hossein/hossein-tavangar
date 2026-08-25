import { DefaultInView } from '@/components/default-in-view'
import { SectionTitle } from '@/components/section-title'
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
          src='/profile.jpg'
          alt='Hossein Tavangar'
          className='rounded-full mb-10 border-2 border-on-background/20'
          width={160}
          height={160}
        />
      </DefaultInView>

      <div className='text-on-background text-pretty text-center text-lg md:max-w-3/4 lg:max-w-2/3 xl:max-w-2/4 2xl:max-w-1/3'>
        <DefaultInView once>
          <p className='mb-3'>
            Senior Frontend Developer with 7+ years of experience building
            responsive, scalable web applications using Vue.js, Nuxt.js, and
            TypeScript. I focus on crafting seamless user experiences, mentoring
            engineers, and collaborating with cross-functional teams to solve
            complex problems in web development.
          </p>
        </DefaultInView>

        <DefaultInView once>
          <p className='mb-3'>
            I care about clean, maintainable code and pixel-perfect execution.
            Currently expanding into React to broaden my stack and stay ahead of
            where the industry is heading.
          </p>
        </DefaultInView>

        <DefaultInView once>
          <p>
            Beyond frontend, I have hands-on backend experience with PHP,
            Node.js, and NestJS, plus some Android development — gives me a
            fuller picture when working across a stack.
          </p>
        </DefaultInView>
      </div>
    </section>
  )
}
