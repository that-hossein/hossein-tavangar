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

      <div className='text-on-background text-pretty text-center text-lg md:max-w-3/4 lg:max-w-2/3'>
        <DefaultInView once>
          <p className='mb-3'>
            As a passionate frontend developer, I specialize in Vue.js, Nuxt.js,
            and crafting responsive, scalable web solutions. I am dedicated to
            crafting seamless user experiences and collaborating with
            cross-functional teams to address complex challenges in web
            development. With a growing expertise in TypeScript, I am committed
            to writing clean, maintainable code. Currently, I am expanding my
            knowledge in React and Angular, aiming to enhance my versatility and
            stay ahead of evolving web technologies.
          </p>
        </DefaultInView>

        <DefaultInView once>
          <p className='mb-3'>
            I enjoy working collaboratively, mentoring developers, and focusing
            on delivering high-quality, pixel-perfect applications. My goal is
            to continue developing innovative, performance-driven solutions
            while exploring new opportunities in the ever-changing tech
            landscape.
          </p>
        </DefaultInView>

        <DefaultInView once>
          <p>
            In addition, I have a well-rounded skill set with experience in
            backend development using PHP, Node.js, NestJS, and Android
            development.
          </p>
        </DefaultInView>
      </div>
    </section>
  )
}
