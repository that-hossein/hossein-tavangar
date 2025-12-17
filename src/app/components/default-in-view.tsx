import { memo } from 'react'
import { InView, InViewProps } from './motion-primitives/in-view'

interface DefaultInViewProps {
  children: React.ReactNode
  margin?: number
  reverse?: boolean
  once?: boolean
  className?: string
}

export const DefaultInView = memo(function DefaultInView(
  props: DefaultInViewProps
) {
  const inViewProps = {
    once: props.once,
    variants: {
      hidden: {
        opacity: 0,
        y: props.reverse ? -100 : 100,
        filter: 'blur(4px)'
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
          staggerChildren: 0.15
        }
      }
    },
    viewOptions: {
      margin: `0px 0px -${
        props.margin === undefined ? 100 : props.margin
      }px 0px`
    },
    transition: { duration: 0.3, ease: 'easeInOut' },
    className: props.className
  } as Omit<InViewProps, 'children'>

  return <InView {...inViewProps}>{props.children}</InView>
})
