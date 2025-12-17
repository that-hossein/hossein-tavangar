'use client'
import { useEffect, useState } from 'react'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { TextMorph } from '@/components/motion-primitives/text-morph'
import clsx from 'clsx'
import { Button } from '@/components/button'
import { ChevronsDownIcon, DownloadIcon, PhoneIcon } from 'lucide-react'
import { DefaultInView } from '@/components/default-in-view'

const subtitles = [
  'Frontend developer for Vue.js',
  'Frontend developer for Nuxt.js',
  'Frontend developer for React.js',
  'Frontend developer for Next.js'
]

export default function HeroSection() {
  const [subtitle, setSubtitle] = useState<string | null>(null)

  const handleShowSubtitle = () => {
    setSubtitle(subtitles[0])
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentSubtitleIndex = subtitles.findIndex(
        (item) => item === subtitle
      )

      setSubtitle(
        subtitles[
          currentSubtitleIndex < subtitles.length - 1
            ? currentSubtitleIndex + 1
            : 0
        ]
      )
    }, 2500)

    return () => {
      clearInterval(intervalId)
    }
  }, [subtitle])

  return (
    <>
      <section className='relative bg-background h-dvh p-4 flex flex-col items-center justify-center gap-4'>
        <DefaultInView reverse>
          <TextEffect
            per='char'
            preset='fade'
            as='h1'
            delay={0.5}
            className='text-4xl md:text-7xl font-semibold text-on-background'
            onAnimationComplete={handleShowSubtitle}>
            Hossein Tavangar
          </TextEffect>
        </DefaultInView>

        <DefaultInView reverse>
          <TextMorph
            as='h2'
            className={clsx(
              'transition-opacity duration-300 text-on-background/60 text-xl md:text-3xl',
              subtitle ? 'opacity-100' : 'opacity-0'
            )}>
            {subtitle || subtitles[0]}
          </TextMorph>
        </DefaultInView>

        <DefaultInView reverse>
          <div
            className={clsx(
              'flex items-center gap-4 transition-opacity duration-1000 pt-6',
              subtitle ? 'opacity-100' : 'opacity-0'
            )}>
            <Button
              href='#contact'
              text='Contact'
              start={<PhoneIcon size={16} />}
              className='relative'
            />

            <Button
              text='Get CV'
              variant='ghost'
              start={<DownloadIcon size={16} />}
              href='/resume.pdf'
              download='Hossein Tavangar CV'
            />
          </div>
        </DefaultInView>

        <a href='#about-me'>
          <ChevronsDownIcon
            className={clsx(
              'transition-opacity duration-1000 absolute bottom-4 animate-bounce text-on-background/30 cursor-pointer',
              subtitle ? 'opacity-100' : 'opacity-0'
            )}
            size={34}
          />
        </a>
      </section>
    </>
  )
}
