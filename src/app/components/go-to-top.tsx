'use client'

import { useEffect, useState } from 'react'
import { ChevronUpIcon } from 'lucide-react'
import clsx from 'clsx'

export function GoToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const threshold = window.visualViewport?.height || 600

    const onScroll = () => {
      setVisible(window.scrollY > threshold / 2)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={clsx(
        'fixed bg-background cursor-pointer hover:bg-foreground/30 text-on-background h-8 w-8 flex items-center justify-center rounded-full border border-on-background/20 right-4 z-50 transition-all',
        visible ? 'bottom-4' : '-bottom-10'
      )}
      onClick={handleClick}>
      <ChevronUpIcon size={16} />
    </button>
  )
}
