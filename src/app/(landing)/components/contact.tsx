import { Button } from '@/components/button'
import { DefaultInView } from '@/components/default-in-view'
import { Magnetic } from '@/components/motion-primitives/magnetic'
import { SectionTitle } from '@/components/section-title'
import { ExternalLink } from 'lucide-react'

export function Contact() {
  return (
    <section
      id='contact'
      className='flex flex-col items-center justify-center px-6 py-20 bg-background-alpha'>
      <DefaultInView className='w-full' once margin={20}>
        <SectionTitle title='Contact' className='mb-10' />
      </DefaultInView>

      <DefaultInView className='w-full' once margin={20}>
        <div className='w-full md:max-w-3/4 lg:max-w-2/3 grid grid-cols-2 gap-4 mx-auto'>
          <Magnetic
            intensity={0.2}
            springOptions={{ bounce: 0.1 }}
            actionArea='self'
            range={200}>
            <Button
              className='justify-center w-full'
              href='https://www.linkedin.com/in/tavangar'
              target='_blank'>
              <Magnetic
                intensity={0.1}
                springOptions={{ bounce: 0.1 }}
                actionArea='parent'
                range={200}>
                <div className='flex items-center justify-center gap-2'>
                  <span>LinkedIn</span>
                  <ExternalLink size={16} />
                </div>
              </Magnetic>
            </Button>
          </Magnetic>

          <Magnetic
            intensity={0.2}
            springOptions={{ bounce: 0.1 }}
            actionArea='self'
            range={200}>
            <Button
              className='justify-center w-full'
              href='https://t.me/that_hossein'
              target='_blank'>
              <Magnetic
                intensity={0.1}
                springOptions={{ bounce: 0.1 }}
                actionArea='parent'
                range={200}>
                <div className='flex items-center justify-center gap-2'>
                  <span>Telegram</span>
                  <ExternalLink size={16} />
                </div>
              </Magnetic>
            </Button>
          </Magnetic>

          <div className='col-span-full'>
            <Magnetic
              intensity={0.2}
              springOptions={{ bounce: 0.1 }}
              actionArea='self'
              range={200}>
              <Button
                className='justify-center w-full'
                href='mailto:androsein1@gmail.com'
                target='_blank'>
                <Magnetic
                  intensity={0.1}
                  springOptions={{ bounce: 0.1 }}
                  actionArea='parent'
                  range={200}>
                  <div className='flex items-center justify-center gap-2'>
                    <span>Email</span>
                    <ExternalLink size={16} />
                  </div>
                </Magnetic>
              </Button>
            </Magnetic>
          </div>

          {/* <div className='col-span-full text-on-background text-center text-sm'>
            <span className='inline-flex gap-1'>
              Or Let&apos;s say
              <a
                href='mailto:hi@hosseintavangar.ir'
                className='text-foreground flex items-center gap-1'>
                hi@hosseintavangar.ir
                <ExternalLink size={16} />
              </a>
            </span>
          </div> */}
        </div>
      </DefaultInView>
    </section>
  )
}
